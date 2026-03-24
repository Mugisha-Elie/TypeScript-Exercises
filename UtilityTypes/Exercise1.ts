// function returnValue(input:any){
//     return input;
// }





// function returnValue(input:number){
//     return input;
// }

// function returnValue(input: string){
//     return input
// }






function echo<T>(input: T):T{
    return input;
}

let country = echo<string>("Hello");
console.log(country.toUpperCase(), typeof country);

let num = echo(99);
console.log(typeof num);

let squredNumber = Math.pow(echo(12), 2);
console.log(squredNumber, typeof squredNumber);