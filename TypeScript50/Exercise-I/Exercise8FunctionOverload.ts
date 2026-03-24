function executeQuery(query:string):string;
function executeQuery(query:string[]):string[];


function executeQuery(query: string | string[]): string | string[]{
    if(Array.isArray(query)){
        return query;
    }

    return query;
}

// const query = executeQuery(["query1", "query2", "query3"]);
const query =  executeQuery("query");
console.log(typeof query); 