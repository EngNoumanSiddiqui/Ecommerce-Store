import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prductsURL: string = 'https://dummyjson.com/products';
  products: IProduct[] = [];

  constructor(
    public router: Router,
  ){}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    fetch(this.prductsURL)
    .then(res => res.json())
    .then((response)=>{
      this.products = response.products;
      console.log('this.products: ', this.products);
    });
  }

  onUsers(){
    this.router.navigate(['/users']);
  }

  onCarts(){
    this.router.navigate(['/carts']);
  }

}
