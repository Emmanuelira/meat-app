import { MenuItem } from "../menu-item/menu-item.model";
import { ShoppingCartItem } from "./shopping-cart.model";

export class ShoppingCartService {
    items: ShoppingCartItem[] = [];

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
    }

    removeItem(item: ShoppingCartItem) {
        this.items.splice(this.items.indexOf(item), 1);
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
