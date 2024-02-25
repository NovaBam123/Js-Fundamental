/*
    -   Number parseInt() adalah metode yang mengurai(parsing) string integer berdasar radix.basis tertentu
    -   misal String "123" akan menjadi 123 
    -   beberapa basis: 
        * basis 16-Hexadecimal 
        * basis 8-oktal
        * basis 2-binary   
    -   Jika string tidak dapat diurai akan menghasilkan NaN
    -   Number parseInt() dengan object global window terdapat perbedaan
        dimana Number dapat diakses tanpa perlu merujuk ke objek number
    Syntax: 
    Number.parseInt(string);
    Number.parseInt(string, radix)     
*/

//mengurai string 10 dalam basis 2(binary)
const binaryString = "10";
const parse = Number.parseInt(binaryString, 2);
console.log("01a.", parse);    

console.log("01.", parseInt("123"));
console.log("02.", parseInt("123", 10));
console.log("03.", parseInt("   123")); //spasi diabaikan
console.log("04.", parseInt("0123")); // 0 diabaikan
console.log("04a.",typeof parseInt("0123")); // 0 diabaikan
console.log("05.", parseInt("1.97", 10)); //desimal truncated(dipotong)
console.log("06.", parseInt("0xab"));
console.log("07.", parseInt("xyz"));
console.log("08.", parseInt("123", 30)); 
console.log("09.", parseInt("123", 1)); //2-36 lebih besar atau kecil dari batas radix ini akan menghasilkan NaN

// console.log(parseInt("0xF", 16));
// console.log(parseInt("F", 16));
// console.log(parseInt("17", 8));
// console.log(parseInt("015", 10)); // but `parseInt('015', 8)` will return 13
// console.log(parseInt("15,123", 10));
// console.log(parseInt("FXX123", 16));
// console.log(parseInt("1111", 2));
// console.log(parseInt("15 * 3", 10));
// console.log(parseInt("15e2", 10));                                       
// console.log(parseInt("15px", 10));
// console.log(parseInt("12", 13));
console.log("10.", parseInt("543", 11));   
console.log("11.", parseInt(null, 10)); 
console.log("12.", parseInt(null, 36)); 
console.log("13.", parseInt(undefined, 36)); 