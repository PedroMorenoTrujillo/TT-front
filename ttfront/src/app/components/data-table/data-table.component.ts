import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableColumnsModel, TableDataModel } from './models/table.interface';
import { RouterModule } from '@angular/router';
import { IAccountDetail } from 'src/app/models/account.interface';
import { ExchangeModel } from 'src/app/models/exchange.interface';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  @Input() columns!: TableColumnsModel[];
  @Input() tableData!: TableDataModel<any>[];
  @Input() isSortOptionActive: boolean = false;
  @Input() exchangeRate!: ExchangeModel | null;
  @Input() details: boolean = false;

  colorCheckerRow(details: IAccountDetail[]): string {
    if (details.length > 0 && 
      details[details.length - 1]?.availableBalance <
      details[details.length - 2]?.availableBalance
    )
      return 'red';
    if (details.length > 0 &&
      details[details.length - 1]?.availableBalance >
      details[details.length - 2]?.availableBalance
    )
      return 'green';
      return ''
  }

  exchangeRateApplied(balanceValue: number): number{
    return this.exchangeRate ? this.exchangeRate.exchange * balanceValue : 0;
  }

  formatDate(value: Date): string{
    return new Date(value).toLocaleDateString();
  }

}
