import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";
import { MenuItem } from "../menu-item/menu-item.model";
import { ShoppingCartItem } from "./shopping-cart.model";

@Injectable()
export class ShoppingCartService {
    items: ShoppingCartItem[] = [];

    constructor(private notificationService: NotificationService) {}

    clear(): void {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if(foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new ShoppingCartItem(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    removeItem(item: ShoppingCartItem) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    increaseQty(item: ShoppingCartItem) {
        item.quantity += 1;
    }

    decreaseQty(item: ShoppingCartItem) {
        item.quantity -= 1;
        if(item.quantity === 0) {
            this.removeItem(item);
        }
    }
} 
