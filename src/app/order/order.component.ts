import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Débito", value: "DEB"},
    {label: "Cartão Refeição", value: "REF"}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): ShoppingCartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: ShoppingCartItem) {
    return this.orderService.increaseQty(item);
  }

  decreaseQty(item: ShoppingCartItem) {
    return this.orderService.decreaseQty(item);
  }

  remove(item: ShoppingCartItem) {
    this.orderService.remove(item);
  }

}
