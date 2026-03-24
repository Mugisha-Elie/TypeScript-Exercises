function reverseThis(arg: string | any[]){
  if(typeof arg === "string"){
    return arg.split("").reverse().join("");
  }  else{
    return arg.slice().reverse();
  }
}


// const reversedString: string = reverseThis("James");
// const reversedArr: any[] = reverseThis([1, 2, 3, 4, 5]);

// console.log(reversedString)
// console.log(reversedArr)
// console.log(typeof reversedString)







function reversing(input:string): string;
function reversing(input:any[]): any[];
function reversing(input: number): number;


function reversing(input:string | any[] | number): string | any[] | number{
  if(typeof input === "string"){
    return input.split("").reverse().join("");
  }else if(typeof input === "number"){
    return parseInt(input.toString().split("").reverse().join(""), 10);
  }else{
    return input.slice().reverse();
  }
}

// console.log(reversing(345));

const number = reversing(345);
// console.log(typeof number);








// Function overloading with optional parameters

function returnDouble(a:number): number;
function returnDouble(a:string, b:string): string;

function returnDouble(a:number | string, b?:string): number | string{
  let result:string | number;

  if(!b && typeof a === "number"){
    result = a * 2;
  }else if(b && typeof a === "string" || b && typeof a === "number"){
    result = a + b;
  }else{
    result = 0;
  }

  return result;
  
}

// console.log(returnDouble(2))
// console.log(returnDouble("b", "a"))









class Person{
  constructor(public name:string){}

  getName(): string;
  getName(greeting:boolean):string;

  public getName(greet?:boolean){
    if(greet) return `Guten Morgen ${this.name}`;
    return this.name;
  }

}

const person = new Person("Franz Herman")
console.log(person.getName());
console.log(person.getName(true))


