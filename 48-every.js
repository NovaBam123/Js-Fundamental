/*
    METODE INI MEMERIKSA SETIAP ELEMENT DALAM ARRAY APAKAH SESUAI DG TEST YG DISEDIAKAN OLEH FUNGSI: NILAI HASILNYA ADALAH BOOLEAN
    - metode ini menggunakan argument : 
      element: elm saat ini yg sedang diperiksa
      index: no idx yang sedang diproses
      array: array yg dipanggil/diperiksa
    - SYNTAX:
    every(callbackFn)
    every(callbackFn, thisArg)
*/
const array1= [1, 30, 39, 20, 10, 13];
function kecilDari(curr){return curr < 40} 
console.log("01.", array1.every(kecilDari));

//TESTING UKURAN PADA SEMUA ELEMENT ARRAY 
const isBigEnough = (elm, idx, arr) =>  elm>= 10 ;
console.log("02.", [12, 5, 6, 130, 44].every(isBigEnough));
console.log("03.", [12, 54, 16, 130, 44].every(isBigEnough));

//TESTING JIKA SUATU ARRAY ADALAH SUBSET DARI ARRAY LAIN 
function isSubset(arr1, arr2) {
    return arr2.every((el) => arr1.includes(el));
}
console.log("04.", isSubset([1, 3, 5, 6, 7, 9], [5, 7, 6]));
console.log("05.", isSubset([1, 3, 5, 6, 7, 9], [5, 7, 8]));

//PADA SPARSE ARRAY tidak akan berfungsi baik
console.log("06.", [1, ,3].every((x) => x != undefined));
console.log("07.", [2, ,2].every((x) => x = 2));

//PADA OBJECT ARRAYLIKE 
const arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    3: 90, //walau ini number, diabaikan sejak panjang array adalah 3
    length: 3
};
console.log("08.", Array.prototype.every.call(arrayLike, (x)=> typeof x=== "string"));
