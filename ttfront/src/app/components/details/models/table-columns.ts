import { TableColumnsModel } from '../../data-table/models/table.interface';

export const tableColumns: TableColumnsModel[] = [
  { field: 'createdAt', name: 'Date', type: 'date'  },
  { field: 'orderId', name: 'Order ID', type: 'regular'  },
  { field: 'orderCode', name: 'Order Code', type: 'regular'  },
  { field: 'transactionType', name: 'Transaction type' , type: 'regular'},
  { field: 'debit', name: 'Debit', type: 'balance' },
  { field: 'credit', name: 'Credit', type: 'balance' },
  { field: 'balance', name: 'Balance', type: 'balance' },
];
