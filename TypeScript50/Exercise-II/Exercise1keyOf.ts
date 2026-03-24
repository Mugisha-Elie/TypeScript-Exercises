// function getProperty<T, K extends keyof T>(obj: T, key:K): T[K]{
//     return obj[key];
// }



function getProperty<T extends object, K extends keyof T>(obj: T extends any[] ? never : T, key: K): T[K]{
    return obj[key];
}

// const arrKey = getProperty(["BMW", "Corvette", "Gazoo Racing", "verstappen.com racing"], 0);
// console.log(arrKey); // Error

const objKey = getProperty({name: "James"}, "name");
console.log(objKey);

