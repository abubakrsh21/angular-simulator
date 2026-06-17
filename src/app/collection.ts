export class Collection<T> {
    private items: T[] = [];

    constructor(initialData: T[] = []) {
        this.items = initialData;
    }

    getAll(): T[] {
        return this.items;
    }

    getItem(index: number): T | undefined {
        return this.items[index];
    }

    clearItems(): void {
        this.items = [];
    }

    removeItem(index: number): void {
        this.items = this.items.filter((_, i) => i !== index);
    }

    replaceItem(index: number, newItem: T): void {
        this.items = this.items.map((item, i) =>
            i === index ? newItem : item
        );
    }
}