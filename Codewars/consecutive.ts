function firstNonConsecutive(arr:number[]): null | number  {
   
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== (arr[i+1] as number - 1)){
            return arr[i+1] as number;
        }
    }

    return null;
   
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 7]));
