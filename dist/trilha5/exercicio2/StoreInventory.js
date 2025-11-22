import { Inventory } from "./Inventory.js";
export class StoreInventory extends Inventory {
    constructor() {
        super(...arguments);
        this.MAX_PER_ITEM = 10;
    }
    addItem(item, quantity) {
        if (!item || quantity <= 0)
            return;
        const currentQuantity = this.items[item] ?? 0;
        const newTotal = currentQuantity + quantity;
        this.items[item] = Math.min(newTotal, this.MAX_PER_ITEM);
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return { ...this.items };
    }
}
//# sourceMappingURL=StoreInventory.js.map