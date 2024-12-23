"use strict";
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
    }
    getCustomerName() {
    }
    getCustomerDiscount() {
    }
    getAmountAfterDiscount() {
    }
    toString() {
    }
}
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getId() {
    }
    getName() {
    }
    getDiscount() {
    }
    setDiscount() {
    }
    toString() {
    }
}
module.exports = { Invoice, Customer };
