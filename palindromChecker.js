let word = prompt ("Enter your Word or Phrase");
let wordUpper = word.toUpperCase()

let str = wordUpper.replace(/[^a-zA-Z0-9]/g, "")
console.log (str)
let wordReverse = "";

for (let i = (str.length - 1); i >= 0; i--) {
    wordReverse += str[i];
}

let result = `Your Word: ${word}\nIs This a Palindrome?`;
str === wordReverse ? alert (`${result} True`): alert (`${result} False`);