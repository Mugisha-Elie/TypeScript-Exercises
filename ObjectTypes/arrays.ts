// const skills = ["Walking", "Seeing", "looking", 45];
// console.log(skills);

// // const ids: number[] = [12, 32, "EID300"];

type Address = {
    country?:string, 
    city?:string, 
    readonly nationality: string
} 

type Student = {
    sID: string,
    sName: string,
    sClass: string,
    sAge?: number,
    sAddress?: Address,
    [key: string]: string | Address | number;
}

const students: Student[] = [];

console.log(students);

students.push({
    sID: "101E",
    sName: "Joshua",
    sClass: "Level 5",
});

students.push({
    sID: "102E",
    sName: "Kimi",
    sClass: "Level 2",
    sAddress: {nationality: "Rwandan"},
    sAge: 12
})

students.push({
    sID: "103E",
    sName: "Lance Stroll",
    sClass: "Level 1",
    sAddress: {nationality: "American"},
    sAge: 21,
    car: "Aston Martin"
})

console.log(students);

