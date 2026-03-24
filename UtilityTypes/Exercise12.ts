function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U{
    return {
        ...obj1,
        ...obj2
    }
}

console.log(merge({name: "Franz Hermann"}, {age: 42}));

// console.log(merge(1, 2));  I need to extend the T and U to object so these won't work







