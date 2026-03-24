type StringFormatter = (param:string) => string;

function formatNotes(names:string[], formatter:StringFormatter):string[]{
    return names.map(formatter);
}

const newNames:string[] = formatNotes(["Aimable", "Luther" ,"Bambi"], (name) => name.toUpperCase());
console.log(newNames);