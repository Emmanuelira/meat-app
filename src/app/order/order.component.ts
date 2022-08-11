import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Débito", value: "DEB"},
    {label: "Cartão Refeição", value: "REF"}
  ];

  orderForm: FormGroup;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      nome: this.fb.control(''),
      email: this.fb.control(''),
      emailConfirmation: this.fb.control(''),
      endereco: this.fb.control(''),
      numero: this.fb.control(''),
      complemento: this.fb.control(''),
      paymentOption: this.fb.control('')
    })
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: ShoppingCartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe(() => {
      this.orderService.clear();
      this.router.navigate(['order-sumary'])
    })
  }

}
