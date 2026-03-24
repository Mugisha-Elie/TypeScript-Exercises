const encryptThis = (str: string): string => {
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

if(str.length === 0) return ""
if(str.length === 1 && chars.includes(str)) return str.charCodeAt(0).toString();
if(str.length === 2 && chars.includes(str[0]!)) return str.charCodeAt(0).toString() + str[1];

const newStr = str.split(" ").map((word, index) => {
    return word.length > 1 
    ? word.charCodeAt(0).toString() + word.slice(-1) + word.slice(2, -1) + (word.length>2 ? word[1] : "")
    : word.charCodeAt(0).toString()
})



return newStr.join(" ");
}

// console.log(encryptThis("hello"))
console.log(encryptThis(""))
console.log(encryptThis("A"))
console.log(encryptThis("A wise old owl lived in an oak"))