import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import productData from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = productData;

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
