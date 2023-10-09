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

  getPrice() {
    let totalPrice = 0;
    for (const order of this.order) {
      const subtotal = order.product.price * order.amount;
      totalPrice += subtotal;
    }
    return Number(totalPrice.toFixed(2));
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
