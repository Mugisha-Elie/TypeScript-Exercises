interface Key{
  [key: string]: string[],
}

const keys: Key = {
  1: [".", ",", "?", "!"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  "*": ["'", "-", "+", "="],
}

const chars = "abcdefghijklmnopqrstuvwxyz";
const symbols = ".,?!'-+=*"

let isUpperCase = false;
let clicks = "";

function sendMessage(message: string): string {
  const messageArr = message.split("");
  messageArr.forEach(char => {
    if(chars.includes(char.toLowerCase())){

      if(char === char.toUpperCase()){
        isUpperCase = true
      }else{
        isUpperCase = false
      }

      clicks += handleChar(char)
    }
  })
  return clicks;
}



function handleChar(char: string): string{
  let clickStr = "";
  let charClicks = "";

  const caseCheck = clicks.split("").filter(c => c === "#").length % 2 !== 0;

  if(isUpperCase || caseCheck){
    clickStr += "#"
  }

  for(let key of Object.keys(keys)){
    if(keys[key]?.includes(char.toLowerCase())){
      charClicks = key.repeat(keys[key].indexOf(char.toLowerCase()) + 1)
      clickStr += charClicks
    }
  }
  console.log("CharClicks: ", charClicks)
  return clickStr;
}





console.log(sendMessage("Go"))

// console.log(sendMessage("hey")) //"hey", "4433999"
// console.log(sendMessage("Def Con 1!")) // => "#3#33 3330#222#666 6601-1111


// -------------------------
// |   1   |   2   |   3   |  <-- hold a key to type a number
// |  .,?! |  abc  |  def  |  <-- press a key to type a letter
// -------------------------
// |   4   |   5   |   6   |  <-- Top row
// |  ghi  |  jkl  |  mno  |  <-- Bottom row
// -------------------------
// |   7   |   8   |   9   |
// |  pqrs |  tuv  |  wxyz |
// -------------------------
// |   *   |   0   |   #   |  <-- hold for *, 0 or #
// |  '-+= | space |  case |  <-- press # to switch between upper/lower case
// -------------------------