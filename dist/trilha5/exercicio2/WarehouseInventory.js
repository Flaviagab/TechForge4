import { Inventory } from "./Inventory.js";
export class WarehouseInventory extends Inventory {
    addItem(item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return this.items;
    }
}
//# sourceMappingURL=WarehouseInventory.js.map