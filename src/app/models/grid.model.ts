export interface IGridColumn {
  id?: number;
  header: string;
  field: string;
  data?: any;
  value?: any;
  firstName?: string;
  lastName?: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  birthDate?: string;
  image?: string;
}

export enum EGridControl {
  INPUT = 'input',
  NUMERIC = 'number',
  EMAIL = 'email'
}
