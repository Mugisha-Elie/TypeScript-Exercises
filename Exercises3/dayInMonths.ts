let days = 0;
let month = 2;
let year= 2026;


switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 2:
        if((year % 4 === 0 && !(year % 100 === 0) || year % 400 === 0)){
            days = 29;
        }else{
            days = 28;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;

}

console.log(days);


let num = 5;

for(;;){
    console.log(num);
    num--;
    
    if(num <= 0){
        break;
    }
}

let data:any = "string";
let input: unknown = "String";


console.log(data.length);

if(typeof input === "string"){
    console.log(input.length);
}

function inputNumber(val: unknown): number{
    if(typeof val === "number"){
        return val * 2
    }else{
        return 0;
    }
}

const direction: string = "Banana";
console.log(direction);

let directionsOnly : "North" | "West" | "East" | "South";
// directionsOnly = "banana";
directionsOnly = "East";




enum Months {
    Jan,
    Feb,
    Mar,
    Apr,
    May, 
    Jun,
    Jul,
    Aug,
    Sept,
    Oct,
    Nov,
    Dec
}

function isItSummer(month: Months){
    let isSummer:boolean;

    switch(month){
        case Months.Jun:
        case Months.Jul:
        case Months.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }

    return isSummer;
}

console.log(Months);
console.log(isItSummer(Months.Jan));


enum FileAccess{
    Read,
    Write,
    Execute
}

console.log(FileAccess)

enum HttpStatus{
    OK = 200,
    Granted,
    Accepted
}
console.log(HttpStatus)

console.log(FileAccess[1])


enum Theme{
    Dark = "DARK_MODE",
    Light = "LIGHT_MODE"
}

console.log(Theme["Dark"])


function applyTheme(t: Theme){
    console.log(`Applied the ${t} Theme`);
}

// applyTheme(Theme["DARK_MODE"])
applyTheme(Theme.Dark)
applyTheme(Theme["Light"])

enum Directions{
    Up = "South",
    Down = "North",
    Left = "West",
    Right = "East",
    Number = 12,
}

// Directions.Up = "North";

console.log(Directions.Number);



enum MusicPlayerModes {
    PAUSED,
    PLAYING,
    STOPPED
}

function getNextState(state: MusicPlayerModes){
    return MusicPlayerModes[state + 1]
}

console.log(getNextState(MusicPlayerModes.PAUSED));



let skill: [string, number] = ["English", 5];
// skill = ["kkk",5,8]
// console.log(skill[0])
console.log(skill);
console.log(skill.length)
skill.push(8);
skill.push(9)
skill.push("Jogging")
console.log(skill)





// type HttpResponse = {
//     tuple: [number, string];
// }


type HTTPResponse = [number, string]

const arr: HTTPResponse =  [1, "James"]

console.log(arr);



function getLocation():[number, number]{
    return [12, 12];
}


let item:[string, number] = ["Apple", 2];
console.log(typeof item[0])


let optionalElem: [number, number, number, boolean?];
optionalElem = [12, 14, 12];
optionalElem  = [1,2,3,false];

console.log(optionalElem);


function rgba(input: [number, number, number, number?]): string{
    return `rgba(${input[0]}, ${input[1]} ,${input[2]} ${input.length === 4 ? `,${input[3]} ` : `` })`;
}


console.log(rgba([255, 0, 0]))




let someValue:unknown = "Hello World";


// let strLength: number = someValue.length;
let strLength: number = (someValue as string).length;
console.log(strLength);











let numb = 10;
// console.log(numb.toUpperCase())

let string = (numb as unknown) as string
console.log(string);
// console.log(string.toUpperCase())







// let x = "10" as number;
let str = "10";
let number = (str as unknown) as number;
console.log(number)
console.log(Math.pow(number, 2))


// let myCanvas = document.getElementById("canvas") as HTMLCanvasElement;

let variable:string = "James"
console.log(variable)

// let newvar:never = "James";
// console.log(typeof newvar)

let newvar = (variable as unknown) as never;
console.log(newvar)


// function processData(input: any ): void{
//     const arr = input as string[];
//     console.log(arr[0].toUpperCase())
// }


// let val:object = 5;
// console.log(val);
