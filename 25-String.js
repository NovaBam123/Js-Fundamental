/*Sebenarnya, ada perbedaan antara toString() dan String() dalam JavaScript, meskipun keduanya dapat digunakan untuk mengonversi nilai menjadi string.
Metode toString():

toString() adalah metode bawaan yang dimiliki oleh setiap objek di JavaScript, termasuk tipe data primitif seperti number.

Saat dipanggil pada nilai primitif, metode ini menghasilkan representasi string dari nilai tersebut.

Contoh:

javascript
Copy code
const number = 123;
const stringRepresentation = number.toString();
console.log(stringRepresentation); // "123"
Meskipun sebagian besar objek dan nilai primitif memiliki metode toString(), tetapi dalam beberapa kasus tertentu, objek mungkin menggantinya dengan implementasi khusus.

Fungsi String():

String() adalah fungsi konstruktor yang dapat dijalankan untuk membuat objek string baru atau mengonversi nilai menjadi string.

Jika dipanggil dengan nilai primitif sebagai argumen, fungsi ini menghasilkan representasi string dari nilai tersebut.

Contoh:

javascript
Copy code
const number = 123;
const stringRepresentation = String(number);
console.log(stringRepresentation); // "123"
String() dapat digunakan sebagai fungsi konversi untuk mengubah berbagai jenis nilai menjadi string.

Dalam prakteknya, baik toString() maupun String() dapat digunakan untuk mengonversi number menjadi string. Namun, perlu diingat bahwa toString() hanya dapat dipanggil pada objek atau nilai yang memilikinya, sementara String() dapat digunakan pada nilai primitif tanpa masalah. Pilihan antara keduanya tergantung pada preferensi dan kebutuhan konteks pengkodean Anda.*/
let a = ""
if (a) {
  console.log("Truthy..!")
}else {
  console.log("Falsy..!")
}

