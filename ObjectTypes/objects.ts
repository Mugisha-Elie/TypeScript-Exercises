// const employee: object = {
//     eId: 101,
//     eName: "Bolingo",
// }

// console.log(employee); 
// console.log(employee.eName)










// type Address = {
//     country: string,
//     city?: string,
//     readonly nationality?: string,
// }

// type Employee = {
//     eID: number,
//     eName: string,
//     ePhone?: string,
//     readonly gender: string,
//     address?: Address
// }


// const employee: Employee = {
//     eID: 12,
//     eName: "James",
//     gender: "male",
//     address: {country: "Kenya"}
// }

// console.log(employee);
// console.log(employee.eName);













// const employee: {
//     eID: number,
//     eName: string,
//     ePhone?: string,
// } = {
//     eID: 12,
//     eName: "Jermaine",
// }

// console.log(employee.eID);


// type Phonebook = {
//     [key: string]: string,
// }

// const contacts: Phonebook = {};

// contacts["James"] = "+25088456675";
// contacts.age = "25";

// console.log(contacts);









type Phonebook = {
    [key: string]: string | number,
}

const contacts: Phonebook = {};

contacts["James"] = "+25088456675";
contacts.age = "25";
contacts.id = 1;
contacts.location = "Rwanda"

console.log(contacts);

console.log(contacts.id);
console.log(contacts.age.length);

const key = "location";
console.log(contacts[key].toUpperCase())