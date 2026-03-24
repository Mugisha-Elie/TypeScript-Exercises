abstract class Employee{
    constructor(public name:string, protected salary:number){}

    getDetails():string{
        return `Employee name: ${this.name}`
    }

    abstract calculateMonthlyPay():number;
}

// const newEmp = new Employee()

class FullTime extends Employee{
    constructor(name:string, salary:number){
        super(name, salary);
    }

    calculateMonthlyPay(): number {
        return this.salary;
    }
}

class Contractor extends Employee{
    constructor(name:string, public hourlyRate:number, public hoursWorked:number){
        super(name, 0);
    }

    calculateMonthlyPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const FTE = new FullTime("Danyeli", 2000);
const Ctr = new Contractor("Vibracio", 100, 7);

console.log(FTE.calculateMonthlyPay());
console.log(Ctr.calculateMonthlyPay());