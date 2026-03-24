class Customer{
    constructor(public isCustomer: boolean){}
}

class Supplier{
    constructor(public isSupplier:boolean){}
}
type BusinessPartner = Customer | Supplier;

const customer:BusinessPartner = new Customer(true);
const supplier:BusinessPartner = new Supplier(true);

function isCustomer(partner:any): partner is Customer{
    return partner instanceof Customer;
}


function signContract(bssPartner: BusinessPartner): string{
    let message:string;
    
    return isCustomer(bssPartner) ? "You are a customer" : "You are not a customer";
}

console.log(signContract(customer));





