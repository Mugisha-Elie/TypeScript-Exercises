type IsString<T> = T extends string ? true : false | "Not a string";

let itIsString: IsString<"James"> = true
let isItString: IsString<22> = false

