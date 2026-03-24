interface Admin{
    role:string,
    privileges:string[]
}

interface StandardUser{
    role:string,
    department: string
}


function isAdmin(user: Admin | StandardUser): user is Admin{
    return "privileges" in user;
}

function routerUser(user:Admin | StandardUser){
    if(isAdmin(user)){
       console.log("Admin access granted", user.privileges); 
    }else{
        console.log("Standard routed ", user.department);
    }
}




function isString(value: unknown): value is string{
    return typeof value === "string";
}



type RaceCar = { type: "open-wheel", topSpeed: number };
type StreetCar = { type: "sedan", doors: number };

function isOpenWheel(value: RaceCar | StreetCar): value is RaceCar{
    return value.type === "open-wheel";
}

