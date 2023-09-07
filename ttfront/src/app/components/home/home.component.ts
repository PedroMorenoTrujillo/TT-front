import { AccountModel } from './../../models/account.interface';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import {
  TableColumnsModel,
  TableDataModel,
} from '../data-table/models/table.interface';
import { AccountService } from 'src/app/services/account.service';
import { tableColumns } from './models/table-columns';
import { Observable } from 'rxjs';
import { ExchangeService } from 'src/app/services/exchange.service';
import { ExchangeModel } from 'src/app/models/exchange.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AccountService],
})
export class HomeComponent implements OnInit {
  tableColumns: TableColumnsModel[] = [...tableColumns];
  tableData: Observable<TableDataModel<AccountModel>[]> = new Observable<
    TableDataModel<AccountModel>[]
  >();
  exchangeRate: Observable<ExchangeModel> = new Observable<ExchangeModel>();

  constructor(
    private accountService: AccountService,
    private readonly exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.getAllAccounts();
    this.getTableData();
    this.getExchangeRate();
  }

  getTableData(): void {
    this.tableData = this.accountService.getAccountsFromSockets() as Observable<
      TableDataModel<AccountModel>[]
    >;
  }

  getAllAccounts(): void {
    this.accountService.emitAccountsFromSockets();
  }

  getExchangeRate(): void {
    this.exchangeRate = this.exchangeService.getExchangeFromSockets();
    this.exchangeService.emitExchangeFromSocketsInit();
  }
}
