interface DBUser{
    id:string;
    email:string;
    passwordHash:string;
    isActive:boolean;
    createdAt:Date
}

// type UpdateUserDTO = {
//     id?:string;
//     email?:string;
//     passwordHash?:string;
//     isActive?:boolean;
//     createdAt?:Date
// }

// Patch
type UpdateUserDTO = Partial<DBUser>

let reqBody:UpdateUserDTO = {
    isActive: true
}



// GET

type PublicProfile = Omit<DBUser, "passwordHash">

let resBody:PublicProfile = {
    id:"101",
    email:"name@email.com",
    isActive:false,
    createdAt: new Date()
}

type LoginCredentials = Pick<DBUser, "email" | "passwordHash">

let logInReqBody: LoginCredentials = {
    email: "email@email.com",
    passwordHash: "pw23q5436"
}


type SecureUser = Readonly<DBUser>

const securedUser: SecureUser = {
    id: "102",
    email: "email.com",
    passwordHash: "87tfghj5",
    isActive: false,
    createdAt: new Date()
}

// securedUser.email = "newemail@email.com";

type UserStatusMap = Record<string, boolean>

const userStats: UserStatusMap = {
    user101: true,
    user102: false,
    // user103: 21
}



function updateTable<T>(id:string, payload: Partial<T>){
    return {id, payload}   
}

// console.log(updateTable<DBUser>("104", {age: 25}));
console.log(updateTable<DBUser>("104", {email: "email@gmail.com"}));

type CreateUserDTO = Omit<DBUser, "id" | "createdAt">;

const createdUserDTO:CreateUserDTO = {
    email: "email.com",
    passwordHash: "12345tgcxsertyu",
    isActive: true
}



async function fetchData<T>(data: T){
    return data;
}

// console.log(fetchData<Partial<DBUser>>({email: "email.com"})) // since it is a commonJs couldnt use await in the top level but It works



class DataStore<T extends {id:string}>{
    items: T[] = [];

    add(item: T): void{
        this.items.push(item);
    }

    update(id:string, payLoad: Partial<T>){
        for(let i = 0; i<this.items.length; i++){
            let item = this.items[i] as T;
            if(item.id === id){
                this.items[i] = payLoad as T;
            }

        }
    }

    get(id:string): T | undefined{
        return this.items.find(item => item.id === id);
    }

    print(){
        console.log(this.items);
    }


}

const ds = new DataStore<DBUser>()
ds.add({id: "105", email:"email.com", passwordHash: "345678ijhe5678", isActive: true, createdAt: new Date()} )
ds.add({id: "106", email:"email.com", passwordHash: "345678ijhe5678", isActive: true, createdAt: new Date()} )

ds.print();
ds.update("106", {email: "email@gmail.com"});  // I know this new payload will replace the whole object to be the payload and I will work on it.
console.log(ds.get("105"));

ds.print();










