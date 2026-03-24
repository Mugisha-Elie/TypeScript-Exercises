// const makeAdder = (x) => {
//   return (y) => x + y;
// };

// const add5 = makeAdder(5);
// const result = add5(10); // should be number

// console.log(typeof result);




type Add = (arg:number) => (num:number) => number;

const makeAdder:Add = (num1) => {
    return (num2) =>  num1 + num2;
}

const add5 = makeAdder(5);
const result = add5(10);

console.log(typeof result);
