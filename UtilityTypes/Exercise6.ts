interface APIResponse<T> {
    status:number,
    message:string,
    data: T
}

const response:APIResponse<{[key:string]: string}> = {
    status: 200,
    message: "OK",
    data: {name: "John Doe", gender: "male"}
}

