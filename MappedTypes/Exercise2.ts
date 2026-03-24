type Maybe<T> = Partial<T>;

type Obj = {
    firstname: string,
    lastname: string
}


const newObj: Maybe<Obj> = {
    firstname: "Johnathan",
}

