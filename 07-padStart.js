//===padStart====
const str = "5";
console.log(str.padStart(2, "0"));

const name = " bamahry";
console.log(name.padStart(12, "nova"))
console.log(name.padStart(name.length+4, "nova"));

const number = "2034399002125581"
const last4Digit = number.slice(-4)
console.group(last4Digit)
const maskedNumber = last4Digit.padStart(number.length, "*");
console.log(maskedNumber);

console.log("abc".padStart(10)); //"       abc"
console.log("abc".padStart(10, "foo")); //"foofoofabc"
console.log("abc".padStart(6, "123456")); //"123abc"
console.log("abc".padStart(8, "0"));//"00000abc"
console.log("abc".padStart(1));//abc

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "12")
}
const num = 345
console.log(leftFillNum(num, 5));
