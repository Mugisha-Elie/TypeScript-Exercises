// // void

// function logData(data: string): void{
//     console.log(data)
//     // return data;
//     return;
// }

// logData("Genius");



// any
// let age:any = 5;
// console.log(age);

// age = "five";
// console.log(age);


// unknown

let quantity: unknown;
let price: unknown;

quantity = "5";
price = "200";

// const total:number = quantity * price
let total:unknown;

if(typeof quantity === "number" && typeof price === "number"){
    total = quantity * price;
}else if(typeof quantity === "string" && typeof price === "string"){
    total = `The quantity is ${quantity}, The price for each item is ${price}`
}

console.log(total)
