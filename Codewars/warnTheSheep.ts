function warnTheSheep(queue: string[]): string {
  const wolfPosition:number = queue.findIndex(elem => elem === "wolf");
  if(wolfPosition === (queue.length - 1)){
    return "Pls go away and stop eating my sheep";
  }else{
    return `Oi! Sheep number ${(queue.length - (wolfPosition + 1))}! You are about to be eaten by a wolf!`
  }
}

console.log(warnTheSheep(["sheep","sheep","sheep","sheep","sheep", "wolf", "sheep"]))