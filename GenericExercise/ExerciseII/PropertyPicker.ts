function pluck<T extends object, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

const obj = {firstname: "John", lastname: "Doe", age: 2, isTrue: false}
const values = pluck(obj, ["firstname", "age", "isTrue"])
console.log(values);