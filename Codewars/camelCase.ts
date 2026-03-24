function toCamelCase(str:string):string{

    return str.split(/_|-/).map((word, index) => {
        if(index === 0){
            if(word[0] === word[0]?.toUpperCase()){
                return word
            }else{
                return word
            }
        }

        return word[0]?.toUpperCase() + word.slice(1);
    }).join("")

}


console.log(toCamelCase("camel-case"));
console.log(toCamelCase("Camel_case"));