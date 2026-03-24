// This only works for number

// function returnType(arg:number):number{
//     return arg;
// }

// This is just stupid
// function returnType(arg:any):any{
//     return arg;
// }

// This works
function returnType<T>(arg:T):T{
    return arg;
}

console.log(returnType<string>("james"));
console.log(returnType<number>(12));
console.log(returnType<number[]>([1, 2, 3, 5]))
console.log(returnType<{[key:string]: number}>({a:1,b:3,c:4}))






interface List<T>{
    contents: T
}

const arrayList: List<number[]> = {
    contents: [1, 2, 3, 4]
}

function merge<U extends object, V extends object>(obj1:U, obj2:V){
    return {
        ...obj1,
        ...obj2
    }
}

const result = merge([1, 2, 3, "James"], {names: "Jones"});
console.log(result);
console.log(typeof result);


function props<U, K extends keyof U>(obj:U, Key:K){
    return obj[Key];
}

let str = props({name: "John", age:2}, "age")
console.log(str);



