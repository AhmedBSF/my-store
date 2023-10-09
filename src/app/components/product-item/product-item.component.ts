import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input()
  product!: Product;
  amount: number = 1;

  constructor(private cartService: CartService) {}

  public addToCart(product: Product, amount: number) {
    alert('Added to cart!');
    this.cartService.addToCart({
      product: product,
      amount: amount,
    });
  }
}
