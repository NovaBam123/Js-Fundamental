/*  menambah element array pada index ke-0/awal
    syntax = unshift(el1, el2, el3, .../elN)
*/   

const array1 = [1, 2, 3];
let res = array1.unshift(4, 5);
console.log("01.", array1)

let arr = [4, 5, 6];
arr.unshift(1, 2, 3);
console.log("02.", arr)

let arr2 = [4, 5, 6];
arr2.unshift(1);
arr2.unshift(2);
arr2.unshift(3);
console.log("03.", arr2);

const arr3 = [1, 2];
arr3.unshift([-4, -3]);
console.log("04.", arr3) //properti arr length adaalah 3.
console.log("05.", arr3.length);
arr3.unshift([-7, -6], [-5]);
console.log("06.", arr3);
console.log("07.", arr3.length) //properti arr length 5 

const arrLike = {
    length: 3,
    unrelated: "foo",
    2: 4
}
Array.prototype.unshift.call(arrLike, 1, 2)
console.log("08.", arrLike)

const plainObj = {};
Array.prototype.unshift.call(plainObj, 1, 2);
console.log("09.", plainObj)