const {Author, Book} = require("./Ex1");


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

const {Invoice, Customer} = require("./Ex2");
