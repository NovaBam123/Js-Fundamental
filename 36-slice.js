/*  
    Metode yg digunakan untuk mengembalikan potongan(slice) dari string asli. (ekstraks Array)
    -potongan dimulai dari indeks yang ditentukan("start") hingga akhir string/array. namun jika end ditentukan maka end tidak termasuk dalam potongan.
    - shallow copy selain concat() dan splice()..bertujuan mengekstrak value array. 
    - jika minus diakhir..index ke-(-) tsb tidak termasuk.
    syntax :
    - slice()
    - slice(start)
    - slice(start, end)
    utk object arrayLike sering menggunakan bind
*/

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("01.", animals.slice(2)); // ["camel", "duck", "elephant"]
console.log("02.", animals.slice(2, 4));// ["camel", "duck"]
console.log("03.", animals.slice(1, 5));// ["bison, "camel", "duck", "elephant"]
console.log("04.", animals.slice(-2));// ["duck", "elephant"]
console.log("05.", animals.slice(2, -1));// ["camel", "duck"]
console.log("06.", animals.slice()); //shallowcopy array animals

const nums= [1, 2, 3, 4, 5, 6];
console.log("07.", nums.slice(7)); 
console.log("08.", nums.slice(-5, -2)); 
console.log("09.", nums.slice(-6, -3)); 
console.log("10.", nums.slice(-4, 4));

const fruits = ["banana", "orange", "lemon", "apple", "mango"];
console.log("11.", fruits.slice(1, 3));

const arrayLike = {
    length: 4,
    0: 2,
    1: 3,
    2: 4,
    3: 33
};
console.log("12.", Array.prototype.slice.call(arrayLike, 1, 4));

const slice = Function.prototype.call.bind(Array.prototype.slice);
function list() {
    return slice(arguments);
};
const list1 = list(1, 2, 3);
console.log("13.", list1.slice()); //ini membentuk array 2 cara lain-nya sbg berikut: 

function list2() {
    return Array.from(arguments)
}
const num2 = list(4, 5, 6);
console.log("14.", num2);

function list3() {
    return [...arguments];
}
const num3 = list(7, 8, 9);
console.log("15.", num3);

//jika sumber array-nya sparse(jarang/ada gap);
console.log("16.", [1, 2, , 4, 5].slice(1, 4));
