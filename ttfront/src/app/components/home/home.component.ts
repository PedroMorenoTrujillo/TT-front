import { AccountModel } from './../../models/account.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import {
  TableColumnsModel,
  TableDataModel,
} from '../data-table/models/table.interface';
import { AccountService } from 'src/app/services/account.service';
import { tableColumns } from './models/table-columns';
import {
  Observable,
  Subject,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';
import { ExchangeObservableService } from 'src/app/services/exchange-observable.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AccountService],
})
export class HomeComponent implements OnInit, OnDestroy {
  tableColumns: TableColumnsModel[] = [...tableColumns];
  tableData: Observable<TableDataModel<AccountModel>[]> = new Observable<
    TableDataModel<AccountModel>[]
  >();
  private readonly unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private readonly exchangeObservableService: ExchangeObservableService
  ) {}

  ngOnInit(): void {
    this.getTableData();
    this.exchangeObservableService.exchangeObservableSource$
      .pipe(takeUntil(this.unsubscribe), distinctUntilChanged())
      .subscribe(() => this.getTableData());
  }

  getTableData(): void {
    this.tableData = this.accountService.getAccounts() as Observable<
      TableDataModel<AccountModel>[]
    >;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

// tableData: TableDataModel[] = [
//   {
//     id: '1',
//     accountName: 'acc 1',
//     category: 'cat 1',
//     tag: 'tag 1',
//     balance: 5,
//     availableBalance: 5,
//     orderCode: '22222',
//     orderId: '33333'
//   },
//   {
//     id: '2',
//     accountName: 'acc 2',
//     category: 'cat 2',
//     // tag: 'tag 2',
//     balance: 5,
//     availableBalance: 5,
//     orderCode: 'jj222',
//     orderId: '33ggg'
//   },
//   {
//     id: '3',
//     accountName: 'acc 3',
//     category: 'cat 3',
//     tag: 'tag 3',
//     balance: 5,
//     availableBalance: 5,
//     orderCode: '1122',
//     orderId: '343'
//   },
//   {
//     id: '4',
//     accountName: 'acc 4',
//     category: 'cat 4',
//     tag: 'tag 4',
//     balance: 5,
//     availableBalance: 5,
//     orderCode: '2222222',
//     orderId: '344433'
//   },
// ];
