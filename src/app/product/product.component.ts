import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product: Product[] = [];
  constructor(private _httpClient: HttpClient) {}
  ngOnInit() {
    this._httpClient.get<Product[]>('http://localhost:3000/product').subscribe(
      (result) => {
        this.product = result;
        console.log(this.product);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
