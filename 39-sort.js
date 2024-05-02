/*
    -u/  mengurutkan array baik ascending atau descending
    - default-nya adalah ascending/naik
    - slot kosong akan dipindahkan ke akhir array baik descending maupun ascending.
    - metode (a, b) => a- b berlaku untuk jenis data numeric dan tidak berlaku untuk string karena jenis data akan dikonversi menjadi numerik
    Sifat perbandingan yang harus diperhatikan : 
    1. Murni : 
        pembanding dlm metode sort tidak merubah object, ini memastikan tidak ada efek yang merubah nilai pada objek.
    2. Stabil : 
        perbandingan akan mengembalikan hasil yang sama setiap fungsi dipanggil.
    3. Reflexive
          perbandingan compareFn(a, a) harus selalu sama dg 0 
    4. AntiSimetrik 
        jika compareFn(a, b) dan compareFn(b, a) keduanya harus memberikan hasil berlawanan.
    5.  Transitive
        apakah keduanya 1, 1 , atau 0 memiliki peluang yang sama utk memastikan hasil konsisten dan dapat diprediksi.   
    syntax: 
    - sort()
    - sort(compareFn);
*/

//agar lebih akurat dalam mengurutkan gunakan callback function utk sort
const nums = [2, , 3, 5, 1, 4];
let res = (nums.sort((a, b) => b-a));
console.log("01.", res)

const num2 = [1, 30, 21, , 1000];
let res2 = num2.sort((a, b) => b-a)
console.log("02.", res2);

const numbers = [4, 2, 5, 1, 3];
const numbers2 = [4, 2, 5, 1, 3];
function compareFn(a, b){
    if(a < b){
        return -1; //a diurut sebelum b
    } else if(a > b){
        return 1; // a diurutkan setelah b
    }
    return 0
}
numbers.sort(compareFn);
console.log("03. dg compareFn", numbers);

// u/ jenis data numbers lebih cepat dg sort callback function
numbers.sort((a, b) => a-b);
numbers2.sort((a, b) => b-a)
console.log("04. dg callback", numbers);
console.log("05. callback:", numbers2);

//ternary operators
let natoPhonetic= ["sierra", "charlie", "zulu", "golf", "romeo"]; 
function bandingFn(a, b){
    return a<b ? -1 : a>b ? 1 : 0;  
}
natoPhonetic.sort(bandingFn);
console.log("06.", natoPhonetic);

let res3 = natoPhonetic.sort((a, b) => a<b ? 1 : a>b ? -1 : 0);
console.log("07.", res3)

let num = [3, 1, 5, ,2, 4] //saat menggunakan sparse element/jarang kode tidak berjalan dg baik, utk itu kode tsb diperlukan metode filter untuk membersihkan sparse. 
num = num.filter(value=> value !== undefined);

function compareFn2(a, b){
    return a-b;
}
num.sort(compareFn2);
console.log("08.", num)

const strArray = ["Blue", "Humpback", "Beluga"];
const numArray = [40, 1, 5, 200];
const numericStrArr = ["89", "9", "700"];
const mixNumericArr = ["80", "9", "700", 40, 1, 5, 200]

console.log("09.", strArray.join());
console.log("10.", strArray.sort());
console.log("11.", numArray.join());
console.log("12.", numArray.sort());
console.log("13.", numArray.sort(compareFn2));
console.log("14.", numArray.sort(compareFn2));
console.log("15.", numericStrArr.join());
console.log("16.", numericStrArr.sort());
console.log("17.", numericStrArr.sort(compareFn2));
console.log("18.", mixNumericArr.join());
console.log("19.", mixNumericArr.sort());
console.log("20.", mixNumericArr.sort(compareFn2));

/*  SORTING ARRAY OBJEK 
    array object dapat menggunakan sort selama properti value-nya adlh number.
*/
const item = [
    { name: "Edward", value: 21},
    { name: "sharpe", value : 37},
    { name: "And", value: 45},
    { name: "The", value: "-12"},
    { name: "Magnetic", value: 13},
    { name: "Zeroes", value: 37},
];
item.sort((a, b) => a.value - b.value); 
let result = item.sort(compareFn);
console.log("21.", result);

/*  SORTING non-ASCII CHARACTER
    untuk karakter khusus(e, é, è, a, ä, etc.) gunakan string.prototype.localeCompare()..fungsi ini dapat membandingkan karakter tsb dalam urutan yg diinginkan.  
*/
const nonAscii = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
console.log("22.", nonAscii.sort((a, b) => a.localeCompare(b)));

/*  SORTING WITH MAP
    -   sorting dg menggunakan compareFn dapat menyebabkan beban kerja memory dan proccesor berat terutama saat melibatkan banyak elemen.
    -  Untuk mengatasi masalah ini, pendekatan yang lebih efisien adalah dengan menggunakan metode map() untuk pengurutan. Ide dasarnya adalah:
    01. Melintasi array sekali untuk mengekstrak nilai-nilai aktual yang digunakan untuk pengurutan ke dalam sebuah array sementara.
    02. Mengurutkan array sementara tersebut.
    03. Melintasi array sementara untuk mencapai urutan yang benar. 
*/
let data = ["sierra", "charlie", "zulu", "golf", "romeo"];
const mapped = data.map((v, i) => {
    return { i, value:v};
});
mapped.sort((a, b) => {
    return a.value < b.value ? -1 : a.value > b.value ? 1 : 0
})
const hasil = mapped.map((v) => data[v.i]);
console.log("23.", hasil);

/*  SORT MENGEMBALIKAN REFERENSI PADA ARRAY YANG SAMA
    -metode sort  yang mengembalikan ke referensi array orisinal, sehingga mutating/melakukan perubahan pada hasil juga akan merubah array asli.    
    -jika tidak ingin merubah referensi asli gunakan operator spread atau metode map, 
    untuk mengkopi dangkal/shallow copy array asli
*/
const nums2 =[3, 1, 4, 1, 5];
const sorted = nums2.sort((a, b) => a-b);
sorted[0] = 10;
console.log("24.", sorted);
console.log("25.", nums2);

const nums3 = [3, 1, 4, 1, 5];
const sorted2 = [...nums3].sort((a, b) => a-b);
sorted2[0] = 10;  
console.log("26.", sorted2);
console.log("27.", nums3);

/*  SORTED STABILITY 
    -berikut contoh selain grade yang diurutkan nama siswa juga diurutkan aswell , meskipun
    huruf kapital, masing2 berbeda.
*/
const students = [
    { name: "Alex", grade : 15},
    { name : "Devlin", grade : 15 },
    { name: "eagle", grade: 13 },
    { name: "sam", grade: 14 },
]
const result2 = students.sort((a, b) => a.grade - b.grade);
console.log("28.", result2);

/* SORTING WITH non-WELL-formed comparator
    jika fungsi pembanding tidak memenuhi sifat pembanding yg baik: 
    murni, stabil, asimetrik etc, maka fungsi tidak terdefinisi dg baik.
    fungsi akan lebih cenderung tidak konsisten.
*/
const arr = [3, 1, 4, 1, 5, 9];
const compareFn3 = (a, b) => a>b ? 1: 0;
const compareFn4 = (a, b) => a>b ? -1: 0;
console.log("29.", arr.sort(compareFn3));
console.log("30.", arr.sort(compareFn4));

/*  USING SORT ON SPARSE ARRAYS
    sparse/empty slot akan dipindah keakhir array 
*/
console.log("31", ["a", "c", ,"b"].sort());
console.log("32", [, undefined, "a", "b"].sort());

//  CALLING SORT ON NON-ARRAY OBJECT
const arrayLike = {
    unrelated: "foo",
    O: 5,
    2: 4,
    length: 3
}
console.log("33.", Array.prototype.sort.call(arrayLike));
