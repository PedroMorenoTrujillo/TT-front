import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Observable, map } from 'rxjs';
import { AccountModel, IAccountDetail } from 'src/app/models/account.interface';
import { DataTableComponent } from '../data-table/data-table.component';
import { TableColumnsModel, TableDataModel } from '../data-table/models/table.interface';
import { ExchangeModel } from 'src/app/models/exchange.interface';
import { ExchangeService } from 'src/app/services/exchange.service';
import { tableColumns } from './models/table-columns';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [AccountService],
})
export class DetailsComponent implements OnInit {
  tableColumns: TableColumnsModel[] = [...tableColumns];
  account: Observable<AccountModel> = new Observable<AccountModel>();
  tableData: Observable<TableDataModel<IAccountDetail>[]> = new Observable<
    TableDataModel<IAccountDetail>[]
  >();
  exchangeRate: Observable<ExchangeModel> = new Observable<ExchangeModel>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly accountService: AccountService,
    private readonly exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute?.snapshot?.params['id'];
    if (id) this.accountService.emitAccountById(id);
    this.account = this.accountService.getAccountById();
    this.getAccountDataDetails();
    this.getExchangeRate();
  }

  getAccountDataDetails(): void {
    this.tableData = this.account.pipe(
      map((account: AccountModel) => account?.details)
    ) as Observable<TableDataModel<IAccountDetail>[]>;
  }

  getExchangeRate(): void {
    this.exchangeRate = this.exchangeService.getExchangeFromSockets();
    this.exchangeService.emitExchangeFromSocketsInit()
    this.accountService.emitAccountsFromSockets();
  }
}
