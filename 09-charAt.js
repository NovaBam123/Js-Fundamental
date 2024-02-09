const sentence = "The quick brown fox jumps over the lazy dog"
const index = 4
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
console.log(sentence[80]);//undefined
console.log(sentence.charAt(80));//""
console.log(`The character at index ${sentence.length} is ${sentence.charAt(sentence.length-1)}`);

const str = "Brave new world";
console.log(str)
console.log(`The character at index 0 is '${str.charAt(0)}'`);
console.log(`The character at index 1 is '${str.charAt(1)}'`);
console.log(`The character at index 2 is '${str.charAt(2)}'`);
console.log(`The character at index 3 is '${str.charAt(3)}'`);
console.log(`The character at index 4 is '${str.charAt(4)}'`);
console.log(`The character at index 40 is '${str.charAt(40)}'`);
console.log(`The character at index 40 is '${str[40]}'`);

const str1 = "Hello";
console.log(str1.charCodeAt(1));  // 101