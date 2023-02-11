import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICarts } from 'src/app/models/carts.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartsURL: string = 'https://dummyjson.com/carts';
  carts: ICarts[] = [];

  constructor(
    public router: Router,
  ) {}

  ngOnInit(){
    this.getCarts();
  }

  getCarts(){
    fetch(this.cartsURL).then(res => res.json()).then((response)=>{
      response.carts.forEach((cart)=>{
        this.carts = cart.products;
      })
    });
  }

  onProducts(){
    this.router.navigate(['/products']);
  }

  onUsers(){
    this.router.navigate(['/users']);
  }

}
