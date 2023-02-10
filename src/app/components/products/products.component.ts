import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prductsURL: string = 'https://dummyjson.com/products';
  products: Product[] = [];

  constructor(

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

}
