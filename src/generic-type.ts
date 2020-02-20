interface Item {
    name: string;
}

interface ProductItem {
    id: number;
    name: string;
}

interface ProductQueue<T> {
    push(item: T): void;
    getAll(): T[];
}

class Queue<T extends Item> implements ProductQueue<T>{
    private data: T[] = [];
    push(item: T){
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll() {
        return this.data;
    }
}

// const people = new Queue<string>();
// people.push('Ola');
//
// const products = new Queue<number>();
// products.push(123);

const productItem = new Queue<ProductItem>();
productItem.push({id:123, name:'kongo'});
