/*2 sifat NaN:
1. jika melibatkan operator matematik(+, -, etc) hasil akan NaN
2. jika melibatkan operasi perbandingan(<, >, <= )..hasil selalu false
3. jika melibatkan operasi perbandingan tidak sama(===, !==, etc)
   NaN tidak sama dengan NaN lain*/ 
console.log("01.", 5 + NaN);
console.log("02.", 5 >= NaN);
console.log("03.", NaN >= NaN);
console.log("04.", NaN === NaN);
console.log("05.", NaN != NaN);

function sanitise(x) {
  if(isNaN(x)){
    return NaN;
  }
  return x;
}
console.log(sanitise("1"));
console.log(sanitise("hello"));
console.log(sanitise(NaN));

/* Perbedaan isNaN dan Number.isNaN: (tergantung pada argumen yga ada):
1. isNaN Mengecek apakah nilai tersebut bukan angka atau dapat diubah menjadi angka
2. Jika argumen bukan angka atau dapat diubah menjadi angka, maka isNaN mengembalikan true
3. isNaN MENCOBA MELAKUKAN KONVERSI DARI ARGUMEN BUKAN ANGKA KE ANGKA
4. Number.isNaN tidak melakukan konversi data (lebih akurat utk cek jenis data)
5. Selalu menghasilkan nilai false
*/
console.log("06.", isNaN("abc")); //true abc tidak dapat diubah angka jadi akan selamanya Nan
console.log(isNaN("07.", "123"));//false karena "123" dapat diubah jadi angka
console.log("08.", Number.isNaN("123"));//false karena "abc bukan NaN"
console.log("09.", Number.isNaN("123"));//false karena "123" tidak dikonversi dan bukan NaN
console.log("10.", Number.isNaN(NaN));//false karena "123" tidak dikonversi dan bukan NaN

const arr = [2, 4, NaN, 12];
console.log("11", arr.indexOf(NaN));
console.log("12.", arr.includes(NaN)); //tidak ditemukan karena NaN === NaN false (sifat unik NaN)
console.log("13.", arr.findIndex((n) => Number.isNaN(n))); 

/*Pernyataan tersebut merujuk pada sifat khusus nilai NaN (Not-a-Number) dalam operasi matematika di JavaScript. Mari kita bahas lebih detail:

Propagates through mathematical operations:
Nilai NaN cenderung "menyebar" (propagate) melalui operasi matematika. Artinya, jika operasi matematika melibatkan setidaknya satu operand yang memiliki nilai NaN, hasil operasi tersebut juga akan menjadi NaN. Contoh:

const result = 5 + NaN; // NaN
Dalam contoh di atas, hasilnya adalah NaN karena operasi penambahan melibatkan nilai NaN.

Sufficient to test for NaN once at the end of calculation:
Karena sifat NaN yang menyebar, seringkali cukup untuk menguji apakah hasil operasi matematika adalah NaN sekali saja di akhir perhitungan untuk mendeteksi kondisi kesalahan. Dengan kata lain, jika hasil akhir dari serangkaian operasi matematika adalah NaN, itu menunjukkan bahwa setidaknya satu operasi dalam perhitungan tersebut menghasilkan NaN. Contoh:


const result = (5 * 2) / 0; // NaN
if (isNaN(result)) {
  console.log("Error: Calculation resulted in NaN");
}
Dalam contoh ini, kita menguji hasil perhitungan di akhir untuk mengetahui apakah itu NaN.

Exponentiation with an exponent of 0:
Satu-satunya kasus di mana NaN "keluar" (escaped) tanpa mempengaruhi hasil operasi secara langsung adalah saat menggunakan eksponensiasi (**) dengan eksponen 0. Dalam kasus ini, hasilnya akan selalu 1, terlepas dari nilai basisnya. Contoh:

javascript
Copy code
const result = 0 ** 0; // 1
Dalam contoh ini, meskipun basisnya adalah 0 dan dapat menyebabkan NaN dalam konteks operasi lain, hasilnya tetap 1.

Jadi, pengujian untuk NaN dapat dilakukan secara efektif di akhir perhitungan untuk mendeteksi kondisi kesalahan terkait dengan operasi matematika yang melibatkan NaN.*/

console.log(5+NaN);
console.log(1**0 === 1);
console.log(3**3)



