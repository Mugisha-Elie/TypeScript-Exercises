// function validBraces(braces: string): boolean {

//     while((braces.includes("()")) || (braces.includes("{}")) || (braces.includes("[]")) ){
//         braces = braces.replace(/\(\)|\[\]|\{\}/, "")
//         console.log(braces);
//     }

//     return braces === "" ? true : false;

// }





function validBraces(braces:string): boolean{
    const validOpeners:string[] = [];

    const result = braces.split("").map((brace) => {
        if(/\{|\(|\[/.test(brace)){
            validOpeners.unshift(brace);
            return "";
        }else{
            if(brace === "}" && validOpeners[0] !== "{" || brace === ")" && validOpeners[0] !== "(" || brace === "]" && validOpeners[0] !== "["){
                return brace
            }else{
                validOpeners.shift();
                return ""
            }
        }
    })
    return result.join("") === "" && validOpeners.length === 0 ? true : false
}
console.log(validBraces("(((({{"))
// console.log(validBraces("([{}])"));
// console.log(validBraces("(){}[]" ))
// console.log(validBraces("()"));
// console.log(validBraces("{}"));
// console.log(validBraces("[]"));
// console.log(validBraces("(}"));
// console.log(validBraces("[(])"));
// console.log(validBraces("[({})](]"));
