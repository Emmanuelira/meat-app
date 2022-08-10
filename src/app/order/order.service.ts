import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { ShoppingCartItem } from "app/restaurant-detail/shopping-cart/shopping-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: Http
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

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order), 
            new RequestOptions({headers: headers})).map(response => response.json());
    }

    clear() {
        this.cartService.clear();
    }
}