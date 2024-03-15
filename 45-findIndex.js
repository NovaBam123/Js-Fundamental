/* 
    -   Jika metode find mengembalikan value-nya sdngkan pd metode findIndex, mengembalikan indeks yang memenuhi fungsi yang disediakan. 
    -   Jika tdk ada el yg memenuhi fungsi akan mengembalikan hasil -1
    syntax : 
    -   findIndex(callbackFn)
    -   findIndex(callbackFn, thisArg)
*/
const arr1 = [5, 12, 8, 130, 44];
const res1 = (el) => el >13;
console.log("01.", arr1.findIndex(res1));

//MENEMUKAN INDEKS PADA BIL.PRIMA DLM ARRAY
function isPrime(num) {
    for(let i=2; i<= Math.sqrt(num); i++){
        if (num% i ===0){
            return false;
        }
    }   
    return num> 1;
}
console.log("02.", [4, 6, 8, 9, 12].findIndex(isPrime)); 
console.log("03.", [4, 6, 7, 9, 12].findIndex(isPrime)); 

function isPrime2(num){
    let i= 2;
    while(i <= Math.sqrt(num)){
        if(num% i < 1) {
            return false
        }
        i++
    }
    return true;
}
console.log("02.", [4, 6, 8, 9, 12].findIndex(isPrime2)); 
console.log("03.", [4, 6, 7, 9, 12].findIndex(isPrime2)); 

//MENGGUNAKAN ARGUMENT KE-TIGA CALLBACKFN
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const res = numbers
    .filter((val)=> val> 0)
    .findIndex((val, idx, arr) => {
        if(idx > 0 && val >= arr[idx - 1]) return false;
        if(idx < arr.length -1 && val >= arr[idx + 1]) return false;
        return true 
    });
console.log("04.", res);    

/* MENGGUNAKAN FINDINDEX PADA ARRAY RENGGANG(SPARSE ARRAY)
    -dapat menemukan indeks pada sparse array tsb 
*/
console.log("05.", [2, 4, 6, , 7].findIndex((x) => x === undefined));

//MENGUNAKAN FINDINDEX() PADA NON-ARRAY OBJEK
const arrayLike = { 
    length: 3,
    "-1": 0.1, //ini akan diabaikan, idx dari 0
    0: 2,
    1: 7.3,
    2: 4
};
console.log("06.", Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)));
