/*  APAKAH SUATU NILAI TERTENTU TERDAPAT DALAM DALAM ARRAY ATAU TIDAK 
    - true jika terdapat nilai yang dicari dan false sebaliknya.
    SNYTAX :
    - includes(searchElement)
    - includes(searchElement, fromIndex)
    01. Jika fromindex negatif, dilihat dari akhir array.
    02. Jika fromIndex diluar rentang negatif maka dianggap 0(nol) 
    03. Jika fromIndex => dari arr.length maka pencarian tdk dilakukan dan akan mengembalikan false.
*/

const arr1= [1, 2, 3, 4, 5];
const pets= ["cat", "dog", "bird"]
console.log("01.", arr1.includes(2));
console.log("02.", pets.includes("cat"));
console.log("03.", pets.includes("fish"));

console.log("04.", arr1.includes(3, -1)); //false
console.log("05.", arr1.includes(3, -10)); //-> -10 dianggap 0
console.log("06.", arr1.includes(3, 5)); //-> pencarian tdk dilakukan.
console.log("07.", arr1.includes(3, 3));//-> pencarian mulai indeks ke-3. nilai 3 ada di idx ke-2
console.log("08.", arr1.includes(2, -4));

// PADA NAN DAN SPARSE ARRAY
const arr2= [1, 2, , NaN, 4, 5];
console.log("09.", arr2.includes(NaN, -3));
console.log("10.", arr2.includes(undefined, 2));
console.log("11.", arr2.includes(undefined, -2));

// PADA OBJEK ARRAY-LIKE
const arrLike = {
    length: 3, 
    0: 2,
    1: 2,
    2: 4,
    3: 1
};
console.log("12.", Array.prototype.includes.call(arrLike, 2));
console.log("13.", Array.prototype.includes.call(arrLike, 1));

