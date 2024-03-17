import Buyable from "./Buyable"

export default class Cart {

    private _items: Buyable[] = []

    add(item: Buyable): void {
        this._items.push(item)
    }

    getAll(): Buyable[] {
        return [...this._items]
    }

    calculateTotalCost(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    calculateDiscountPrice(discount: number): number {
        return this.calculateTotalCost() - (this.calculateTotalCost() * discount / 100);
    }

    delete(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        this._items.splice(index, 1);
    }
}
