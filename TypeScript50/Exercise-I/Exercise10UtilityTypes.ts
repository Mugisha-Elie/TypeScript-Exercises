type BaseEntity = {
    id:string, 
    createdAt: Date
}

type User = {
    email:string,
    passwordHash: string
}

type DatabaseUser = BaseEntity & User;

const dbUser: DatabaseUser = {
    id:"101",
    createdAt: new Date(),
    email: "user101@gmail.com",
    passwordHash: "101ures325ojk#ioj"
}


type UserUpdatePayload = Omit<Partial<DatabaseUser>, "id" | "createdAt">

const update: UserUpdatePayload = {
    email: "newemail@gmail.com",
}


 