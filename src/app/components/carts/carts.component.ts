import { Component, OnInit } from '@angular/core';
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

  ) {}

  ngOnInit(){
    this.getCarts();
  }

  getCarts(){
    fetch(this.cartsURL).then(res => res.json()).then((response)=>{
      console.log('response: ', response.carts);
      response.carts.forEach((cart)=>{
        this.carts = cart.products;
        console.log(' this.carts: ',  this.carts);
      })
    });
  }

}
