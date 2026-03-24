class Vehicle{
    constructor(public make:string, protected speed: number){}

    accelerate():void{
        this.speed += 10;
        console.log(this.speed);
    }
}

class SportsCar extends Vehicle{
    constructor(make:string, speed:number, public boost:number){
        super(make, speed);
    }

    accelerate(): void {
        this.speed += this.boost;
        console.log(this.speed);
    }
}

const sportsCar = new SportsCar("Ferrar", 0, 50);
sportsCar.accelerate();