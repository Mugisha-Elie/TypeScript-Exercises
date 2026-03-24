// function objs<T extends object>(obj1:T, obj2:T){
//     return {
//         ...obj1, 
//         ...obj2
//     }
// }

// console.log(objs([1, 2, 3], {age: 2}))
// console.log(objs({age: 2}, 2))



function logLength<T extends {length:number}>(item:T){
    console.log(item.length);
    return item;
}

console.log(logLength("Hello"));
console.log(logLength([1, 2, 3]));
// console.log(logLength(55));