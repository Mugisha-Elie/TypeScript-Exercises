class User{
    constructor(public username:string, private password:string){}

    changePassword(newPassword:string): void{
        this.password = newPassword;
    }
}

const user = new User("Admin", "4321@nimdA");
console.log(user.username)
// console.log(user.password)