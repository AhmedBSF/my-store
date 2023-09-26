import { Component } from '@angular/core';
import productData from '../../../assets/data.json';
export interface Product {
  id: Number;
  name: String;
  price: Number;
  url: String;
  description: String;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = productData;
}
