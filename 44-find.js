/*
    -   Dalam find() element pertama yang ditemukan merupakan hasil fungsi yang diberikan, jk tdk terpenuhi maka undefined.
    -   indexOf => nilai index pertama-nya dari fungsi jk tdk ditemukan maka -1.
    -   includes() => mencakup nilai2 yg termasuk dari entri fungsi tsb, mengembalikan true atau false.
    -some() => menguji apakah setidaknya 1 elemen memenuhi fungsi, jika tidak akan false.
    -   Shift tab untuk kebalikan tab.
    Syntax : 
    - find(callbackFn)
    - find(callbackFn, thisAr)
    */

const array1 = [5, 12, 8, 130, 44];
const found1 = array1.find((el) => el > 10);
console.log("01.", found1);

const array2 = [5, 12, 8, 130, 44];
const found2 = array2.indexOf(8, 2);
console.log("01.", found2);

const array3 = [5, 12, 8, 130, 44];
const found3 = array3.includes(130);
console.log("03.", found3);

const array4 = [5, 12, 8, 130, 44];
const found4 = array4.some((el) => el > 10);
console.log("04.", found4);

//MENCARI SALAH SATU PROPERTY DI ARRAY OBJECT
const inventory = [
    { name : "apples", quantity: 2},
    { name : "bananas", quantity: 1},
    { name : "cherries", quantity: 5},   
];
function findItem(fruit){
    return fruit.name === "cherries";
};
console.log("05.", inventory.find(findItem));

//MENCARI BILANGAN PRIMA 
function isPrime(el, idx, arr){
    let i= 2;
    while (i <= Math.sqrt(el)) {
        if (el% i < 1){
            return false;
        }
        i++
    }
    return el > 2;
}    
console.log("06.", [1, 6, 7, 11, 12].find(isPrime));

function isPrime2(num) {
    for(let i= 2; i < Math.sqrt(num); i++){
        if(num% i ===0 ){
            return false;
        }
    }
    return num> 1;
} 
console.log("07.", [1, 6, 7, 11, 12].find(isPrime2));// ini tidak efisien dalam hal bilangan yang besar misal 999983 dimana kode akan mengiterasi semua angka dari 2 hingga 99983-1. pengecekan bil prima akan lebih baik dg menggunakan Math.sqrt().

/*  MENGGUNAKAN ARGUMENT KE-3 DARI CALLBACKFN 
    contoh penggunaan pada pencarian bil pertama yg lebih kecil dari tetangganya dalam sebuah array 
*/

const numbers = [9, -1, 4, 4, 2, 5, 9, 2, 6];
const result = numbers
    .filter((el) => el > 0) // [9, 4, 4, 2, 5, 9, 2, 6];
    .find((el, idx, arr) => {
        if(idx > 0 && el >= arr[idx-1]) return false; //el saat ini lbh besar dr arr seblm-nya
        if(idx < arr.length -1 && el >= arr [idx + 1]) return false; //el saat ini lbh besar dari el arr setelah-nya 
        return true; 
    }); 
console.log("08.", result);
/*  
    kondisi idx > 0 pada if pertama dan kondisi idx < arr.length[idx+1] untuk memastikan pengujian berada dalam rentang array yg disediakan untuk mencegah terjadinya kebocoran memori dan juga kegagalan saat fungsi berjalan. 
*/

/*  MENGGUNAKAN FIND DALAM ARRAY RENGGANG/SPARSE ARRAY
    memperlihatkan semua indeks, termasuk yg telah dihapus
*/
const arr = [1, 2, ,3, , 4, 5];
arr.find((val, idx) => {
    console.log("09.", "Indeks: ", idx, "dg value:", val);
})

arr.find((val, idx) => {
    if(idx === 0){
        console.log("10.", "menghapus array[5]:", arr[3]);
        delete arr[3];
    }
    console.log("11.", "Index: ", idx, "dg value: ", val);
});

//MEMANGGIL FIND PADA ARRAY-LIKE OBJECT
const arrLike = { 
    length: 4, 
    "-1" : 0.1, 
    0: 2, 
    1: 7.3, 
    2: 4
}
console.log("12.", Array.prototype.find.call(arrLike, (x) => !Number.isInteger(x)));
