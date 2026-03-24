type Tuple = [firstname:string, lastname:string];


function greet(arr: Tuple) {
    const [firstName, lastName] = arr;
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet(["Jane", "Doe"]));
