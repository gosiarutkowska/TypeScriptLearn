import {Pizzeria} from "./pizzeria";
import {PizzaModel} from "./pizzaModel";

interface cancaleAbelPizza {
    cancelable: boolean;
}

// decorators are void only one, before constructor
function PizzaCreated(target: Function) {
    console.log('Polish pizza has been created');
}

function ClosedAtNight<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        openAtNight = false;
    }
}

function Enumerable(value: boolean) {
    return function (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        propertyDescriptor.enumerable = value;
    }
}

@ClosedAtNight
@PizzaCreated
export class PolishPizzeria extends Pizzeria {
    constructor(name: string, openAtNight: boolean) {
        super(name);
    }
    @Enumerable(false)
    bake(): string {
        return 'pizza is baking';
    }

    order(pizza: PizzaModel & cancaleAbelPizza) {
        this.pizzaInOrder.push(pizza);
    }
}
