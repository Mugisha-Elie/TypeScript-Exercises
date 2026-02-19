interface CounterClosure{
    (): number;
}

function closureCounter(num: number): CounterClosure{
    let counter:number = num;

    return () => {
        return ++counter;
    }
}

const count = closureCounter(1);
console.log(count())
console.log(count())
console.log(count())