interface Reverse{
    (value: string): string
}

let reverse: Reverse = (value) => {

    const newValue: string[] = value.split(" ");
    const result: (string|undefined)[] = [];

    for(let i = (newValue.length - 1); i >= 0; i--){
        result.push(newValue[i]);
    }

    return result.join(" ");
}

console.log(reverse("The greatest victory is that which requires no battle"));


// const arr: Object = [1, 2, 3, 4];
// console.log(arr.length);