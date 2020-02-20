"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        this.data.shift();
    };
    Queue.prototype.getAll = function () {
        return this.data;
    };
    return Queue;
}());
// const people = new Queue<string>();
// people.push('Ola');
//
// const products = new Queue<number>();
// products.push(123);
var productItem = new Queue();
productItem.push({ id: 123, name: 'kongo' });
