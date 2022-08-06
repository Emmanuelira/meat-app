import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: ShoppingCartItem[];
  @Output() increaseQty = new EventEmitter<ShoppingCartItem>();
  @Output() decreaseQty = new EventEmitter<ShoppingCartItem>();
  @Output() remove = new EventEmitter<ShoppingCartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: ShoppingCartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: ShoppingCartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: ShoppingCartItem) {
    this.remove.emit(item);
  }

}
