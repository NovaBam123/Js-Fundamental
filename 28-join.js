/*Syntax
-join(separator)
-karakter join : 
    01. jika null atau undefined akan menjadi string kosong
    02. hubungan dengan metode string
    03. pada array bersarang..pemisah koma digunakan secara default
*/

const element = ["Fire", "Air", "water"];
const arr1 = ["1", null, undefined, "Four"]
console.log("01.", element.join()); //Fire,Air,Water
console.log("02.", element.join(""));//FireAirWater
console.log("03.", element.join("-"));//Fire-Air-Water
console.log("04.", arr1.join());

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("05.", matrix.join());
console.log("06.", matrix.join(";"));

const nestArr = [1, [2,3], [4, [5, 6]]];
const result = nestArr.toString();
console.log("07.", result);

const arr2 = [];
arr2.push(1, [3, arr2, 4], 2);
console.log("08.", arr2.join(";"));//siklik atau referensi arr2 diabaikan

const sparseArr = [];
sparseArr[1] = "apple";
sparseArr[3] = "Orange";
console.log("09.", sparseArr.join(";")) //terdapat celah arr di index 0 dan 2 akan menjadi string kosong/ undefined

const arrLike = {
    0 : "apple",
    1 : "banana",
    length: 2
}
console.log("10.", Array.prototype.join.call(arrLike, ";"));//selama object memiliki properti length.

