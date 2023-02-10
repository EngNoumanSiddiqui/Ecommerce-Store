import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersURL: string = 'https://dummyjson.com/users';
  users: IUsers[] = [];

  constructor(

  ) {}

  ngOnInit(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch(this.usersURL).then(res => res.json()).then((response)=>{
      this.users = response.users;
      console.log('this.users: ', this.users);
    });

  }

}
