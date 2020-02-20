import { Pizzeria } from "./pizzeria";

export class AmericanPizzeria extends Pizzeria {
    bake() {
        console.log('pizza is baking, please wait');
    }
}
