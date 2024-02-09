/*  
    -Menggabungkan 2 buah array menjadi sebuah array baru.
    -metode concat sebenernya dikhususkan untuk array
    -namun dapat juga digunakan untuk string ataupun arrayLike
    -arrayLike harus disertai properti lenght
    syntax :
    -concat(value1, value2,...valueN )
*/    


const letters = ["n", "o", "v", "a"];
const numbers = [1, 2, 3]
const alphaNumeric = letters.concat(numbers);
console.log("01.", alphaNumeric);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers02 = num1.concat(num2, num3)
console.log("02", numbers02);

const letter = ["a", "b", "c"]
const alphaNumerick = letter.concat(1, [2,3]);
console.log("03.", alphaNumerick)

const num4 = [[1]];
const num5 = [3, [4]];
const numbers03 = num4.concat(num5)
console.log("04", numbers03)
num4[0].push(2);
num5[1].push(5)
console.log("05.", numbers03)
console.log("06.", [1, , 3].concat([4, 5])); 
console.log("07.", [1, 2].concat([3, , 5])); 

const string1 = "N";
const string2 = "O..!";
const result = string1.concat("", string2)
console.log("08.", result);

let x =  [1, 2, 3];
let b = x.concat();
console.log("09.", b)
