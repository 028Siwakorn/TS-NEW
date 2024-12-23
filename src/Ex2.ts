class Invoice{
    private id: number;
    private customer: string;
    private amount: number;

    constructor(id: number, customer: string, amount: number){
    this.id = id
    this.customer = customer
    this.amount = amount
    }
    public getId(){
    return this.id
    }
    public getCustomer():string{
    return this.customer
    }
    public setCustomer(customer: string){
    this.customer = customer
    }
    public getAmount(){
    return this.amount
    }
    public setAmount(amount: number){
    this.amount = amount
    }
    public getCustomerId(){
    
    }
    public getCustomerName(){

    }
    public getCustomerDiscount(){

    }
    public getAmountAfterDiscount(){

    }
    public toString(){

    }
}

class Customer{
    private id: number;
    private name: string;
    private discount: number;
    
    constructor(id: number, name: string, discount: number){
        this.id = id
        this.name = name
        this.discount = discount
    }
    public getId(){

    }
    public getName(){

    }
    public getDiscount(){

    }
    public setDiscount(){
        
    }
    public toString(){

    }
}

export = {Invoice, Customer};