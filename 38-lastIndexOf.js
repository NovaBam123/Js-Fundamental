/*
    - perhitungan parameter kedua harus lebih besar dari nilai indexnya misal index n ada di ke-2 maka parameter kedua harus >= 2 agar hasil tidak -1
    - pencarian case-senstitif antara huruf capital dangan tidak
    - jika parameter kedua negatif(-) maka dianggap index ke-0
    Syntax:
    lastIndexOf(searchString);
    lastIndexOf(searchString, fromIndex)
    - fromIndex adalah patokan kemunculan element tersebut di array, 
      lalu hitung dari kiri muncul terakhir kali element tersebut muncul  
*/    
//CANAL
console.log("01.", "canal".lastIndexOf("c", 0));// 0
console.log("02.", "canal".lastIndexOf("a")); // 3
console.log("03.", "canal".lastIndexOf("l")); // 4
console.log("04.", "canal".lastIndexOf("a", 5)); 3
console.log("05.", "canal".lastIndexOf("a", 0)) //-1
console.log("06.", "canal".lastIndexOf("n", 3)); //2
console.log("07.", "canal".lastIndexOf("a", 0));//-1
console.log("08.", "canalbro".lastIndexOf("", 8));//8
console.log("08a.", "canalbro".lastIndexOf("", 9));

console.log("09.", "hello world hello".lastIndexOf("world", 4))//-1
console.log("10.", "hello world hello".lastIndexOf("world", 99))//6
console.log("11.", "hello world hello".lastIndexOf("hello", 99))//12
console.log("12.", "hello world hello".lastIndexOf("hello", 5))//0

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log("13.", animals.lastIndexOf("Dodo"));//3
console.log("14.", animals.lastIndexOf("Tiger"));//1

const nums = [2, 5, 9, 2];
console.log("15.", nums.lastIndexOf(2));//3
console.log("16.", nums.lastIndexOf(7));//-1
console.log("17.", nums.lastIndexOf(2, 3));//3
console.log("18.", nums.lastIndexOf(2, 2));//0
console.log("19.", nums.lastIndexOf(2, -5));//-7
console.log("20.", nums.lastIndexOf(9, 1));

const array = ["a", "b", "a", "c", "a", "d"];
const indices = [];
let idx = array.lastIndexOf("a");
while(idx !== -1){
    indices.push(idx);
    if(idx > 0) {
        idx = array.lastIndexOf("a", idx -1);
    } else {
        idx = -1
    }
}
console.log("21.", indices)
console.log("22.", array.lastIndexOf("a", -7));//kondisi ini yg menyebabkan loop berhenti..karena menyebabkan hasil -1!

for(let i=0; i< array.length; i++){
    if(idx !== -1){
        indices.push(idx)
    idx = idx > 0 ? array.lastIndexOf("a", idx-1) : -1    
    }
}
console.log("23.", indices)

//kita tidak bisa mencari empty slot/string kosong di metode lastIndexOf
console.log("24.", [1, 2, , 3, ,  4].lastIndexOf("", 1));// -1

const arrayLike = {
    0: 2,
    1: 3,
    2: 2,
    3: 5,
    length: 4 
}
console.log("25.", Array.prototype.lastIndexOf.call(arrayLike, 2, 4));