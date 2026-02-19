interface MathOperation{
    (a: number, b:number): number
}

let add:MathOperation = (x, y) => x + y;
let multiplication: MathOperation = (x, y) => x * y;

console.log(add(1,21));
console.log(multiplication(21, 21));


interface GroceryList{
    [key:string]: number
}

const cart:GroceryList = {
    age: 21
}

console.log(cart.age);

