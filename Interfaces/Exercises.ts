interface Car{
    make:string;
    model: string;
    year: number;
}

const myCar: Car = {
    make: "Toyota",
    model: "Hilux",
    year: 2000
}

console.log(myCar);


// class Honda implements Car{

//     make; model; year;

//     constructor(make:string, model:string, year:number){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }


//     drive():void{
//         console.log("vroom");
//     }
// }


class Honda implements Car{
    constructor(public make:string, public model:string, public year:number){}

    drive():void{
        console.log("vroom");
    }
}

const honda = new Honda("Honda", "Civic", 2003)
console.log(honda);
honda.drive();
