function add(arg1:number, arg2:number):number;
function add(arg1:string, arg2:string):string;

function add(a:string | number, b:string | number): number | string{
    if(typeof a === "string" && typeof b === "string"){
        return a + b;
    }else if(typeof a === "number" && typeof b === "number"){
        return a  + b;
    }
}