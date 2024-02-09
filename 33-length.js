/*
    -mereperentasikan jumlah element dalam array
    -(negatif) invalid array length
    -2**32 invalid array length
*/

const clothing = ["shoes", "shirts", "socks", "sweaters"];
console.log("01.", clothing.length);

const listB = new Array(5);
console.log("02.", listB.length);
listB.length = 2**5 + 8; // 2x2x2x2x2 = 32
console.log("03.", listB.length);

const arr = [1, 2];
arr.length = 6;
console.log("04.", arr);

const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for(let i = 0; i< length; i++){
    numbers[i] *= 2    //ingat perhitungan index array dimulai dari 0 contoh-nya ini dan kode dibawah sbg berikut
}
console.log("05.", numbers);

const nums = [1, 2, 3, 4, 5];
if(nums.length > 3){
    nums.length = 3
}
console.log("06.", nums);
console.log("07.", nums.length);
console.log("08.", nums[3]);// index length -1

//use strick length dalam sebuah array

const nums2 = [1, 2, 3, 4, 5];
Object.defineProperty(nums2, "length", {writable : false}) //read Only
nums2[5];
nums2.push(6, 7);
console.log("09.", nums2)






