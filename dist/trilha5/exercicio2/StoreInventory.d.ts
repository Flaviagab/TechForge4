import { Inventory } from "./Inventory.js";
export declare class StoreInventory extends Inventory {
    private readonly MAX_PER_ITEM;
    addItem(item: string, quantity: number): void;
    removeItem(item: string): void;
    getInventory(): Record<string, number>;
}
//# sourceMappingURL=StoreInventory.d.ts.map