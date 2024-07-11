/*
    Salah satu bentuk data dalam Javascript dan dapat diubah ukuran-nya.
    1). - Dapat ditambahkan/menghapus elemen dari array. array dapat berisi data berupa angka, string, object atau bahkan array lain.
    -Jika karakteristik ini tidak diinginkan, dapat digunakan typed arrays yg memiliki ukuran tetap dan hanya menyimpan data tertentu.
    Typed Array ini adalah jenis data yang bekerja dengan data biner mentah.
    memiliki ukuran tetap dan hanya menyimpan jenis data tertentu seperti integer atau float 
    Berbeda dengan data array biasa yang bisa berubah ukuran-nya dan dapat menyimpan berbagai jenis data.
    2). Array di javascript bukan array asosiatif: 
    - Artinya, element2 dlam array tidak dapat diakses menggunakan sembarang string sebagai indeks. indeks harus bilangan bulat non-negatif(atau string dari bilangan tersebut).
    - Contoh "array[0]" untuk mengakses element pertama, dan tidak dapat mengunakan array[name] seperti pada object.
    3) Dimulai dari indeks ke-0
    - element terakhir dari array dapat diakses menggunakan nilai properti length - 1. misal jika array.length adalah 5 maka diakses dengan array.length - 1 , sehingga array[4];
    4. operasi penyalinan array merupakan salinan dangkal(shallow copy).
    -jika kita menyalin array, maka hanya salinan referensi dari array tersebut yang disalin bukan array itu sendiri.
    -hal ini berlaku untuk semua operasi penyalinan built in standard pada object js, bukan hanya array. Salinan dangkal berarti perubahan pada object yang disalin dapat mempengaruhi objek asli jika objek tersebut adalah referensi.

    OBJECT TRAVERSAL DAN MUTASI PADA ARRAY: 
    Operasi traversal dan mutasi pada array seperti forEach, map, filter, hanya bekerja pada element array, bukan pada properti object yang ditambahkan.
*/

let typedArray= new Uint8Array(5);
typedArray[0] = 10;
typedArray[1] = 20;
typedArray[2] = 30;
typedArray[3] = 40;
typedArray[4] = 50;
console.log("01.", typedArray);

let array= [1, 2, 3];
array["name"]= "value"; // membuat properti object
console.log("02.", array["name"]);
console.log("03.", array.name)

// menambahkan array pada indeks ke 3
array[3] = 4; // 3 adalah indeks array, dan 4 adalah nilai yang ditambahkan.
console.log("04.", array)
console.log("05.", array.length);

let myAge= {age: 25}
array[4] = myAge
console.log("06.", array);
console.log("07.", array.length)

array.forEach(el=> console.log("08.", el));

let data= [
    { id: 1}, {nama: "Andi"}, {age: 25},
    { id: 2}, {name: "Budi"}, {age: 27}
];

let newData=  {id: 1, nama: "Andrew"}
let noteId= 1;
data[noteId]= newData;
console.log(data)
