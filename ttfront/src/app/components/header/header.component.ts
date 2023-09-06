import { ExchangeService } from './../../services/exchange.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, filter } from 'rxjs';
import { ExchangeObservableService } from 'src/app/services/exchange-observable.service';
import { ExchangeModel } from 'src/app/models/exchange.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ExchangeService],
})
export class HeaderComponent implements OnInit {
  exchangeValue: Observable<ExchangeModel> = new Observable<ExchangeModel>();

  constructor(
    private readonly exchangeService: ExchangeService,
    private exchangeObservableService: ExchangeObservableService
  ) {}

  ngOnInit(): void {
    this.exchangeValue = this.exchangeService.getExchangeFromSockets()
  }
}
