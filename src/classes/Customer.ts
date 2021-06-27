import { TypeCustomer } from "./interfaces/CustomerProtocol";

abstract class AbstractCustomer implements TypeCustomer{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    abstract getInfo():string
}
export  class CustomerPhysical extends AbstractCustomer{
    cpf:string
    constructor(name:string,age:number,cpf:string){
        super(name,age)
        this.cpf=cpf
    }
    getInfo():string{
        return `
            Customer Physical: \n
            Name: ${this.name},\n
            Age: ${this.age}, \n
            Cpf: ${this.cpf}
        `
    }
}
export  class CustomerLegal extends AbstractCustomer{
    cnpj:string
    constructor(name:string,age:number,cnj:string){
        super(name,age)
        this.cnpj=cnj
    }
    getInfo():string{
        return `Customer Legal: \n
            Name: ${this.name},\n
            Age: ${this.age}, \n
            Cnpj: ${this.cnpj}
        `
    }
}
