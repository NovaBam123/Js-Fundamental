/*
    PENGULANGAN YG BEROPERASI PADA OBJEK YG DPT DI ITERASI, SEPERTI: ARRAY, STRING, MAP, NODELIST(KOLEKSI DOM), SERTA OBJEK ARGUMEN MELALUI GENERATOR FUNGSI YG KITA BUAT.
    SYNTAX:
    - for(variable of itarable) {
        statement
    
*/
//  PADA STRING
let str = "Hello";
for(let char of str){
    console.log("01.", char)
};

//  PADA ARRAY(List)
const arr = ["a", "b", "c"];
for(const el of arr){
    console.log("02.", el);
}

//  PADA MAP
let map = new Map();
map.set("a", 1);
map.set("b", 2);
for(let [key, val] of map){
    console.log("03.", key,":", val);
}

//  PADA SET
const ulang = new Set([1, 1, 2, 3, 3]);
for(const value of ulang){
    console.log("04.", value)
}

// PADA ARGUMENT OBJECT
function foo() {
    for(const value of arguments) {
        console.log("05.", value)
    }
} 
foo(1, 2, 3)

function* generVal() { //tanda (*)fungsi generator dg kt kunci'yield' 
    yield 1;
    yield 2;
    yield 3;
};
let gen = generVal();
for (let el of gen){
    console.log("06.", el);
}

/*  PADA NODELIST(DOM COLLECTION)
    KODE INI DI EKSEKUSI DI CONSOLE WEB
let ul = document.createElement("ul");
ul.id = "myList";
let li1 = document.createElement("li");
li1.textContent= "Item 1"; 
ul.appendChild(li1)
let li2 = document.createElement("li");
li2.textContent= "Item 2"; 
ul.appendChild(li2)
let li3 = document.createElement("li");
li3.textContent= "item Nova"
ul.appendChild(li3);
document.body.appendChild(ul);

let listItems = document.querySelectorAll("#myList li");
for(let el of listItems){
    console.log("07." , el.textContent);
} 
*/

/*  ITERATOR MENGGUNAKAN @@ITERATOR (SYMBOL.ITERATOR)
    metode next() metode yang digunakan utk memajukan iterasi pada objek iterator, mengembalikan 2 properti: 
    1. "value" -> nilai dari langkah iterasi saat ini
    2. "done" => boolean yg menunjukan iterasi telah selesai/belum
    selain itu digunakan pula dalam generator function yg memungkinkan kita untuk melakukan iterasi melalui nilai2 yg dihasilkan secara bertahap.
*/
const iterable = { 
    [Symbol.iterator]() {
        let i = 1;
        return {
            next() { 
                if (i<= 3) {
                    return{ value: i++, done: false };
                }
                return{ value: undefined, done: true };
            }
        }
    }
}
for (const val of iterable){ 
    console.log("07.", val);
}

/*  METODE NEXT() DALAM FUNCTION GENERATOR 
    fungsi generator adalah jenis fungsi khusus dalam js, yang dapat menghasilkan nilai secara berurut, yang selanjutnya kita sebut sebagai objek generator, hal tersebut dilakukan kata kunci yield dan memberhentikan eksekusi dengan kata kunci "return".
    fungsi ini menghasilkan nilai secara lazy pada waktu tertentu, sehingga dapat memory dan meningkatkan kinerja.
    PERBEDAAN SYMBOL ITERATOR DAN FUNCTION GENERATOR: 
    - Symbol.iterator 
    1. adalah properti khusus dalam js yang digunakan untuk mendefinisikan iterator untuk objek tersebut. 
    2. iterator adalah objek yang dapat menghasilkan nilai urutan dari objek yang diulan(iterable.) dengan mendefinisikan property `Symbol.iterator` pada objek, kita memberikan instruksi kapada js bagaimana cara mengulang nilai2 objek tsb.
    3. Property Symbol.Iterator harus mengembalikan sebuah fungsi yang mengembalikan objek iterator yang memenuhi protokol iterator yaitu metode next()
    4. Contoh penggunaan-nya adalah untuk membuat objek yang dapat diulang dengan menggunakn loop for...of
    - Function Generator 
    1. Function generator adalah fungsi khusus dalam Js yang digunakan untuk membuat objek generator.
    2. Objek generator adalah objek yang menghasilkan nilai secara berurut melalui serangkaian Yield.
    3. Menggunakan kata kunci "function*" dan menghasilkan objek yang dapat dipanggil untuk menghasilkan objek2 tersebut.
    4. Contoh penggunaan function generator adalah untuk membuat urutan nilai yang kompleks dan untuk mengontrol aliran eksekusi yang rumit.
    5. selain penggunaan Yield, terdapat metode return() untuk mengembalikan nilai tertentu dan menghentikan eksekusi serta try and catch untuk menangkap error. "Hal ini memberikan tingkat kontrol yang lebih dalam eksekusi dibanding dengan Symbol.iterator."
*/
function* generateNumbers(){ 
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateNumbers();
console.log("09.", generator.next());
console.log("10.", generator.next());
console.log("11.", generator.next());
console.log("12.", generator.next());

const iterabled = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3; 
    }
}
for(const value of iterabled){
    console.log("13.", value);
}

//  RETURN DALAM GENERATOR
function* myGenerator(){
    yield 1;
    yield 2;
}
const result = myGenerator();
console.log("13.1.", result.next());
console.log("13.2.", result.return("Hai"));

//  TRY AND CATCH DLM FUNCTION GENERATOR
function* generatorFunc(){
    try{
        yield 1;
        yield 2;
    } catch(e) {
        console.log("13.3.", "Error caught:", e);
    }
}
const generator2 = generatorFunc()
console.log("13.4.", generator2.next());
console.log("13.5.", generator2.throw("Gua error"));

//  MENCARI NILAI FIBBONACI PADA FUNCTION GENERATOR
    function* fibonacciGen(){
        let prev = 0;
        let curr = 1;
        while(true){
            yield curr;
            [prev, curr]= [curr, prev+ curr]
        }
    }
    const fibonacci = fibonacciGen();
    console.log("13.6.", fibonacci.next().value);
    console.log("13.7.", fibonacci.next().value);
    console.log("13.8.", fibonacci.next().value);
    console.log("13.9.", fibonacci.next().value);
    console.log("13.10.", fibonacci.next().value);

// UNTUK MENAMPUNG DERET FIBONACCI DALAM SATU BARIS ARRAY
function wrapperFibonacci(n){
    function* fibonacciGen(){
        let prev = 0;
        let curr = 1;
        while(true){
            yield curr
            const next = prev + curr;
            prev = curr
            curr = next
        }
    }    
    const resultFibo = [];
    const generator = fibonacciGen();
    for(let i=0; i<n; i++){
        resultFibo.push(generator.next().value)    
    }
    return resultFibo
}
const fibonacciSequence = wrapperFibonacci(5);
console.log("13.11.", fibonacciSequence);

/*  EARLY EXITING 
    ketika pernyataan break dieksekusi dalam sebuah loop itu akan menghentikan loop, namun iterator yang terkait dengan loop tdk serta merta hilang, jika ada iterasi yang belum selesai, maka akan dilanjutkan dari titik dimana loop tersebut keluar.
    hal ini berlaku untuk semua loop dalam js.
*/
const source = [1, 2 ,3];
const iterator = source[Symbol.iterator]();
for(const el of iterator){ 
    console.log("14.", el);
    if(el === 1){ 
        if(el === 1){
            break
        }
    }
    console.log("15.", "This will not display");
}
for(const el of iterator){ 
    console.log("16.", el); 
}
for(const el of iterator){ 
    console.log("17.", el);
}//tidak ada output karena proses loop telah berakhir.

let arr2 = [1, 2, 3, 4, 5];
for(let num of arr2){
    console.log("18.", num)
    if (num === 3){
        break;
    }
}
for(let num of arr2){
    console.log("19.", num);
}//loop akan dimulai dari 4

/*  PERBEDAAN LOOP FOR..OF DAN FOR..IN*
    perbedaan utama pada apa yang di-iterasi.
    FOR...OF :
    -mengulang nilai yang ada pd sebuah object.
    -ketika digunakan pd array, ia akan mengulang nilai-nya tanpa memperhatikan properti enumerable arrey tsb(NILAI INDEKS ARRAY TSB.)
    -tidak bisa digunakan langsung pada objek biasa(non iterable object)
    FOR...IN: 
    -mengulang properti enumerable(NILAI INDEKS) pada sebuah object, array dll.
    -akan mengulang properti objek termasuk yang diwariskan dari prototipe.
*/

//OBJEK BIASA HARUS DIUBAH ATAU DENGAN MENAMBAHKAN @@ITERATOR DIDALAMNYA
let obj = {a: 1, b: 2, c: 3, [Symbol.iterator](){
    let keys = Object.keys(this);
    let idx = 0
    return { next: ()=> { 
        if(idx< keys.length){
            return{ value: this[ keys[idx++]], done: false}
        } else { 
            return { done: true};
        }
    }}
}}
for(let value of obj){
    console.log("20.", value);
}

/*  
    - Penambahan metode custom umumnya berfungsi u/ menambahkan fungsionalitas khusus pada object atau array yang tidak disediakan secara default oleh javascript.
    - Selain menambahkan metode kustom Object.prototype dan Array.prototype digunakan juga untuk mengubah atau menimpa metode bawaan seperti "toString()", valueOf().
    -namun akan memiliki dampak secara global dan konflik pada kode lainnya.
    -lebih baik menggunakan pola kode seperti "mixin" atau utility function 
    const myMixin = {
        objCustom: function() {
            //logika metode custom-nya
        }
    }
*/
 
// Object.prototype.objCustom = function() {}; //->cth custom 
// Array.prototype.arrCustom = function() {};
const iterable2 = [3, 5, 7];
iterable2.foo = "hello"; //-> kode ini membuat array menjadi objek Array-like

for(const i in iterable2){
    console.log("21.", i); // 0, 1, 2, foo
}
for(const i in iterable2){
    if(Object.hasOwn(iterable2, i)){ 
        console.log("22.", i); //0, 1, 2, foo
    }
}    
for(const i of iterable2){
    console.log("23.", i);
}









