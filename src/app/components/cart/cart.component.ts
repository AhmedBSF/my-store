import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  fullName: string = '';
  price: number = 0;
  cartInfo: any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
    this.price = this.cartService.getPrice();

    this.cartInfo = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      creditCard: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
    });
  }

  onSubmit() {
    if (this.cartInfo.valid && this.cartProducts.length > 0) {
      localStorage.setItem(
        'orderInfo',
        JSON.stringify({
          name: this.cartInfo.value.fullName,
          price: this.price,
        })
      );
      this.router.navigate(['confirmation']);
    } else {
      alert('Something went wrong!');
    }
  }
}
