interface User{
    id: number;
    name: string;
    age: number;
    gender: string;
    nationality: string;
}

type Update = {
    [key in keyof User]: User[key];
}