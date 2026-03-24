interface BusinessPartner{
    name:string,
    credit:number
}

interface identity{
    id: string,
    name:string
}

interface Contact{
    email:string,
    phone: string
}

type Employee = identity & Contact;
type Partner = BusinessPartner & Contact;

const emp:Employee = {id: "100", name:"Employes Jones", email:"EmployeeJones@gmail.com", phone:"+25070909093"};
const partner:Partner = {name: "Sun Industries", credit: 250, email: "Sun@gmail.com", phone: "+250791139628"};
const both: Employee & Partner = {
    id: "102",
    name: "Both",
    email: "Both102@gmail.com",
    credit: 123,
    phone: "+25077880978"
}

console.log(emp);