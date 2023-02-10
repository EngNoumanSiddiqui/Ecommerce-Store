import { Component, Input, OnInit } from '@angular/core';
import { IGridColumn } from 'src/app/models/grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  usersURL: string = 'https://dummyjson.com/users';

  @Input() gridcolumns: IGridColumn[] = [];
  userColumns: any[] = [];


  constructor(
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    fetch(this.usersURL).then(res => res.json()).then((response)=>{
      this.userColumns = response.users;
      console.log('this.userColumns: ', this.userColumns);
    });
  }

}
