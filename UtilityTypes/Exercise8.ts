interface Event<Name, Payload>{
    name: Name,
    data: Payload
}

type LoginEvent = Event<"LOGIN", {userId: string}>

let event1: LoginEvent = {
    name: "LOGIN",
    data: {userId: "101"}
}