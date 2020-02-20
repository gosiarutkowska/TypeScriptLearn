import {Orderable} from "./orderable";
import {PaymentMethods, PizzaModel, Size, Status} from "./pizzaModel";
import {SizeKey} from "./pizzaModel";

// type SizeAsOneOfStrings = 'small' | 'medium' | 'large'; //not full elastic

export abstract class Pizzeria implements Orderable{
    readonly name: string;
    static id = 0;
    id: number;
    pizzaInOrder: PizzaModel[] = [];
    private _maxPizzasInOwen: number = 10;
    protected recipes: string[] = [];
    private _manager = 'Jan Kowalski';

    constructor(name: string) {
        this.name = name;
        this.id = Pizzeria.id++;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    order(pizza: PizzaModel) {
        this.pizzaInOrder.push(pizza);
    }
    changeStatus(index: number, status: Status) {
        this.pizzaInOrder[index].status = status;
    }

    changeSize(index: number, size: SizeKey) {
        this.pizzaInOrder[index].size = size;
    }
    checkPrice({price}: PizzaModel){
        if (typeof price === 'string'){
            console.log('price is string', price.toUpperCase());
        } else if (typeof {price} === 'number'){
            console.log(price.toFixed());
        }
    }

    getPaymentMethod(payment: PaymentMethods) {
        switch (payment.type) {
            case 'cash': return `Paid in cash in ${payment.currency}`;
            case 'creditCard': return `Paid in cash in ${payment.code}`;
            case 'onlinePayment': return `Paid in cash in ${payment.bankAccount}`;
        }
    }

    isOvenFull() {
        return this.pizzaInOrder.length > this._maxPizzasInOwen;
    }

    abstract bake(): void;
}

