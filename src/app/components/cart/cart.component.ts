import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Order[] = [];
  cartEmptyMessage: string = 'Your cart is currently empty!';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
  }
}
