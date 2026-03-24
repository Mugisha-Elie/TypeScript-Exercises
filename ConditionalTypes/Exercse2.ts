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

async function fetchUser(id?:number): Promise<APIResponse<User> | APIResponse<User[]>>{
    if(id){
        try{
            const response = await fetch(`http://localhost:3000/users/${id}`);

            if(!response.ok){
            
                throw new Error(`HTTP Error:  ${response.status}, ${response.statusText}`);
            }

            return {data: await response.json(), error: null, status: response.status};

        }catch(error){
            return {data: null, error: error as string, status: 500 };
        }
    }

    try{
        const response = await fetch('http://localhost:3000/users');

        if(!response.ok){
            throw new Error(`HTTP Error:  ${response.status}, ${response.statusText}`);
        }

        return {data: await response.json(), error: null, status: response.status};

    }catch(error){
        return {data: null, error: error as string, status: 500 };
    }
}

// fetchUser(4)
// .then(results => console.log(results))
// .catch(error => console.log(error));

// fetchUser(4)
// .then((results => console.log(results.data?.firstname)))
// .catch(error => console.log(error));

function isAllUsers(input: APIResponse<User> | APIResponse<User[]>): input is APIResponse<User[]>{
    return Array.isArray(input.data);
}

// fetchUser()
// .then(results => {
//     if(isAllUsers(results)){
//         const userFirstnames: string[] = [];

//         results.data?.forEach(user => {
//             userFirstnames.push(user.firstname)
//         })

//         return userFirstnames;
//     }

//     return results.data?.firstname;
// })
// .then(userFirstname => {
//     console.log(userFirstname);
// })
// .catch(error => console.log(error));