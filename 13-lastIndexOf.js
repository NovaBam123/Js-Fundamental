//perhitungan parameter kedua harus lebih besar dari nilai indexnya misal index n ada di ke-2 maka parameter kedua harus >= 2 agar hasil tidak -1
//pencarian case-senstitif antara huruf capital dangan tidak
//jika parameter kedua negatif(-) maka dianggap index ke-0

console.log("canal")
console.log("01.", "canal".lastIndexOf("c", 0));//0
console.log("02.", "canal".lastIndexOf("a")); //3
console.log("03.", "canal".lastIndexOf("l")); //4
console.log("04.", "canal".lastIndexOf("a", 5));//3 
console.log("05.", "canal".lastIndexOf("a", 0));//-1 
console.log("06.", "canal".lastIndexOf("n", 3)); //2
console.log("07.", "canal".lastIndexOf("a", -2));//-1 

let text = "Hello planet earth, you are great planet."
let result = text.lastIndexOf("planet", 6); //6 kebawah hasil akan -1
let result2 = text.lastIndexOf("planet", 35); 
let result3 = text.lastIndexOf("planet", -5); 
let result4 = text.lastIndexOf("planet"); 
let result5 = text.lastIndexOf("earth"); 
let result6 = text.lastIndexOf("earth", 144);//13 kebawah  hasil akan -1
console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result6)