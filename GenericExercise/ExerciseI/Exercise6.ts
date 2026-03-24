interface APIResponse<T = string>{
    status: number;
    data: T
}

const respo: APIResponse<number> = {
    status: 200,
    data: 54
}

const resp: APIResponse = {
    status: 500,
    data: "Server Error"
}