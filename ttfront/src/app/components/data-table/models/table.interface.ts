export interface TableColumnsModel{
    field: string;
    name: string;
    type: 'date' | 'balance' | 'regular'
}

export type TableDataModel<T> = {
    [key in keyof T]: string | number;
};