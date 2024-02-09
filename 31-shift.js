/* 
    -JIka pop menghapus akhir element array..
    -Maka Shift menghapus awal element array..
    -shift method sering digunakan untuk while loop
*/    

const array1 = [1, 2, 3];
console.log("01.", array1.shift());
console.log("02.", array1);

const names = ["Andi", "Budi", "Cinta", "Damai", "Ela"]
while (i = names.shift() !== undefined){
    console.log("03.", names);
}
//atau
const names2 = ["Andrew", "Tyrone", "Paul", "maria", "Gayatri"]
while(typeof (i = names2.shift()) !== "undefined"){
    console.log("04.", names2);
}
//element array berkurang setiap kali terjadi pengulangan/loop..

//contoh lain perbandingan undefined diatas :
let x;
console.log("05.", x !== "undefined");
console.log("06.", x === undefined);

const arrayLike = {
    length : 3,
    Car : 5, 
    unrelated : "foo",
    2 : 4,
}
console.log("07.", Array.prototype.shift.call(arrayLike)); //undefined
/*metode shift tidak akan berhasil pada object yg menyerupai array
jika ingin melakukan metode shift arrayLike perlu dikonversi menjadi array sejati dg menggunakan Array.from namun shift malah menghapus element terakhir pada Array???? */

const arrayLike2 = {
    length: 4, 
    1: "Escudo", 
    2: "CRV", 
    3: "BMW",
    4: "Avanza"
};
const array = Array.from(arrayLike2);
const shiftedElem = Array.prototype.shift.call(array);
console.log("08.", array)
console.log("09.", array.length)

const plainObj = {}
Array.prototype.shift.call(plainObj);
console.log("10..", plainObj);