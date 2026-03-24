type User = {
    name:string,
    age:number,
    isAdmin:boolean
}


const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

function printUserInfo(u: User) {
  console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
}