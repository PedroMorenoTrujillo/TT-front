export interface TableColumnsModel{
    field: string;
    name: string;
}

export type TableDataModel<T> = {
    [key in keyof T]: string | number;
};