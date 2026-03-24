type Locked<T> = {
    readonly [key in keyof T]: T[key];
};

type Obj = {
    firstname: string,
    lastname: string
}

const newObj: Locked<Obj> = {
    firstname: "James",
    lastname: "Doe"
}

// console.log(newObj.firstname = "John");

