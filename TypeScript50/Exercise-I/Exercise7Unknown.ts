function isObject(value:unknown): value is Record<string, unknown>{
 return typeof value === "object" && value !== null && !Array.isArray(value)  ; 
}

 

function parsePayload(payload:unknown){

    if(isObject(payload)){

        if("userId" in payload){
            if(typeof payload.userId === "number"){
                return payload.userId;
            }

            throw new Error("userId exists on object but is not a number");
            
        }else{
            
            throw new Error("userId does not exists on the payload");
        }

        

    }
    
    throw new Error("Payload is not a regular POJO");
}

const parsed = parsePayload({userId: 123});
console.log(parsed);