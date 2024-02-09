const str1 = "breaded mushroom"
console.log(str1.padEnd(19, "..!"))

console.log("abc".padEnd(10)); //"abc       "
console.log("abc".padEnd(10, "foo"));//"abcfoofoof"
console.log("abc".padEnd(6, "123456"));//"abc123"
console.log("abc".padEnd(1));//"abc"

