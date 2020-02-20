import {PolishPizzeria} from './polish-pizzeria';
import {AmericanPizzeria} from './american-pizzeria';
import {Size, Status} from "./pizzaModel";

const laStrada = new PolishPizzeria('LaStrada', true);
const americaHouse = new AmericanPizzeria('AmericaHouse');
const venezia = new PolishPizzeria('Venezia', true);

const isOvenVeneziaFull = venezia.isOvenFull();

const capriciosa = {
    name: 'Capriciosa',
    price: 12.90,
    size: 'large',
    status: Status.Ordered,
    cancelable: true,
};

venezia.order(capriciosa);
venezia.changeStatus(0, Status.Baked);
venezia.changeSize(0, 'small');

console.log(venezia);
