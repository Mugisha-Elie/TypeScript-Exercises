class SmartLight{
    name:string;
    isOn:boolean = false;

    constructor(name:string){
        this.name = name;
    }

    toggle():void{
        this.isOn = !this.isOn ;
    }

    getStatus():string{
        return this.isOn ? `${this.name} light is ON` : `${this.name} light is OFF`
    }
}

let smartLight = new SmartLight("Living Room");
smartLight.toggle();
console.log(smartLight.getStatus());
smartLight.toggle();
console.log(smartLight.getStatus());