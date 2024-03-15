/*
    MERUPAKAN METODE YANG MEMBUAT SHALLOW COPY DARI SEBUAH ARRAY MELALUI ITERASI ATAUPUN OBJEK ARRAY-LIKE.
    - jika array atau objek arrayLike tidak dapat di iterasi: 
    gunakan Object.keys(), Object.values, Object.entries untuk mendapatkan daftar kunci untuk kemudian dapat di iterasi.
    - ArrayfromAsync() untuk mengkonversi async iterable.
    SYNTAX:
    - Array.from(arrayLike)
    - Array.from(arrayLike, mapfn)
    - Array.form(arrayLike, mapfn, thisArg)
    parameter dalam metode ini: 
    -Elemen, index, array
    catatan perbedaan tipe array biasa dan typed array: 
    1.  TIPE DATA 
        -typed array: Memiliki tipe data yang telah ditentukan: Int8Array, Uint8Array dll.
        -Array regular: tipe data ya disimpan dapat berbagai macam.
    2.  Memori, operasi dan kecepatan 
        - typed array lbh efisien dalam penyimpanan
        - melakukan operasi khusus       
        - typed array memproses data dengan lebih cepat
    umumnya typed array digunakan dlm data biner, pengolahan gambar, suara atau video.     
*/   

//ARRAY FROM STRING
console.log("01.", Array.from("foo"));
console.log("02.", Array.from([1, 2, 3], (el)=> el+el));

//ARRAY FROM MAP
const map = new Map([ 
    [1, 2], [2, 4], [4, 8]
])
console.log("03.", Array.from(map));

const mapper= new Map([
    ["1", "a"], ["2", "b"]
]);
console.log("04.", Array.from(mapper.values()));
console.log("05.", Array.from(mapper.keys()));

/*  ARRAY FROM NODELIST
    Nodelist dari querySelector dari node adalah object mirip Array yg dikonversi menjadi array dg array.from()
    jenis data yang diwakili dalam document DOM: 
    -umumnya data dari HTML: div, p, a , text, dan attribut lainnya
    const img = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSrc = sources.filter((link) => link.startsWith("http://"));
*/

//Array dari Array objectLike(argument)
function f(){ return Array.from(arguments)}
console.log("06.", f(1, 2, 4));

/*  MENGGUNAKAN FUNGI PANAH
    kode ini juga merupakan penjelasan bahwa fungsi dalam array.from hanya mempunyai 2 paramater tanpa array itu sendiri, sedangkan pada map(), forEach() dan map() terdiri dari 3 parameter. 
*/
console.log("07.", Array.from({ length: 6 }, (v, i) => i));

//SEQUENCE GENERATOR
function range(start, stop, step){ 
    return Array.from({ length: (stop - start)/step + 1 }, 
    (_, i)=> start + i * step);
}
console.log("08.", range(0, 4, 1));

//CALLING FROM () ON NON ARRAY CONSTRUCTOR
function NotArray(len){
    console.log("NotArray with length:", len);
}
console.log("09.", Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
console.log("10.", Array.call(NotArray, { length: 1, 0: "foo"}));

//JIKA MENGGUNAKAN KONSTRUTOR
function MyArray(len){
    this.len =  len
}
console.log("11.", Array.call(MyArray, { length: 1, 0: "foo"}));
/*  - perbedaan kedua kode diatas adalah objek baru yang merupakan    ArrayLike objek yang diikat dg property this pada konstruktor-nya dapat menggunakan metode2 pada array, seperti map, filter, etc sedangkan yg bertujuan hanya untuk memanggil tidak.  
    -Array.from.call membuat array baru dari objek iterable 
    -Array.call memanggil fungsi konstrukto yang memakai konsep this utk mengikat propertinya.
*/
const newArray = Array.from({length : 3}, (_, i) => i*2);
console.log("12.", newArray)

const obj = {length: 3};
const newArray2 = Array.from(obj);
console.log("13.", newArray2);