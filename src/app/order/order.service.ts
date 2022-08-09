import { Injectable } from "@angular/core";
import { ShoppingCartItem } from "app/restaurant-detail/shopping-cart/shopping-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) {}

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
}