/*
    Sebuah metode yg menerapkan fungsi thd akumulator pd array (dari kanan ke kiri) dan menguranginya menjadi sebuah nilai tunggal.
    Syntax: 
    -reduceRight(callbackFn)
    -reduceRight(callbackFn, initialValue)
*/
const array1 = [ [0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight((accu, currentValue) => 
    accu.concat(currentValue)
);
console.log("01.", result);

//CARA KERJA REDUCERIGHT() TANPA INTIALVALUE
const arr1 = [0, 1, 2, 3, 4];
function redRight(acc, curr, idx){
    const result = acc + curr
    console.log("02.", `Akumulator: ${acc}, Nilai saat ini: ${curr}, Index: ${idx}, Hasil: ${result}`);
    return result;
}
arr1.reduceRight(redRight);

//CARA KERJA REDUCERIGHT() DG INITIALVAUE
function redRight2(acc, curr, idx){
    const result = acc + curr
    console.log("03.", `Akumulator: ${acc}, Nilai saat ini: ${curr}, Index saat ini: ${idx}, Hasil: ${result}`);
    return result;
}
arr1.reduceRight(redRight2, 100);

//MENJUMLAHKAN SEMUA ELEMENT DALAM ARRAY 
const sum = [1, 2, 3,].reduceRight((a, b)=> a+b);
console.log("04.", sum);

//MENJALANKAN DAFTAR FUNGSI ASYNCHRONOUS DG CALLBACK DALAM URUTAN YG MASING2 MEMBERIKAN HASIL PADA FUNGSI BERIKUT=NYA.

/*
    perbedaan fungsi regular dan fungsi panah adalah cara fungsi tersebut menerima argumen.
    Di fungsi panah argumen disediakan langsung sebagai parameter,
    sedangkan dalam fungsi regular argumen disimpan dalam objek argumen yg merupakan objek arrayLike.
    ini adalah contoh "HIGHER ORDER FUNCTION" yg mengambil serangkaian fungsi(rest) dan mengembalikan fungsi baru yg menerima callback dari argumen2.

*/
const waterfall = (...rest) => 
    (callback, ...args) =>
        rest.reduceRight((acc, fn) => 
            (...result) =>
                fn(acc, ...result),
                callback,
        )(...args); 

function waterfall2() {
    let rest = Array.prototype.slice.call(arguments)
    return function(callback){
        let args =Array.prototype.slice.call(arguments, 1);
        return rest.reduceRight(function(acc, fn) {
            return function(){
                let result = Array.prototype.slice.call(arguments);
                return fn.apply(null, [acc].concat(result));
            }
        }, callback).apply(null, args)
    };
}
const randInt =(max) => Math.floor(Math.random()* max);
const add5= (callback, x)=> {
    setTimeout(callback, randInt(1000), x+5);
};
const mult3= (callback, x)=> {
    setTimeout(callback, randInt(1000), x* 3);
}
const sub2= (callback, x)=> {
    setTimeout(callback, randInt(1000), x -2);
}
const split= (callback, x)=> {
    setTimeout(callback, randInt(1000), x, x);
} 
const add=(callback, x, y)=> {
    setTimeout(callback, randInt(1000), x+ y);
} 
const div4= (callback, x)=> {
    setTimeout(callback, randInt(1000), x/4);
}
const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5);

//PERBEDAAN ANTARA REDUCE() DAN REDUCERIGHT()
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, curr)=> prev + curr);
const right = a.reduceRight((prev, curr) => prev + curr)
console.log("06.", left);
console.log("07.", right);

/*  DEFINING COMPOSABLE FUNCTIONS 
    -merupakan fungsi yg dirancang utk dapat digabungkan dg fungsi lain, setiap output fungsi dilewatkan pada fungsi berikutnya dan hasil pada fungsi terakhir menjadi hasil akhir dari proses tsb.
    - utk dapat membuat alur pemrosesan data yg kompleks dg menggabungkan fungsi2 sederhana tanpa perlu menulis ulang fungsi yg sudah ada.
*/
function compose(...rest) { 
    return function(input){
        return rest.reduceRight((acc, fn) => fn(acc), input)
    }
}
const add1 = (x) => x+ 1;
const doubled = (x) => x* 2;
const myPipe = compose(add1, doubled);
const myPipe2 = compose(doubled, add1);
console.log("08.", myPipe(2));
console.log("09.", myPipe2(2));
console.log("10.", compose(add1, doubled)(2));

/*  REDUCERIGHT() PADA ARRAY RENGGANG/SPARSE ARRAY 
    metode ini melewatkan sparse array tapi tidak melewatkan undefined
*/

console.log("11.", [1, 2, ,4].reduceRight((a,b) => a+b));
console.log("12.", [1, 2, undefined ,5].reduceRight((a,b) => a+b));

//REDUCERIGHT PADA OBJECT ARRAY LIKE
const arrayLike = { 
    0: 2, 
    1: 3, 
    2: 4, 
    3: 99, 
    length: 3
}
console.log("13.", Array.prototype.reduceRight.call(arrayLike, (x, y)=> x-y));
