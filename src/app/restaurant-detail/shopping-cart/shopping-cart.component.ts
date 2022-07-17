import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { ShoppingCartItem } from './shopping-cart.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): ShoppingCartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  addItem(item: MenuItem): void {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: ShoppingCartItem): void {
    this.shoppingCartService.removeItem(item);
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

}
