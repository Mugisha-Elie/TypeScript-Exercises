interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    gender: string, 
    age: number
}

interface APIResponse<T>{
    data: T | null;
    error: string | null;
    status: number;
}

type SmartResponse<T> = T extends number ? APIResponse<User> : APIResponse<User[]>



async function fetchUser<T extends number | undefined>(id?:T): Promise<SmartResponse<T>>{
    if(id){
        try{
            const response = await fetch(`http://localhost:3000/${id}`);

            if(!response.ok){
                throw new Error(`HTTP Error:  ${response.status}, ${response.statusText}`);
            }

            return {data: await response.json(), error: null, status: response.status};
        }catch(error){
            return {data: null, error: error as string, status: 500 };
        }
    }

    try{
        const response = await fetch("http://localhost:3000/users");

        if(!response.ok){
            throw new Error(`HTTP Error:  ${response.status}, ${response.statusText}`);
        }

        return {data: await response.json(), error: null, status: response.status};

    }catch(error){
        return {data: null, error: error as string, status: 500 };  
    }
}

fetchUser(4)
.then(results => {
    return results.data?.firstname;
})
.then(data => console.log(data))
.catch(error => console.log(error))



fetchUser<undefined>()
.then(results => {
    const firstnames = results.data?.map(user => user.firstname);
    return firstnames;
})
.then(data => console.log(data))
.catch(error => console.log(error))