function logEntity<T extends {id:string | number}> (obj: T): T{
    return obj;
}

const obj1 = {name: "Titan", id: "1011"}
const obj2 = {id: 101}
const obj3 = {name: "Titan", age: 3}

console.log(logEntity(obj1));
console.log(logEntity(obj2));
// console.log(logEntity(obj3));  // Error has no id property
