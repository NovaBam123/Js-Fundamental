/*  Berfungsi untuk menambahkan karakter tertentu(umumnya spasi) pada awal string, sehingga string tersebut mempunyai panjang string tertentu.
    Syntax: 
    padStart(targetLength)
    padStart(targetLength, padString)
    -jika padstring kosong atau tidak disediakan maka default berupa string kosong.
*/ 
const str = "5";
console.log("01.", str.padStart(2, "0"));

const name = " bamahry";
console.log("02.", name.padStart(15, "nova"))
console.log("03.", name.padStart(name.length+4, "nova"));

const number = "2034399002125581"
const last4Digit = number.slice(-4)
console.group("04.", last4Digit)
const maskedNumber = last4Digit.padStart(number.length, "*");
console.log("05.", maskedNumber);

console.log("06.", "abc".padStart(10)); //"       abc"
console.log("07.", "abc".padStart(10, "foo")); //"foofoofabc"
console.log("08.", "abc".padStart(6, "123456")); //"123abc"
console.log("09.","abc".padStart(8, "0"));//"00000abc"
console.log("10.", "abc".padStart(1));//abc
let str2= "5";
console.log("11.", str2.padStart(3, "abc"));

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "12")
}
const num = 345
console.log(leftFillNum(num, 5));
