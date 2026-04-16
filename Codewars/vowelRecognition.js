function vowelRecognition(input){
  let count = 0;

  for(let i = 0; i < input.length; i++){
    if(/[aeiou]/gi.test(input[i])){

        const appearances = (i + 1) * (input.length - i);
        count += appearances
        
    }
  }

  return count
}


console.log(vowelRecognition("baceb"))