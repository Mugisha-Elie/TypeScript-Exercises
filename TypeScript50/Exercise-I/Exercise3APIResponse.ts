interface SuccessResponse {
    status: 200,
    data: string[],
}

interface ErrorResponse{
    status: 400 | 500,
    errorMessage: string,
}

type APIResponse = SuccessResponse | ErrorResponse;

function getResponse(response: APIResponse): void{
    switch (response.status){
        case 200:
            console.log(response.data);
            break;

        case 400:
        case 500:
            console.log(response.errorMessage);
            break;

        default:
            console.log("Invalid Response");
            break;
            
    }
}

const success:SuccessResponse = {
    status:200,
    data: ["BMW Should join F1", "Audi did this year", "We also have Cadillac this year"]
}

const error:ErrorResponse = {
    status: 500,
    errorMessage: "Internal Server error"
}


// getResponse(error);
getResponse(success); 