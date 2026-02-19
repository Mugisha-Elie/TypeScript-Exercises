// Phase1

// Question 1
let isDeveloping: boolean;
let userAge: number;

// isDeveloping = "Yes";
// Error: Type 'string' is not assignable to type 'boolean'


// Question 2
let city = "Kigali City";
let country: string = "Rwanda";


// Question 3
let greeting = `Hey there from ${city} ${country}`
console.log(typeof greeting); // string






// Phase 2
// Question 1
function subtract(num1: number, num2: number): number{
    return num1 - num2;
}

console.log(subtract(2, 1));





// Question 2
function logMessage(input: string): void{
    console.log(input);
}

const message = logMessage("I am Groot!");
console.log(message);

// undefined and no error squiggly lines something is wrong here I shoulh have been given an error here





// Question 3 and 4
function greetUser(name: string = "Guest", title?:string): string{
    return title ? `Hello ${title} ${name}` : `Hello ${name}`
}

console.log(greetUser("Constance", "Janitor"));
console.log(greetUser());






// Phase 3

// Question 1 and 2 and 3 and 4

type Order = {
    date: number,
    product: Product,
}

type Product = {
    readonly id: number,
    name: string,
    price: number,
    description?: string,
    order?: Order
}

const product: Product = {
    id: 12,
    name: "Helmet",
    price: 1000,
    description: "2023 Season Max Verstappen signed legacy helmet",
    // order: {date: Date.now(), product: {id: 10, name: "HANS device", price: 1200,}}
}

console.log(product.id)
// console.log(product.id = 4)


// Phase 4 
// Question 1

const prices: number[] = [];

// Question 2
const inventory: Product[] = [];
inventory.push(product);

// Question 3
const history: (string | number)[] = [];


// Question 4
const matrix: number[][] = [];



// Phase 5
// Question 1
type MetaData = {
    [key: string]: string
}


// Question 2
type SystemConfig = {
    version: number,
    [key: number]: string | boolean
}


// Question 3
const coordinates: [number, number] = [12, 2];




// Phase 6
// Question 1
type Employee = {
    name: string,
    role: string
}

const employeeObj: Employee = {
    name: "EmployeeName",
    role: "EmployeeRole"
}

const employees: Employee[] = [];
employees.push(employeeObj);

type Company = {
    name: string,
    employees: Employee[];
    website?: string
}

const company: Company = {
    name: "Ludo",
    employees
}

console.log(company);



// Question 2
function printStatus(input: string | number[]): void{
    if(Array.isArray(input)){
        console.log(`Length: ${input.length}`)
    }else{
        console.log(`String: ${input}`);
    }
}

printStatus([1,2,3,4])
printStatus("We can be on a 3 hour time difference")