"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polish_pizzeria_1 = require("./polish-pizzeria");
var american_pizzeria_1 = require("./american-pizzeria");
var pizzaModel_1 = require("./pizzaModel");
var laStrada = new polish_pizzeria_1.PolishPizzeria('LaStrada', true);
var americaHouse = new american_pizzeria_1.AmericanPizzeria('AmericaHouse');
var venezia = new polish_pizzeria_1.PolishPizzeria('Venezia', true);
var isOvenVeneziaFull = venezia.isOvenFull();
var capriciosa = {
    name: 'Capriciosa',
    price: 12.90,
    size: 'large',
    status: pizzaModel_1.Status.Ordered,
    cancelable: true,
};
venezia.order(capriciosa);
venezia.changeStatus(0, pizzaModel_1.Status.Baked);
venezia.changeSize(0, 'small');
console.log(venezia);
