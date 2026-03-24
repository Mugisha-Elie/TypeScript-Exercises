async function testApi(url){
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("HTTP Error", response.status, response.statusText);
        }
        
        return await response.json()
    }catch(error){
        console.log("Network Error", error)
    }
}

testApi("https://lifelineapi-93c3.onrender.com/api/donors")
.then(data => console.log(data))
.catch(error => console.log(error))

