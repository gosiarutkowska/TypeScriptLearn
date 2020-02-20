"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type SizeAsOneOfStrings = 'small' | 'medium' | 'large'; //not full elastic
var Pizzeria = /** @class */ (function () {
    function Pizzeria(name) {
        this.pizzaInOrder = [];
        this._maxPizzasInOwen = 10;
        this.recipes = [];
        this._manager = 'Jan Kowalski';
        this.name = name;
        this.id = Pizzeria.id++;
    }
    Object.defineProperty(Pizzeria.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: true,
        configurable: true
    });
    Pizzeria.prototype.order = function (pizza) {
        this.pizzaInOrder.push(pizza);
    };
    Pizzeria.prototype.changeStatus = function (index, status) {
        this.pizzaInOrder[index].status = status;
    };
    Pizzeria.prototype.changeSize = function (index, size) {
        this.pizzaInOrder[index].size = size;
    };
    Pizzeria.prototype.checkPrice = function (_a) {
        var price = _a.price;
        if (typeof price === 'string') {
            console.log('price is string', price.toUpperCase());
        }
        else if (typeof { price: price } === 'number') {
            console.log(price.toFixed());
        }
    };
    Pizzeria.prototype.getPaymentMethod = function (payment) {
        switch (payment.type) {
            case 'cash': return "Paid in cash in " + payment.currency;
            case 'creditCard': return "Paid in cash in " + payment.code;
            case 'onlinePayment': return "Paid in cash in " + payment.bankAccount;
        }
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this.pizzaInOrder.length > this._maxPizzasInOwen;
    };
    Pizzeria.id = 0;
    return Pizzeria;
}());
exports.Pizzeria = Pizzeria;
