import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { ShoppingCartItem } from "app/restaurant-detail/shopping-cart/shopping-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient
    ) {}

    cartItems(): ShoppingCartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: ShoppingCartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: ShoppingCartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: ShoppingCartItem) {
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order);
    }

    clear() {
        this.cartService.clear();
    }
}