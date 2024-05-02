/* 
    -metode iterasi pada array dg memanggil fungsi callback yang diberikan sekali untuk setiap elemen dalam array dan membangun sebuah array baru yang memenuhi kriteria.
    -merupakan metode iterasi utk membuat salinan dangkal sebuah array yang telah disaring dan ini tidak berlaku pada array kosong.
    -fungsi mengembalikan nilai yang truthy atau falsy berdasar nilai elemen yg disaring.
    -jika elemen yg di test tidak lulus tes(tersaring semua) maka akan mengembalikan array kosong.
    syntax:
    -   filter(callbackFn)
    -   filter(callbackFn, thisArg)
*/

const word = ["spray", "elite", "exuberant", "destruction", "present"];
console.log("01.", word.filter((word) => word.length > 6));

//MENYARING NILAI VALUE YG KECIL 
function cukupBsr(value){ 
    return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(cukupBsr);
console.log("02." , filtered);

//MENYARING SEMUA BIL.PRIMA DI SEBUAH ARRAY 
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num) ; i++){ //akar kuadrat
        if(num% i === 0){
            return false; // % modulo: sisa bagi hasil
        }
    } 
    return num > 1 
}
console.log("03.", array.filter(isPrime));

function isPrime2(num){
    let i = 2;
    while(i < num){
        if(num%i ===0){
            return false;
        }
        i++
    }
        return num > 1;
}
console.log("04.", array.filter(isPrime2));

let num = 21;
let pembagi = 0;

for(let i =0; i< num; i++){
    if(num%i === 0){
        pembagi++
    } else if(pembagi > 2){
        break
    }   
}
const hasil = pembagi===2 ? "prima" : "komposit";
console.log("05.", `${num} adalah bilangan ${hasil}..!`);

/*  MENYARING PADA DATA YANG TIDAK VALID DALAM JSON
    Number.isFinite: 
    sebuah metode statis untuk mengecek apakah sebuah value adalah angka, dan apakah angka tsb positif, negatif, NaN atau infinity
    Selain Number.isFinite(), terdapat beberapa metode statis lain yang tersedia di objek Number dalam JavaScript. Berikut beberapa di antaranya:

    01. Number.isNaN(): Metode ini digunakan untuk menentukan apakah nilai yang diberikan adalah NaN (Not-a-Number).
    02. Number.isInteger(): Metode ini digunakan untuk menentukan apakah nilai yang diberikan adalah bilangan bulat (integer).
    03. Number.parseFloat(): Metode ini mengubah string menjadi angka desimal (floating point number).
    04. Number.parseInt(): Metode ini mengubah string menjadi bilangan bulat (integer) dengan menyeleksi dari awal string(karakter non angka diabaikan).
    05. Number.MAX_SAFE_INTEGER: Konstanta yang menyimpan nilai maksimum yang dapat diwakili secara akurat dalam JavaScript tanpa kehilangan presisi.
    06. Number.MIN_SAFE_INTEGER: Konstanta yang menyimpan nilai minimum yang dapat diwakili secara akurat dalam JavaScript tanpa kehilangan presisi.
    07. Number.MAX_VALUE: Konstanta yang menyimpan nilai maksimum yang dapat diwakili dalam JavaScript.
    08. Number.MIN_VALUE: Konstanta yang menyimpan nilai minimum yang dapat diwakili dalam JavaScript yang lebih besar dari 0.
    09. Number.EPSILON: Nilai terkecil yang dapat dihitung secara eksak oleh JavaScript yang mendekati 0.
    10. Number.POSITIVE_INFINITY: Representasi nilai tak terhingga positif.
    11. Number.NEGATIVE_INFINITY: Representasi nilai tak terhingga negatif.
*/
const arr = [
    {id : 15}, {id : -1}, {id : 0},
    {id : 3}, {id : 12.2}, {},
    {id : null}, {id : NaN}, {id: "undefined"},
];
let invalidEntries = 0;
function filterById(item){
    if (Number.isFinite(item.id) && item.id !== 0){ 
        return true
    }
    invalidEntries++;
    return false;
} 
const arrById = arr.filter(filterById);
console.log("06. Filtered Array:", arrById );
console.log("07. Numbered of invalid entries:", invalidEntries);

//MENCARI DALAM ARRAY SESUAI KRITERIA  
const fruits= ["APple", "banANa", "grAPes", "mANgo", "orANge"];
function filterItems(val, query){
    query = query.toUpperCase();
    return val.filter((el) => el.includes(query));
};
console.log("08.", filterItems(fruits, "ap"));
console.log("09.", filterItems(fruits, "an"));

//MENGUNAKAN ARGUMEN KETIGA CALLBACKFN
const names = ["JC83", "Bob123", "Ursula88", "Ben96"];
const greetIDs = names
    .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
    .filter((el, idx, arr) => {
        if(idx > 0 && el <= arr[idx -1]) return false;
        if(idx < arr.length - 1 && el <= arr[idx + 1]) return false;
        return true;
    });
    console.log("10.", greetIDs);

//FILTER PADA SPARSE ARRAYS (filter akan melewatkan array kosong)
console.log("11.", [1, undefined ,3].filter((x) => x=== undefined));
console.log("12.", [1, ,5].filter((x)=> x!== 2));

//FILTER PADA ARRAYLIKE OBJECT
const arrayLike = { 
    0: "a",
    1: "b",
    2: "c",
    length : 3
};
console.log("13.", Array.prototype.filter.call(arrayLike, (x) => x <= "c"));;