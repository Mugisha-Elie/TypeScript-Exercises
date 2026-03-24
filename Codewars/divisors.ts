function divisors(n: number) {
  const sqrt:number = Math.sqrt(n)
  const divisors: number[] = [];
  for(let i=1; i<sqrt * 2; i++){
      if(n % i === 0){
          divisors.push(i);

          if(i !== n / i){
            divisors.push(n / i)
          }
        }
    }
    
  console.log(divisors)

  return divisors.length;
}

console.log(divisors(500000));
console.log(divisors(4))
console.log(divisors(64));