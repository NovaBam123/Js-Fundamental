/*
    -For each mengurai setiap element pada array melalui proses looping.
    -sifat forEach:
    1. iteratif: metode pengulangan yg memanggil fungsi callback
    2. Tidak mengembalikan nilai: dalam hal ini array baru seperti map.
    3. fungsi callback yg diberikan pada argumen forEach hanya utk array yg mempunyai nilai dan tidak dg array yg bersifat sparse.
    syntax :
    forEach(callbackFn); 
    forEach(callbackFn, thisArg);    
*/

const array1= ["a", "b", "c", "d"];
array1.forEach((e)=>console.log('01.', e));

/*
    -    paramater yg diterima o/ fungsi callback yg dilewatkan pada metode forEach:
    a.   element -> paramater yg sdg diproses, dan untuk diakses
    b.   index -> memungkinkan mengetahu posisi relatif element dlm array
    c.   array -> referensi setiap element pada array/walaupun ini jrng digunakan 
    -   Perbedaan antara forEach dan map:
    metode Map menghasilkan/mengembalikan hasil array baru sedangkan forEach tidak.
*/
array1.forEach((e, i, arr) => console.log("02.", `element: ${e}, index =${i}, dan array =${arr}`));

//PERBEDAAN METODE MAP DAN FOREACH
const nums= [1, 2, 3, 4, 5];
const doubled = nums.forEach(e => e*2);
console.log("03.", doubled);//undefined karena metode ini tidak memberikan hasil array baru(gunakan variable baru sbg penampung dan metode push).

const doubled2 =nums.map(e => e*2);
console.log("05.", doubled2); //[2, 4, 6, 8, 10]

//CONSOH METODE CHAINING YG TIDAK DAPAT DILAKUKAN FOREACH KARENA METODE TSB TIDAK MENGEMBALIKAN ARRAY BARU
const nums2 = [2, 4, 6, 8, 10];
const result = nums2
    .map(e => e*2)
    .filter(e => e%2 ===0)
    .reduce((acc, e) => acc+e, 0);
console.log("06.",result);//4+8+12+16+20=60

//FOREACH PADA SPARSE ARRAY(ARRAY SPARSE TIDAK DI DISPLAY DICONSOLE)
const arr2 = [1, , 2, 3, , 4];
arr2.forEach((e, i) => console.log("07.", `index: ${i}, value: ${e}`));

//FOREACH ADALAH PROSES LOOP YG TIDAK DAPAT DIHENTIKAN KECUALI DG KONDISIONAL STATEMENT
const arr = [1, 2, 3, 4, 5];
arr.forEach((e) => {
    console.log("08.", e)
   //Intruksi apapun tidak menghentikan proses loop dalam forEach
})  

//KONDISIONAL STATEMENT PADA FOREACH
arr.forEach((e, i) => {
    if(e%2!== 0){
        console.log("10.", e)
    }
})

arr.forEach(e => {
    if(e !==3 ){
        console.log("11.", e)
    }
})

arr.forEach((e, i) => arr[i]!==2 && arr[i]!==4 ? true : console.log("12.", e))

arr.forEach((e, i) => {
    if (e === 2 || e === 4) {
        console.log("13.", e);
    }
});

// FOREACH ADALAH FUNGSI SINKRONISASI DAN TIDAK MENUNGGU PROMISES/ASYNCRONOUS
const rating = [2, 4, 6];
let sum = 0;
const sumFun = async(a, b) => a+b; 
rating.forEach(async(rating) => {
    sum = await sumFun(sum, rating)
})
console.log("14.", sum)

//MENDISPLAY ISI ARRAY DI KONSOLE DG CONSOLE.TABLE() DAPAT JUGA MENGGUNAKAN FOREACH
const logArr = (e, i) => {
    console.log("15.", `index : num[${i}] = ${e}`);
}
[2, 5, , 9].forEach(logArr);

const data = [
    {name : "John", age: 30},
    {name: "Alice", age : 25},
    {name: "Bob", age : 35},
]
console.table(data);

//MENGGUNAKAN THISARG
class Counter {
    constructor() {
        this.sum = 0;
        this.count = 0;
    }
    add(array){
        array.forEach(function count(value) {
            this.sum += value;
            ++this.count;
        }, this)
    }
}
const obj = new Counter();
obj.add([2, 5, 9]);
console.log("17.", obj.count);
console.log("18.", obj.sum);

/*  AN OBJECT COPY FUNCTION DG ARRAY.PROTOTYPE.FOREACH 
    fungsi Array.prototype.forEach sebenarnya u/ mengiterasi elemen array
    bbrp cara lain utk membuat salinan objek:
    1. Spread operator 
    2. Object.assign
    3. Penggunaan JSON.parse dan JSON.stringfy
    4. Cara Manual dh Loop (for.. in)    
*/
const copy = (obj) => {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((name) => {
        const desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc)
    });
    return copy;
};
const obj1 = {0: "Hrv", 1: "Bmw", 2: "Escudo"};
const obj2 = copy(obj1);
console.table(obj1);

/*  FLATTEN ARRAY 
    -   membuat FUNGSI FLATTEN/meratakan nested array menjadi array satu dimensi 
    cara yang umum adalah menggunakan Array.prototype.flat(); 
    -   fungsi ini juga sekaligus membersihkan <empty item>/sparse pada array. 

*/
const flatten = (arr) => { //fungsi rekursif
    const result = [];
    arr.forEach((item) => {
        Array.isArray(item) ? result.push(...flatten(item)) : result.push(item) //Array.isArray(value) adalah metode utk mengecek jika value adalah sebuah array atau bukan.
    });
    return result;   
}    
const nested = [1, 2, , [3 , [4]], 5]
console.log("19.", flatten(nested));

//PENGGUNAAN METODE FLAT() & FLATTEN ARRAY DG METODE LAIN:
console.log("20.", nested.flat(Infinity));

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flattenArray(val)] : [...acc, val], []);
}
const nested2 = [1, [2, [3],], [4], 5] 
console.log("21.", flattenArray(nested2)); // Output: [1, 2, 3, 4, 5]

//MENGUNAKAN THIRD ARGUMENT OF CALLBACKFN 
//terutama untuk pemrosesan data array yang komplex
 const numbers = [1, 2, -3, 4 ];
 numbers    
    .filter(el => el > 0)
    .forEach((el, idx, arr) => {
        const prevIdx = idx > 0 ? arr[idx -1] : undefined
        const nextIdx = idx < arr.length-1 ? arr[idx + 1] : undefined
        
        console.log("22.", `Nilai positif : ${el}`);
        console.log("23.", `idx sebelum-nya: ${prevIdx}`);
        console.log("24.", `idx sesudah-nya: ${nextIdx}`);
    });

// MEMANGGIL FOREACH PADA NON_ARRAY OBJECT
const arrayLike = {
    0 : "BMW",
    1 : "HRV",
    2 : "NOMADE",
    length : 4
}  
Array.prototype.forEach.call(arrayLike, (e) => {
    if(e !== "HRV"){
        console.log("25.", e)
    }
})

