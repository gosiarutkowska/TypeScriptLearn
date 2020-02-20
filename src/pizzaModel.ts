export interface PizzaModel {
    name: string;
    price: number | string;
    size: string;
    status: Status;
}

export enum Status {
    Ordered,
    Baked,
    Sold
}

export enum Size {
    small = 'small',
    medium = 'medium',
    large = 'large'
}

export type SizeKey = keyof typeof Size; //creates keys from enum

export interface Cash {
    type: 'cash',
    currency: string,
}

export interface CreditCard {
    type: 'creditCard',
    code: string,
}

export interface OnlinePayment {
    type: 'onlinePayment',
    bankAccount: number
}

export type PaymentMethods = Cash | CreditCard | OnlinePayment;
