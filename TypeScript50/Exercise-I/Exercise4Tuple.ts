type Tuple = [host:string, port:number, username:string, password:string];

function makeURI(details: Tuple): string{
    return `postgres://${details[0]}:${details[1]}/database-name`;  // I think I shouldn't show the password and the username
}

console.log(makeURI(["localhost", 5432, "postgres", "123postgres"])); 