import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input()
  product: Product | undefined;
  quantity: number = 1;
}
