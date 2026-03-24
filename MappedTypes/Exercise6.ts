interface APIResponse<T>{
    data: T | null;
    error: string | null;
    status:number;
}

interface User{
    id:number,
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    age: number
}

type CreateUserPayload = Omit<User, "id">;


async function getEntity<T>(url: string): Promise<APIResponse<T>>{
    try{
        const response = await fetch(url);

        if(!response.ok){
            return {data:null, error: response.statusText, status: response.status};
        }

        const data: T = await response.json();
        return {data, error:null, status: response.status};
    }catch(error) {
        return {data: null, error: "Network Error", status: 500};
    }
}

// getEntity<User[]>("http://localhost:3000/users")
// .then(result => {
//     console.log(result.data?.map(user => user.lastname));
// });

async function postEntity<T, R>(url:string, body: T): Promise<APIResponse<R>>{
    try{
        const response = await fetch(url, {
            headers: {"Content-Type" : "application/json"},
            method: "POST",
            body: JSON.stringify(body)
        })

        if(!response.ok){
            const errorData = await response.json()
            return {data: null, error: errorData.message || response.statusText, status: response.status}
        }

        const data: R = await response.json();
        return {data, error: null, status: response.status};
    }catch(error){
        return {data: null, error: "Connection Refused", status: 500};
    }
}

const newUser: CreateUserPayload = {
    firstname: "Doug",
    lastname: "Heffernan",
    email: "Doffernan@gmail.com",
    gender: "male",
    age: 12
}

postEntity<CreateUserPayload, User>("http://localhost:3000/users", newUser)
.then(result => {
    console.log(result);
})