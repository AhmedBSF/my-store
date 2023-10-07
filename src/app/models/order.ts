import { Product } from './product';

export interface Order {
  product: Product;
  amount: number;
}
