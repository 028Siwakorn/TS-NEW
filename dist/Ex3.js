"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    toString() {
        return `Person[name=${this.name}, address=${this.address}]`;
    }
}
class Student extends Person {
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    getProgram() {
        return this.program;
    }
    setProgram(program) {
        this.program = program;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getFee() {
        return this.fee;
    }
    setFree(fee) {
        this.fee = fee;
    }
    toString() {
        return `Student [Person[name=${this.getName()}, address=${this.getAddress()}, program=${this.program}, year=${this.year}, fee=${this.fee}]]`;
    }
}
class Staff extends Person {
    constructor(name, address, school, pay) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }
    getPay() {
        return this.pay;
    }
    setPay(pay) {
        this.pay = pay;
    }
    toString() {
        return `Staff [Person [name=${this.getName()}, address=${this.getAddress()}, school=${this.school}, pay=${this.pay}]]`;
    }
}
module.exports = { Person, Student, Staff };
