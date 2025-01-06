const {Author, Book} = require("./Ex1");
const {Customer, Invoice} = require("./Ex2");
const {Person, Student, Staff} = require("./Ex3");
const {Shape, Circle, Rectangle, Square} = require("./Ex4");
const {DiscountRate, Customers, Visit} = require("./Ex5");

console.log("############## EX1 ####################")
const author1 = new Author("Siwakorn Kleebmek", "664259028@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Udsanee Pakdeetrakulwong", "udsanee@webmail.npru.ac.th");
console.log(author2.toString());
console.log("#####################################")
console.log("############## EX1(Book) ####################")
const book1 = new Book("Basic Programming",[author1,author2],
    180,300)
    console.log(book1.toString());
    console.log(book1.getAuthorNames());
console.log("#####################################")


console.log("############## EX2 ####################")

const customer1 = new Customer(1,"Fluk",0.2)
const invoice1 = new Invoice(1,customer1,10000);

console.log(invoice1.getAmountAfterDiscount())

console.log(invoice1.toString())

console.log("#####################################")

console.log('############## Ex3 ##############')

const person1 = new Person('Boom', 'Columbia')
const person2 = new Person('Nine', 'Agentina')

const student1 = new Student('John', 'Japan', 'EN', 2001, 14000)

const staff1 = new Staff('Doe', 'Ireland', 'Harvard', 40000)


console.log(staff1.toString())

console.log('#################################')

console.log('############## Ex4 ##############')
const shape = new Shape("Red", true)
console.log(shape.toString()) 

const circle = new Circle("Blue", false, 5)
console.log(circle.toString()) 
console.log(`Area of Circle: ${circle.getArea()}`) 
console.log(`Perimeter of Circle: ${circle.getPerimeter()}`) 

const rectangle = new Rectangle("Green", true, 4, 6)
console.log(rectangle.toString()) 
console.log(`Area of Rectangle: ${rectangle.getArea()}`) 
const square = new Square(4, "Yellow", true)
console.log(square.toString()) 
console.log(`Area of Square: ${square.getArea()}`) 
console.log(`Perimeter of Square: ${square.getPerimeter()}`) 
console.log('#################################')

console.log('############## Ex5 ##############')

const cus1 = new Customers('Ice', false, 'Gold')
const visit1 = new Visit(cus1, 12252024, 100, 500)

console.log(cus1.toString())
console.log(visit1.toString())

console.log('#################################')