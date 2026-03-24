function wrapInArray<T>(input: T): T[]{
    return [input];
}

console.log(wrapInArray<string>("Hello"));
console.log(wrapInArray(42));