import { TableColumnsModel } from '../../data-table/models/table.interface';

export const tableColumns: TableColumnsModel[] = [
  { field: 'accountName', name: 'Account Name', type: 'regular'  },
  { field: 'category', name: 'Category', type: 'regular'  },
  { field: 'tag', name: 'Tag', type: 'regular'  },
  { field: 'balance', name: 'Balance' , type: 'balance'},
  { field: 'availableBalance', name: 'Available Balance', type: 'balance' },
];
