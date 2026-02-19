// Standard typing 
function addition(num1:number, num2: number): number {
    return num1 + num2;
}






// Inline shape
function processItems(message: string, callback: (num: number) => string){
    const length = message.length;
    return callback(length);
}

// console.log(processItems("This is lit", (num:number) => {
//     return `The length of the entered message: ${num}`
// } ))






// contextual typing
const numbers = [10, 20, 30];
// numbers.forEach(num => console.log(num));








// interface

// interface MathOps{
//     (num1: number, num2: number): number
// }

type MathOps = (num1: number, num2: number) => number;


let adding: MathOps = (a, b) => a + b;

let subtracting: MathOps = (a, b) => a - b;

let dividing: MathOps = (a, b) => b === 0 ? Infinity : a / b;

let multiplication: MathOps = (a, b) => a * b;

let modulo: MathOps = (a, b) => a % b;

// console.log(adding(1, 2));
// console.log(subtracting(2, 5));
// console.log(dividing(0, 0));
// console.log(multiplication(4, 2.5));
// console.log(modulo(3, 2))






// Optional Parameters

function add(num1: number, num2: number, isAdd?:boolean):number | string{
    return isAdd ? num1 + num2 : `${num1}${num2}`
}
// console.log(add(1, 2));






// default parameters
function defaults(a:number, b:number, c:number = 0, d:number = 0, e:number = 0):number{
    return a + b + c + d + e;
}

// console.log(defaults(1, 2))
// console.log(defaults(1, 2, 3))
// console.log(defaults(1, 2, 3, 4, 5))



// let definition: (num: number = 0, num2:number) => number;



function getDays(year:number = new Date().getFullYear(), month: number){
    let days = 0;

    switch(month){
        case 1: 
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 10:
            days = 30;
            break;
        case 2:
            if(((year % 4 === 0) && !(year % 100 === 0)) || (year % 400 === 0)){
                days = 29;
                break;
            }else{
                days = 28;
                break;
            }

        default:
            console.log("Invalid Months");
            break;
    }

    return days
}


// console.log(getDays(undefined, 2));





// ...rest parameters
function getTotal(a:number, ...rest:number[]): number{
    return a + rest.reduce((a, b) => a + b );
}

// console.log(getTotal(1, 2, 4, 5))




function addd(...args: (number | string) []): [number, string]{
    let total: number = 0;
    let sentence: string = ""

    args.forEach(arg => {
        if(typeof arg === "string"){
            sentence += `${arg} `;
        }else{
            total += arg
        }
    })

   return [total, sentence];
}

// console.log(addd());
// console.log(addd(1, 2, 3))
// console.log(addd("Hold", "Yourself", "Together"));
// console.log(addd(1, "Hold", 5, "Yuorself", 5, "Together"));










// Function overloading

// interface MultiFunction{
//     (arg1: number, arg2:number): number;
//     (arg1:string, arg2:string): string;
// }

// let product: MultiFunction = (a, b) => {
//     if(typeof a === "number" && typeof b === "number"){
//         return a + b
//     }else{
//         return a;
//     }
// };

// console.log(product(1, 2))



function doStuff<T>(arr: T[]): T[]{
    return arr;
}

const arr: number[] = [1, 2, 3, 4];
const strArr: string[] = ["John", "Jane"]

// doStuff(arr);
// console.log(doStuff(strArr))






function sum(arg1:number, arg2:number): number;
function sum(arg1:string, arg2:string): string;

function sum(arg1:number, arg2:number){
    return arg1 + arg2;
}

console.log(sum(1, 2));














