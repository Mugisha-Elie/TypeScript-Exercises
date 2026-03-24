abstract class Employee{
    firstname:string;
    lastname:string;

    constructor(fname:string, lname:string){
        this.firstname = fname;
        this.lastname = lname;
    }

    abstract getSalary(): number;

    getFullname():string{
        return `${this.firstname} ${this.lastname}`;
    }
}

// let employee = new Employee("James", "Dembele");






class FulltimeEmployee extends Employee{

    constructor(fname:string, lname:string, private salary:number){
        super(fname,lname);
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary
    }
}

const fte = new FulltimeEmployee("John", "Krasinski", 200_000);
// console.log(fte.getSalary());








class Contractor extends Employee{

    constructor(fname:string, lname:string, private rate:number, private hours:number){
        super(fname,lname);
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

const contractor = new Contractor("Lance", "Stroll", 12, 100);
// console.log(contractor.getSalary());