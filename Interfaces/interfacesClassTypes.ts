// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Person{
//     name: string;

//     constructor(firstname: string){
//         this.name = firstname;
//     }
// }

interface Json{
    toJson():string;
    gender?: string;
}

// class Person implements Json{
//     constructor(firstname: string, lastname: string){}

//     toJson(): string {
//         return JSON.stringify(this)
//     }
// }


interface Json{
    getFirstName(): string;
}

interface FutureJson extends Json{
    getFutureGreeting(): string;
}


class Person implements Json{
    constructor(public firstname:string, public lastname:string) {}

    // gender: string = "male";

    toJson(): string {
        return JSON.stringify(this);
    }



    getFirstName(): string {
        return this.firstname
    }


}

let person = new Person("John", "Doe");
console.log(person);
console.log(person.toJson())
console.log(person.getFirstName())


class Future implements FutureJson{

    constructor(private firstname:string, private lastname:string){}

    getFutureGreeting(): string {
        return "Hey"
    }

    toJson(): string {
        return JSON.stringify(this)
    }

    getFirstName(): string {
        return this.firstname;
    }
}


let age: unknown;
age = 25;
age = "25";
age = true;
age = {}

if(typeof age === "number"){
    console.log(Math.pow(age, 2))
}