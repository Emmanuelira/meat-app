import { MenuItem } from "../menu-item/menu-item.model";
import { ShoppingCartItem } from "./shopping-cart.model";

export class ShoppingCartService {
    items: ShoppingCartItem[] = [];

    clear(): void {
        this.items = [];
    }

    additem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if(foundItem) {
            foundItem.quantity++;
        } else {
            this.items.push(new ShoppingCartItem(item));
        }
    }

    removeItem(item: ShoppingCartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }
} 
