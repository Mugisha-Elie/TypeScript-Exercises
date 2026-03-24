// class Person{
//     name:string;
//     private readonly age:number;
//     readonly gender:string
//     private static nationality:string;

//     constructor(name:string, age:number, gender:string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     public static setNationality(input:string):void{
//         Person.nationality = input;
//     }

//     private static getNationality():string{
//         return Person.nationality;
//     }

//     public printNationality():void{
//         console.log(Person.getNationality());
//     }

// }

// const person = new Person("Denis", 25, "male");
// console.log(person);
// Person.setNationality("Rwandan");
// person.printNationality();

// interface People extends Person{}



// class User implements People{
//     name:string;
//     private readonly age:number;
//     readonly gender:string;
//     private static nationality:string;


//     constructor(name:string, age:number, gender:string){
//         this.age = age;
//         this.name = name;
//         this.gender = gender;
//     }

//     public static setNationality(input:string):void{
//         User.nationality = input;
//     }

//     private static getNationality():string{
//         return User.nationality;
//     }

//     public printNationality(): void {
//         console.log(User.getNationality());
//     }
// }

// const user = new User("Tems", 25, "female");


