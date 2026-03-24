function isDefined<T>(value: T): boolean {
  return value !== undefined && value !== null;
}


const list = [1, 2, null, 4, undefined];
const filtered = list.filter(isDefined) as number[];  // number[]

console.log(filtered);
