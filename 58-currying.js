/*  CURRYING 
    konsep dalam programan fungsional dimana sebuah fungsi mengambil beberapa argument yang diubah menjadi serangkaian fungsi, masing2 mengambil satu argument.
    fungsi currying ini bisa kita analogikan dengan sebuah adonan kue, dimana jika kue tersebut membutuhkan 3 bahan/adonan. jika bahan dari adonan dari kue tersebut kurang dari 3 maka kue ini tidak akan jadi.
    beberapa fungsi currying: 
    1. Pemeriksaan Argument: 
        Memungkinkan untuk pemeriksaan argumen yang diperlukan sebelum melanjutkan eksekusi kode sehingga fungsi berjalan dengan benar dan tidak kekurangan argument.
    2. Menghindari Pengulangan Argument: 
        Dengan currying kita tidak perlu terus menerus melewatkan argument yang berulang kali. Dengan melewatkannya sekali dan kemudian memanggil fungsi yang dicurry dengan argumen yang berbeda pada setiap pemanggilan. 
    3. Pemisahan Tugas: 
        Membagi fungsi besar menjadi beberapa fungsi kecil yang masing2 bertanggung-jawab untuk satu tugas sehingga fungsi lebih bersih, fokus dan tidak rentan terhadap kesalahan dan mengurangi efek samping(side effect).
    4. Fungsional Programing:
        programan fungsional yang membuat fungsi dapat menerima fungsi lain sebagai argumen menurut tingkatan prioritas (higher order).
    5. Membuat kode lebih mudah dibaca.          
*/
// NON CURRY VERSION
function add(a, b, c){
    return a+ b+ c
}
console.log("01. noncurry: ", add(1, 2, 3));

// CURRIED VERSION
function addCurry(a){
    return function (b){
        return function(c){
            return a+ b+ c
        }
    }
}
console.log("02. curried: ", addCurry(1)(2)(3));

function curry(f){
    return function(a){
        return function(b){
            return f(a, b)
        }          
    }
}
function sum(a, b){
    return a+b
}
let curriedSum = curry(sum)
console.log("03.", curriedSum(1)(2));

function tambahCurry(a){
    return function(b){
        return function(c){
            return a+ b+ c
            }
        }
    }
function tambah(a, b, c){
    return a+ b+ c
}
let tambahDua = tambahCurry(2)
console.log("04.", tambahDua(5)(3));

/* ADVANCE CURRYING  
    bind merupakan sebuah metode dalam js untuk membuat salinan fungsi baru yang mengikat dengan nilai this pada argumen-nya. argument2 ini dapat diatur ulang sesuai dengan kebutuhan.
*/ 
const myCurry = function(fn){
    return curried = function(...args){
        if(fn.length !== args.length){
            return curried.bind(null, ...args)
        }
        return fn(...args);
    }
}
const totalNum= function(x, y, z){
    return x+ y+ z 
}
const totCurry = myCurry(totalNum);
console.log("05.", totCurry(10)(20)(30));

//  MODERN CURRYING WITH ES6 
const request = greet => name => message => `${greet} ${name} ${message}`
console.log("10.", request("Hello")("John")("add me in your FB"));
 
const request2 = greet=>{
    return name=>{
        return message=>{
            return `${greet} ${name} ${message}`
        }
    }
}
console.log("11.", request2("Hai")("Andi")("How are You?"));

