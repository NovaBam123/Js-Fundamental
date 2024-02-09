//unicode charCodeAt A-Z = 65 - 90;
//unicode charCodeAt a-z = 97 - 122;
//unicode charCodeAt undefined, Nan dan null = index ke 0 dari yg dicari

const sentence = "The quick fox jumps over the lazy dog"
const index = 4;
console.log(
  `Character code '${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}'`
)

console.log(`Character code '${sentence.charCodeAt(NaN)} is equal to ${sentence.charAt(0)}'`);