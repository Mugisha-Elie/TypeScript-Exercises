interface ServerConfig {
    port:number;
    databaseURI: string;
    timeoutMS?:number;
}

function calculateTimeout(config:ServerConfig){
    if(config.timeoutMS){
        return config.timeoutMS + 1000;
    }

    return 3000;
}

const myLocalConfig = {
    port:3000,
    databaseURI: "postgres://localhost:5432/dbname",
    environment: "nodenext"
}

console.log(calculateTimeout(myLocalConfig));

// Excess Property Checking
// console.log(calculateTimeout({
//     port:3000,
//     databaseURI: "postgres://localhost:5432/dbname",
//     environment: "nodenext"
// }))

