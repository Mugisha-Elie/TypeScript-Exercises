type PaymentMethod = "Cash" | "Card" | "Organ";

function processPayment(method: PaymentMethod){
    switch (method){
        case "Card":
            return "card";
        case "Cash":
            return "cash";

        case "Organ":
            return "organ"; // Just Kidding it was just for testing purpose
        
        default:
            // return "Error";
            const newMethod: never = method;
            return newMethod;

    }
}

console.log(processPayment("Organ"));