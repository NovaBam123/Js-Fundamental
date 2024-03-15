/*
    Metode untuk mengetes setidaknya ada satu elamen yg lulus test dari fungsi yg disediakan. hasilnya true jika ada dan false jika sebaliknya. dg tidak memodifikssi array.
    - SNYTAX :
    some(callbackfn)
    some(callbackn, thisArg)
*/
const array1 = [1, 2, 3, 4, 5];
function even(el){return el% 2 ===0};
console.log("01.", array1.some(even));

//MENGETES NILAI PADA ARRAY ELEMEN
const isBiggerThan= (el) => el>10;
console.log("02.", [2, 5, 8, 4, 10].some(isBiggerThan));
console.log("03.", [2, 12, 8, 4, 10].some(isBiggerThan));

//ATAU TANPA ARGUMEN YG DILEWATKAN: 
console.log("04.", [2, 4, 7, 6, 5].some((x) => x> 10));

//MENGECEK APAKAH ADA NILAI YANG EXIST DALAM SUATU ARRAY
const fruits = ["apel", "pisang", "jambu", "mangga"];
function cekStok(arr, val){
    const result = arr.some((el) => val === el)
    if(result){
        console.log("05.", `${val}: stok ada`)
    } else{
        console.log("05.", `${val}: stock habis..!!`);
    }
    return result;
}
cekStok(fruits, "apel");
cekStok(fruits, "durian");

function cekStok2(arr, val){
    const hasil = arr.some((el) => val === el);
    return hasil? console.log("06", `${val}: stok tersedia`) : console.log("06.", `${val}: stock habis..!!`)     
}
cekStok2(fruits, "apel");
cekStok2(fruits, "durian");//penggunaan console log yang digabung dalam return dalam sebuah fungsi sebaiknya sangat dihindari karena kode akan sulit dibaca terutama saat kode lebih kompleks

//  SEDIKIT TENTANG TERNARY OPERATOR 
const isRainy = false;
const isSunny = true;
const isCloudy = false;

const weather =
  isRainy ? "It's rainy today" :
  isSunny ? "It's sunny today" :
  isCloudy ? "It's cloudy today" :
  "Weather condition unknown";
console.log("07.", weather);

//MENGKONVERSI VALUE TERTENTU MENJADI BOOLEAN
const value = [true, "true", 1, 100];
function getBoolean(val){
    if(typeof val === "string"){
        val = val.toLowerCase().trim();
    }
    return value.some((el) => el ===val);
}
console.log("08.", getBoolean(false));
console.log("09.", getBoolean("true"));
console.log("10.", getBoolean(""));
console.log("11.", getBoolean(100));

//MENGGUNAKAN ARGUMEN KE-TIGA CALLBACKFN
const numbers= [3, -1, 3, 6, 7, 8];
const isIncreasing = !numbers
    .filter((el)=> el> 0)
    .some((el, idx, arr) => {
        if(idx === arr.length -1) return false;
        return el <= arr[idx-1];
    });
console.log("12.", isIncreasing);

//PADA SPARSE ARRAY
console.log("13.", [3, ,1].some((el) => el=== undefined));
console.log("14.", [1, ,1].some((el)=> el !==1));
console.log("15.", [1, undefined, 1].some((el)=> el !==1));

//PADA OBJEK ARRAY-LIKE
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: 5
}
console.log("16.", Array.prototype.some.call(arrayLike, (el)=> typeof el === "number"));