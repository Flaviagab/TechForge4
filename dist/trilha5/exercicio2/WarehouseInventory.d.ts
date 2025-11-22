import { Inventory } from "./Inventory.js";
export declare class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void;
    removeItem(item: string): void;
    getInventory(): Record<string, number>;
}
//# sourceMappingURL=WarehouseInventory.d.ts.map