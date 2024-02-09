/*  
    -Menggabungkan 2 buah array
    -metode concat sebenernya dikhususkan untuk array
    -namun dapat juga digunakan untuk string ataupun arrayLike
    -arrayLike harus disertai properti lenght
    syntax :
    -concat(value1, value2,...valueN)
    -menggabungkan nested arrays
    -metode concat mempertahankan slot kosong jika salah satu dari arrays sumbernya adalah sparse(jarang).
*/ 

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr2.concat(arr1); // argumen akhir akan menjadi nilai array.
console.log("01.", arr3);

const arr4 = [1, 2, 3];
const shallowCopy = arr4.concat(); //jika parameter value dihilangkan jadi shallow copy
console.log("02.", shallowCopy)

const num1 = [[1]];
const num2 = [3, [4]];
const num3 = num1.concat(num2);
console.log("03.", num3)
num1[0].push(2);
num2[1].push(5);
console.log("04.", num3);

console.log("05.", [1, ,3].concat([4, 5]));//sparse dipertahankan..!
console.log("06.", [1, 2].concat([3, ,5]));

console.log("07.", Array.prototype.concat.call({}, 1, 2, 3));
console.log("08.", Array.prototype.concat.call(1, 2, 3));

const arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 3,
    0: 1,
    1: 2,
    2: 99,
}
console.log("09.", Array.prototype.concat.call(arrayLike, 3, 4))

const arrLike = {
    length: 2,
    O: "a",
    1: "b",
}
console.log("10.", [].concat(arrLike));