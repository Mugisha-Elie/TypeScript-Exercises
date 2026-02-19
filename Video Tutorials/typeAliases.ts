let message:string = "John"
// message = 12;

type User = {name:string, age:number, gender?:string, readonly nationality?:string}

const obj:User = {
    name: "John",
    age: 25
}

// const user: User = {}

console.log(obj)
console.log(obj.age);


type ObjectType = {
    readonly apiKey:string,
    readonly baseURL:string,
    timeout?: number,
}

const config:ObjectType = {
    apiKey: "1yh60o984gui8379hnlkjo09809-23hiohkljo",
    baseURL: "www.base.url.com",
    timeout: 3000
}

// config.apiKey = null;