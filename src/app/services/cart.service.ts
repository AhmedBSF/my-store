import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order[] = [];

  constructor() {}

  getCart() {
    return this.order;
  }

  addToCart(order: Order) {
    this.order.push(order);
    return this.order;
  }

  clearCart() {
    this.order = [];
    return this.order;
  }
}
