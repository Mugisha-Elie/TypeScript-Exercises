// class Person{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     getFullName(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }





class Person{
    firstname:string;
    lastname: string;

    constructor(fname:string, lname:string){
        this.firstname = fname;
        this.lastname = lname;
    }

    getFullName():string{
        return `${this.firstname} ${this.lastname}`;
    }
}

const p1 = new Person("Franz", "Hermann");
// console.log(p1.getFullName());







// Access Modifiers "private"
class Animal{
    private name:string;
    public breed:string;
    protected gender:string;
    readonly date?:object;


    constructor(name:string, breed:string, gender:string, date?:Date){
        this.name = name;
        this.breed = breed;
        this.gender = gender;
        if(date) this.date = date;
    }

    getName(): string {
        return this.name;
    }

    changeName(newName:string): string{
        this.name = newName;
        return this.name;
    }

    getGender(): string {
        return this.gender
    }
}

let dog = new Animal("Rufus", "Chihuahua", "male", new Date());

// console.log(dog.name);
// console.log(dog.name = "Max");

// console.log(dog.getName());
// console.log(dog.changeName("Max"));

// console.log(dog.breed);

// console.log(dog.date);
// console.log(dog.date = new Date())














class AnimalLogistics extends Animal{
    weight: number;

    
    constructor(name:string, breed:string, gender:string, weight:number){
        super(name, breed, gender);
        this.weight = weight;
    }


    public static players:number = 0;

    static addPlayer():void{
        AnimalLogistics.players += 1;
    }



    getName(): string{
        return super.getName() + ` is the name`; 
    }

    getPlayers(): string{
        return `Players: ${AnimalLogistics.players}`
    }
}

let log = new AnimalLogistics("Simba", "Golden Retriever", "female", 1.5);
// console.log(log.getName());
// console.log(dog.getName());


// console.log(log.getPlayers());
// console.log(AnimalLogistics.players);
// AnimalLogistics.addPlayer();
// console.log(AnimalLogistics.players)