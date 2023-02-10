import { Component } from '@angular/core';
import { IGridColumn } from 'src/app/models/grid.model';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent {
  gridColumns: IGridColumn[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initilizeGrid();
  }
  initilizeGrid(){
    this.gridColumns = [
      {
        header: 'First Name',
        field: '',
        value: ''
      },
      {
        header: 'Last Name',
        field: '',
        value: '',
      },
      {
        header: 'Maiden Name',
        field: '',
        value: ''
      },
      {
        header: 'Age',
        field: '',
        value: '',
      },
      {
        header: 'Gender',
        field: '',
        value: '',
      },
      {
        header: 'Email',
        field: '',
        value: '',
      },
      {
        header: 'User Name',
        field: '',
        value: '',
      },
      {
        header: 'Phone',
        field: '',
        value: '',
      },
      {
        header: 'Birth Date',
        field: '',
        value: '',
      },
    ];
  }
}
