import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableColumnsModel, TableDataModel } from './models/table.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() columns!: TableColumnsModel[];
  @Input() tableData!: TableDataModel<any>[];
}
