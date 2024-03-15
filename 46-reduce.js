/* 
    metode instance array yang mengeksekusi fungsi callback yang diberikan pd setiap elamen secara berurutan, hasil akhirnya berupa satu nilai tunggal.
    Syntax: 
    - reduce(callbackFn)
    - reduce(callbackFn, initialValue)
    Sifat metode reduce: 
    - callbackFn sebuah fungsi yg dieksekusi pd setiap element array. Nilai hasil dari fungsi ini akan menjadi nilai parameter "accumulator" pada pemanggilan callbackFn berikutnya dan pemanggilan terakhir akan menjadi nilai hasil dari metode ini.
    -   Fungsi ini memiliki 4 argument: 
    1. accumalator: Nilai yang dihasilkan dari pemanggilan sebelumnya..dan hasil adalah nilai dari pemanggilan terakhir dari fungsi ini.
    2. currentValue: Nilai element saat ini. pada pemanggilan pertama, nilainya adalah array[0] jika initial value tidak dijelaskan nilai-nya adalah array[1].
    3. currentIndex: posisi indeks dari currentValue dalam array.
    4. array: parameter thd array dimana metode reduce diberlakukan.
    -   InitialValue: Sebuah nilai yg digunakan untuk menginisiasi "accumulator" pertama kali fungsi callbackFn dipanggil. 
*/

const array1 = [1, 2, 3, 4];
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
console.log("01.", sum);

const result = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 sebagai nilai awal dari akumulator jika tidak disertakan maka el pertama array akan menjadi nilai awal "accumulator". 
console.log("02.", result);

const getMax = (a, b) => Math.max(a, b);
//getMax dipanggil ulang untuk setiap element array.
console.log("03.", [1, 100].reduce(getMax, 50));

//getMax tidak dipanggil dalam callback funct karena array hanya terdiri dari 1 element.
console.log("04.", [50].reduce(getMax, 10));

//parameter initialValue tidak ada mk reduce dimulai dr index ke-0
console.log("05.", [1, 100].reduce(getMax));

//nilai tunggal dan tanpa ada initial value 
console.log("06.", [50].reduce(getMax));

//intial value akan menjadi hasil dari fungsi ini
console.log("07.", [].reduce(getMax, 10));

//type error reduce array tanpa initial value akan tampil dlm konsole 
// console.log("08.", [].reduce(getMax));


//CARA KERJA REDUCE TANPA ADA PARAMETER INITIAL VALUE
const array = [15, 16, 17, 18, 19];
function reducer(accumulator, currentValue, index){
    const result = accumulator + currentValue;
    console.log("08.", `Akumulator : ${accumulator}, Nilai saat ini : ${currentValue}, index : ${index}, Hasil : ${result}`
    );
    return result;
}
array.reduce(reducer);

//CARA KERJA REDUCE DG MENGGUNAKAN INITIAL VALUE
function reducer2(accumulator, currentValue, index){
    const result = accumulator + currentValue;
    console.log("09.", `Akumulator : ${accumulator}, Nilai saat ini : ${currentValue}, index : ${index}, Hasil : ${result}`
    );
    return result;
}
array.reduce(reducer2, 10);

//PENJUMLAHAN DLM OBJEK ARRAY, DIMANA INITIAL VALUE WAJIB DISERTAKAN
const objects = [{ x: 1 }, { x: 2}, { x : 3}];
const jumlah = objects.reduce((accumulator, currentValue) => 
accumulator + currentValue.x, 0);
console.log("10.", jumlah);

/*
    FUNGSI PIPA BERURUT :
    -   mengambil urutan fungsi dan mengembalikan fungsi baru.
    -   ketika fungsi dipanggil dalam sebuah argumen ( dalam metode) urutan fungsi akan dipanggil secara berurutan dengan setiap fungsi akan menerima nilai hasil dari fungsi sebelumnya atau "hasil dari setiap fungsi dalam pipa akan digunakan sebagai argumen untuk fungsi berikutnya dalam urutan tsb."
    -   pemrograman fungsional ini bertjuan untuk menggabungkan serangkaian operasi yg dilakukan secara berurutan. 
    -   kode akan mudah terbaca dan lebih bersih dg memisahkan setiap langkah perubahan ke dalam fungsi terpisah. 
*/
const pipe = 
    (...functions) => 
    (initialValue) => functions.reduce((acc, fn) => fn(acc), initialValue);
const double = (x) => 2* x;
const triple = (x) => 3* x;
const quadruple = (x) => 4* x;
const multiply1 = pipe(double, triple);
const multiply2 = pipe(triple, triple);
const multiply3 = pipe(quadruple, quadruple);
const multiply4 = pipe(double, triple, quadruple);
console.log("11.", multiply1(6));//12*3 = 36
console.log("12.", multiply2(9));//27*3 = 81
console.log("13.", multiply3(16));//16*4 = 256
console.log("14.", multiply4(10));//20, 20*3= 60, 60*4 = 240

/*  
    -   rest parameter merupakan fungsi yang mengumpulkan semua argumen menjadi sebuah array. (...args) pada kode dibawah ini akan menjadi array dari semua fungsi yang dilewatkan ke pipe2.
    -   rest parameter akan dapat menangani berapapun jumlah fungsi yg dilewatkan didalam-nya karena ia akan mengumpulkan-nya menjadi sebuah array:
    -   function pipe2(...fungsi){ 
            return function(input){
                return fungsi.reduce((acc, val) => val(acc), input)
    const myPipe = pipe2(double2, addFive, square, double2, addFive, square); 
*/
function foo(...args){ //=> rest parameter
    console.log("15.", args)
}
foo(1, 2, 3);

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log("16.", arr2);

function double2(x) { return x * 2};
function addFive(x) { return x + 5 };
function square(x) { return x * x };
function pipe2(...fungsi){ // rest parameter
    return function(input){
        return fungsi.reduce((acc, val) => val(acc), input)
        /*
            -   acc sebagai akumulator -> nilai hasil dari fungsi sblmn-ya
            -   val adalah fungsi berikutnya dalam urutan 
            -   val(acc) memanggil fungsi val dengan argumen acc sbg nilai hasil dari fungsi sebelumnya.   
        */
    }
}
const myPipe = pipe2(double2, addFive, square);
console.log("17.", myPipe(2));

/*
    MENJALANKAN PROMISES DALAM URUTAN DALAM FUNGSI PIPE 
    -   promise adalah konsep utama dalam program asyncronous dan mengembalikan nilai hasil baik setelah operasi berhasil dan selesai ataupun gagal.
    -   perbedaan async await dan promise hanya terletak pada cara penulisan dan penanganan kode dimana promise mengelola operasi asyncronous secara manual sedangkan async await penulisan kode-nya lebih linear, bersih dan lebih mudah dibaca.
*/
//PROMISE DALAM FUNGSI PIPA
function ganda(x){
    return new Promise((resolve, reject) => {
        resolve(x * 2);
    });
}
function tambahLima(x){
    return new Promise((resolve, reject) => {
        resolve(x + 5)
    });
}
function pangkat2(x){
    return new Promise((resolve, reject) => {
        resolve (x*x);
    });    
}
function pipa(...args){
    return function(input){
        return args.reduce((acc, val)=> {
            return acc.then(result => val(result))
        }, Promise.resolve(input));
    }
}
const pipaProm = pipa(ganda, tambahLima, pangkat2);
pipaProm(2).then(result => {
    console.log("18.", result);
})

/*  ASYC/AWAIT DALAM FUNGSI PIPA
    untuk menangkap hasil dari sebuah promise dan async await :
    -   menggunakan .then 
    -   menggunakan await dalam fungsi berlabel async.
*/
function pipa2(...rest){ 
    return async function(input){
        return rest.reduce(async (acc, fn) => {
             return fn(await acc)
        }, input)
    }
}         
async function kali2(x){ return x*2 };
async function plusLima(x){ return x +5 };
async function pangkatDua(x){ return x*x };
const pipaAsync = pipa2(kali2, plusLima, pangkatDua);
// pipaAsync(2).then(function(result){ 
//     console.log("19.", result);
// })

/*  MENAMPILKAN HASIL DENGAN BLOK TRY AND CATCH : 
    -kode ini: (async() =>{})()
    -adalah expresi fungsi panjang yg segera dipanggil (Immediately Invoked Function Expression atau IIFE) 
    -hal ini jg merupakan fungsi anonim
    -(), diakhiri ekspresi tsb agar setelah fungsi didefinisikan segera dieksekusi.
    -kode ini digunakan dalam kasus utk membuat blok kode async await yg berdiri sendiri tanpa harus memanggilnya secara terpisah.
*/
(async () => {
    try {
        const result = await pipaAsync(3);
        console.log("19.", result); 
    }catch (err){
        console.log(err)
    }
})();

/*  MENGGUNAKAN REDUCE() PADA ARRAY RENGGANG/SPARSE ARRAY
    -   reduce tidak mempedulikan sparse array
    -   namun akan tetap menghitung nilai undefined dan NaN
*/
console.log("20.", [1, 2, , 4].reduce((a, b) => a + b));
console.log("21.", [1, 2, undefined , 4].reduce((a, b) => a + b));

//MENGGUNAKAN REDUCE PADA ARRAYLIKE SEBUAH OBJEK
const arrayLike = {
    length: 3, 
    0: 2,
    1: 3,
    2: 4,
    3: 55,
};
console.log("22.", Array.prototype.reduce.call(arrayLike, (x, y) => (x+y)));

/*  KONDISI2 SAAT REDUCE() SEBAIKNYA TIDAK DIGUNAKAN
    - jk penggunaan-nya membuat kode lebih sulit dibaca
    - pemeliharaan kode jika metode lain lebih memudahkan.  
    - permorfa : jk reduce tidak lebih baik dibandingkan dg metode lain 
    - Dalam meratakan array(flattening array): 
      gunakan metode flat()
    - Mengelompokan object berdasar properti: 
      lebih baik gunakan Object.groupBy()
    - Menggabungkan beberapa array, menghilangkan dan menambah elemen: 
      gunakan flatMap();
      atau filter()
    - Menghapus duplicat array :
      new Set() dan Array.from()
    - Mencari atau menguji elemen yg sesuai kondisi:
      find() atau findIndex() atau some() dan every()    
*/  

//REDUCE DAPAT SELALU DPT DIGANTIKAN OLEH LOOP FOR...
function update(acc, curr){
    return acc+curr;
};

const arr3 = [1, 2, 3, 4, 5];
let total = 0; //sbg initialValue pada reduce
for(const curr of arr3){
    total = update(total, curr)
};
console.log("23.", total); // ini akan sama dengan:
const totByRed = arr3.reduce((acc, curr) => update(curr, acc), 0)
console.log("24.", totByRed);

/* PEMROGRAMAN FUNGSIONAL DALAM HAL MEMPROSES (IMMUTABLE DATA) 
    -upaya untuk menjaga akumulator tetap tidak berubah sehingga menyalin semua acc untuk setiap iterasi sehingga menjadikan kinerja kode buruk -> O(N^2)
    -contoh berikut adalah contoh kode yg "sakit" dlm performa
*/
const names = ["Alice", "Bob", "Tiff", "Bruce", "Bob"];
const hitungName = names.reduce((allNames, name) => {
    const currHit = Object.hasOwn(allNames, name) ? allNames[name] : 0;
    //Object.hasOwn() -> memeriksa sebuah obj memiliki prop tertentu. 
    return {
        ...allNames,
        [name]: currHit + 1,
    };
}, {}); 
/*
    initialValue pd reduce disini sebagai objek kosong sebagai wadah untuk menampung hasil akhir dari fungsi : initialvalue dapat juga berisi:
    [] -> array kosong
    "" -> string kosong
    {} -> objek kosong
    atau fungsi seperti Object.create(null);
    null atau undefined tergantung kebutuhan.
*/
console.log("25.", hitungName);

/*  kode ini jauh lebih baik dari kode diatas dalam hal performa karena:
    -initialValue : Object.create(null) tidak memiliki properti bawaan seperti toString atau hasOwnProperti dibanding object kosong {}.
    -manipulasi lebih cepat karena tidak ada overhead utk memeriksa properti2 ini.   
*/ 
const namaMurid = ["Andi", "Chandra", "Vita", null, "Budi","Vita"];
const hitungNama = namaMurid.reduce((semua, nama) => {
    const lagiHit = Object.hasOwn(semua, nama) ? semua[nama] : 0;
    return {
        ...semua, 
        [nama]:lagiHit + 1
    }
}, Object.create(null));
console.log("26.", hitungNama);

//menggunakan kondisi if statement
const hitungNama2 = namaMurid.reduce((acc, nama) => {
    lagiHit = 0;
    if(Object.hasOwn(acc, nama)){
        lagiHit = acc[nama];
    }
    if(lagiHit === 0){
        return {
            ...acc,
            [nama]: 1
        }
    } else {
        return {
            ...acc,
            [nama]: lagiHit +1
        };
    }
}, Object.create(null));
console.log("27.", hitungNama2);

//menggunakan loop for of...
const hitungLagi = Object.create(null);
for(const nama of namaMurid){
    if(typeof nama !== "string") continue;
    const lagiHit = hitungLagi[nama] ?? 0; 
    hitungLagi[nama]=  lagiHit + 1;
}
console.log("28.", hitungLagi);
/*  Operator ?? -> disebut sebagai operator nullish coalescing   
                -> memberikan nilai default pada variable tsb jika nilai tsb null atau undefined   
    operator || (OR) -> memberikan nilai default jika semua nilai sebelumnya falsy   
    Operator && -> akan memberikan nilai ekspresi kedua jika yg pertama truthy.
    
    const a = "";
    const b = "world";
    const res = a ?? b
    console.log("30.", res); (Output "")


    const a = ""; (falsy)
    const b = "world";
    const res = a || b
    console.log("30.", res); (Output world)

    const c = 'hello';
    const d = 'world';
    const result2 = c && d;
    console.log(result2); (Output: 'world')
*/ 

const hitungLagi2 = Object.create(null);
for(const nama of namaMurid){
    if (typeof nama !== 'string') continue; 
    let lagiHit = hitungLagi2[nama] || 0;
    hitungLagi2[nama] = lagiHit + 1;
}
console.log("29.", hitungLagi2);


