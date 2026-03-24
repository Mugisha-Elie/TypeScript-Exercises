interface Vehicle{
    wheels: number;
    EngineCylinders: string;
    WheelDrive: string;

    // isManualShift: boolean;
}

class Car{
    wheels = 6;
    EngineCylinders = "V8";
    WheelDrive = "All-Wheel Drive"

    isElectric = false;

    honk():void{
        console.log("Beep Beep");
    }
}

const car = new Car();

function inspectVehicle(v:Vehicle, name:string):void{
    console.log(`${name} is a ${v.wheels} wheeled ${v.EngineCylinders} ${v.WheelDrive} monster!`);
}

inspectVehicle(car, "6X6 Toyota Land Cruiser Pickup");