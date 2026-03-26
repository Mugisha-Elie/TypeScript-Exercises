function scramble(str1: string, str2: string): boolean {
  if (str2.length > str1.length) return false;
  const charMap = new Map<string, number>

  for(let i=0; i<str1.length; i++){
    const char:string = str1[i] as string
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }

 for(let i=0; i<str2.length; i++){
  const char = str2[i]
  const count = charMap.get(char!)

  if(!count) return false

  charMap.set(char!, count - 1)
 }

 return true

}


console.log(scramble('rkqodlw', 'world'))
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjavx', 'javascript'))