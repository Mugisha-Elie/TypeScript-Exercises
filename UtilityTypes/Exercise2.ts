function getFirst<T>(arr: T[]): T{
    return arr[0] as T;
}

const numItem1 = getFirst([1, 2, 3, 4]);
console.log(numItem1);

const strItem1 = getFirst(["age", "gender", "nationality"]);
console.log(strItem1);