
export interface IDynamicForm {
  formSections?: IFormSection[];
}

export interface IFormSection {
  fields?: IFormField[];
  name?: string;
}

export interface IFormField {
  label?: string | any;
  field?: string;
  value?: any;
  control?: EFormControl;
  data?: any[];
  icon?: string;
}

export enum EFormControl {
  INPUT = 'input',
  NUMERIC = 'number',
  PASSWORD = 'password',
  DROPDOWN = 'dropdown',
  BUTTON = 'button',
  EMAIL = 'email'
}

