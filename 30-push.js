/* Menambahkan satu atau lebih elemen baru ke akhir array dan mengembalikan panjang array yang baru.
    Syntax:
    - push()
    - push(element1)
    - push(el1, el2)
    - push(el1, el2, ...elN)
*/
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");

console.log("01.", count);
console.log("02.", animals);
animals.push("chicken", "cats", "dogs");
console.log("03.", animals); //element ditambahkan di penghujung array

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
vegetables.push(moreVegs); // array ttp berdiri sendiri
console.log('04.', vegetables);

const sayuran = ["Seledri", "Tomat"];
const tambahSyr = ["Kangkung", "Wortel"]
sayuran.push(...tambahSyr); // dg spread operator: array digabung pada array pertama 
console.log("05.", sayuran);

const arrayLike = {
    length : 3,
    unrelated: "foo",
    2: 4
}
Array.prototype.push.call(arrayLike, 1, 2);
console.log("06.", arrayLike);

const plainObj = {};
Array.prototype.push.call(plainObj, 1, 2);
console.log("07.", plainObj);

const obj = {
    length: 0,   // walaupun ini ditiadakan namun tetap disarankan untuk menggunakan properti length untuk objek arrayLike.
    addElement(elem){
        [].push.call(this, elem);
    },
}
let car = { Honda: "CRV"}
obj.addElement({...car});
obj.addElement({Suzuki: "Escudo"});
console.log("08.", obj.length);
console.log("09.", obj)

