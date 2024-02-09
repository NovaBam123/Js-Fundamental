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
console.log("05.", numbers2);

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
    return b-a
}
num.sort(compareFn2);
console.log("08.", num)

