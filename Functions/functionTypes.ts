type obj = {
    name: string
}

const objecto: obj = {
    name: "Junior"
}
console.log(objecto)

// objecto.name = 2;

const obj1 = {
    name: "James",
    age: 2
}





// function add(num1: number, num2: number): number{
//     return num1 + num2;
// }


let add: (num1: number, num2: number) => number;
// console.log(add);

add = (x: number, y: number) => x + y;

console.log(add);
console.log(add(1, 2))

// add = (x: string, y: string) => x + y


let add2: (num1: number, num2: number) => number = (x, y) => x + y
console.log(add2(1, 5))



