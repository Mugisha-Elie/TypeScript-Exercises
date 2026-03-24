class Dog{
    runs():boolean{
        console.log("I can run 🏃‍♂️");
        return true;
    }
}


class Cat{
    runs():boolean{
        console.log("I can run 🏃‍♂️");
        return true;
    }
}

const cat = new Cat();
const dog = new Dog();

function isCat(obj: Cat): boolean{
    return obj instanceof Cat;
}

console.log(isCat(dog))
