function makePair<K, V>(key:K, value:V){
    return [key, value]
}

const arr = makePair("age", 2);
console.log(arr);