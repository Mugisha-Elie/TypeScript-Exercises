const distinct = (a: number[]): number[] => {
  return Array.from(new Set(a));
}

console.log(distinct([1,2,2,1,]))