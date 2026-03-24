type HTTPMethds = "POST" | "GET" | "PUT" | "PATCH" | "DELETE";

function routeRequest(url:string, method: HTTPMethds):string{
    return `${method} request made to '${url}'`;
}
 
console.log(routeRequest("https://www.example.com/users", "PATCH"));