export interface AccountModel {
  _id: string;
  ccountName: string;
  category?: string;
  tag?: string;
  balance: number;
  availableBalance: number;
  details?: IAccountDetail[];
}

export interface IAccountDetail {
  _id: string;
  orderId?: string;
  orderCode?: string;
  transactionType: string;
  debit?: number;
  credit?: number;
  balance: number;
  availableBalance: number;
}
