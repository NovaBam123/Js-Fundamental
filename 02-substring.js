// substring = jika(5, 2) = baca dibalik (2, 5) 5 dikurangi -1
// substring = jika(-5, 2) = (MINUS) DIBACA 0, 2 dikurangi 1

const anyString = "Mozilla";
// console.log(anyString.substring(0, 1));//M
// console.log(anyString.substring(1, 0));//M
// console.log(anyString.substring(0, 6));//Mozill
// console.log(anyString.substring(1, 4));//ozi
// console.log(anyString.substring(5, 1));//ozil
// console.log(anyString.substring(-5, 3));//Moz
// console.log(anyString.substring(-5, -3));//""


let text = "Hello world!";
//================SUBSTR===================
//substring = depreceated ditandai tanda dicoret di katanya dan lbh baik gunakan metode substrng.
console.log(text.substr(1,4));//ello
console.log(text.substr(2));//llo world
console.log(text.substr(0, 1));//H
console.log(text.substr(-1, 1));//!
console.log(text.substr(-6, 6));//world!


// function replaceString(oldS, newS, fullS) {
//   for (let i = 0; i < fullS.length; ++i) {
//     if (fullS.substring(i, i + oldS.length) === oldS) {
//       fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
//     }
//   }
//   return fullS;
// }

// const result = replaceString("World", "Web", "Brave New World");
// console.log(result)