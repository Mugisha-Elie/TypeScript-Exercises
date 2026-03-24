interface DBUser{
    id: number,
    firstname: string,
    lastname: string,
    gender: string,
    age: number,
    created_at: Date,
}

type UpdateUser = Partial<DBUser>;

const users: DBUser[] = [
    {id: 100, firstname: "James", lastname: "Dough", gender: "male", age: 23, created_at: new Date()},
    {id: 101, firstname: "John", lastname: "Douglas", gender: "female", age: 43, created_at: new Date()},
]


function updateUser(id: number, updates:UpdateUser): void{
    let index = users.findIndex(item => item.id === id);

    if(index != -1){
        // users[index] = {...users[index], ...updates}
        // Object.assign(users[index], updates);
        users[index] = {...users[index], ...updates} as DBUser;
    }

    console.log(users);
}

updateUser(101, {gender: "male"});


