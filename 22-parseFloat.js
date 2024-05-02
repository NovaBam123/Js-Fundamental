/*  Merupakan Fungsi bawaan Js
    - berfungsi untuk mengkonversi string menjadi angka desimal(float).
    - Fungsi ini mengabaikan karakter2 yang tidak valid dalam bilangan desimal dan mengembalikan angka float dari string yang dihasilkan dari string yang diberikan.
*/
let string= "Hello";
const parse= parseFloat(string)
console.log("01a.", (typeof(parse)));
console.log("01b.", parseFloat(string));
console.log("01c.", parseFloat(3.14));
console.log("02.", parseFloat("3.14"));
console.log("03.", parseFloat("  3.14"));
console.log("04.", parseFloat("3.14e-2"));
console.log("05.", parseFloat("0.03.14E+2"));
console.log("06.", parseFloat("3.14some non-digit character"));
parseFloat( {
  toString() {
    return "3.14";
  },
})

// const num = "3.14159";

// const parse = parseFloat(num)

// console.log(parse)
// console.log(typeof(parse))