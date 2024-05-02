/*  - Metode pada object string yang digunakan untuk menambahkan karakter tertentu diakhir hingga string mencapai panjang tertentu.
    - Syntax: 
    padEnd(targetLength)
    padEnd(targetLength, padstring)
*/    

const str1 = "breaded mushroom"
console.log("01.", str1.padEnd(19, "..!"))

console.log("02.", "abc".padEnd(10)); //"abc       "
console.log("03.", "abc".padEnd(10, "foo"));//"abcfoofoof"
console.log("04.", "abc".padEnd(6, "123456"));//"abc123"
console.log("05.", "abc".padEnd(1));//"abc"

