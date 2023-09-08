import { ExchangeService } from './../../services/exchange.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ExchangeModel } from 'src/app/models/exchange.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ExchangeService],
})
export class HeaderComponent {
  exchangeValue: Observable<ExchangeModel> = new Observable<ExchangeModel>();

  constructor(private readonly exchangeService: ExchangeService) {
    this.getExchangeRate();
  }

  getExchangeRate(): void {
    this.exchangeValue = this.exchangeService.getExchangeFromSockets();
    
  }
}
