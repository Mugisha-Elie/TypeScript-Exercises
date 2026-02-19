// function getPersonDetails(person: { firstname: string, lastname: string }): string {
//     return `${person.firstname} ${person.lastname}`;
// }

const details = {
    firstname: "Ludovick",
    lastname: "Okoye"
}

// console.log(getPersonDetails(details))




interface Person{
    firstname: string,
    middlename?: string,
    lastname: string,
    readonly country?: string
}

function getPersonDetails(person: Person):string{
    return `${person.firstname} ${person.lastname} `
}


// function getPersonDetails({firstname, lastname}: Person): string{
//     return `${firstname} ${lastname}`;
// }


let jane = {
    firstname: "Mary",
    lastname: "Jane",
    age: 15,
    gender: "femmmale"
}

console.log(getPersonDetails(details))
console.log(getPersonDetails(jane));