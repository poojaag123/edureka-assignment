import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id: any;
  product: Product = new Product();
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._httpClient
      .get<Product>(`http://localhost:3000/product/${this.id}`)
      .subscribe(
        (result) => {
          this.product = result;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
