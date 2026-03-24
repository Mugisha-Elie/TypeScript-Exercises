interface User{
    id:number,
    name:string,
    email: string,
    nationality: string,
}

const entities: Partial<User>[] = [
    {id: 100, name: "John", email: "john100@gmailcom", nationality: "Rwandan"},
    {id: 101, name: "Doe", email: "Doe101@gmail.com", nationality: "Congolese"},
]

function updateEntity<T>(id: number, updates:Partial<T>): void{
    const index = entities.findIndex(item => item.id === id);
    
    if(index !== -1){
        
        entities[index] = { ...entities[index], ...updates}
    }
}

updateEntity<User>(100, {nationality: "Dutch"});

console.log(entities);