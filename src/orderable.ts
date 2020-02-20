import {PizzaModel} from "./pizzaModel";

export interface Orderable {
    pizzaInOrder: PizzaModel[],
    order(pizza: PizzaModel): void;
}
