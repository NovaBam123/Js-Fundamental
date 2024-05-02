/*  ArrowFunction
    menyediakan alternative untuk menulis syntax yang lebih singkat dibandingkan dengan function traditional/declarasi.
    perbedaan-nya dengan fungsi regular terletak pada keterbatasan arrowFunction pada beberapa hal: 
    1. Tanpa binding this, Fungsi arrow tidak memeliki konteks this sendiri, sebaliknya mereka mewarisi nilai this dari kode lingkungannya(lexical scope). arrow function tidak sesuai untuk digunakan dalam function construktor atau metode.
    const obj = {
        value: 42,
        getValue: ()=> this.value
    };
    console.log("02.", getValue()); (lihat contoh pada 58-currying.html

    2. Tanpa Binding "Argument". arrowFunction tidak memiliki objek argumennya sendiri. jika kita perlu mengakses argumen yang dilewatkan pada fungsi arrow, kita menggunakan argument dari fungsi regular yang melingkupinya atau dapat menggunakan sintax parameter rest "...args".

    3. Tidak bisa digunakan dalam fungsi konstruktor. 
       const Foo= () => {}
       const foo = new Foo 
       console.log(foo) // Type error Foo is not a construktor    

    4. Tidak ada Yield dan Generator.
       fungsi arrow tidak dapat menggunakan kata kunci "yield" dalam lingkup-nya, sehingga tidak dapat digunakan untuk membuat fungsi generator.

    5. ArrowFunction tidak sesuai digunakan dalam currying karena keterbatasan-nya dalam mengakses argument objek. fungsi yang dicurrying harus menerima argumen secara dinamis.

    note: bagaimana fungsi menangani nilai this. Dalam fungsi reguler, this diikat ke lingkup fungsi di mana ia dipanggil, sedangkan dalam arrow function, this diambil dari lingkup luar (lexical scoping). atau diikat pada lingkup saat mereka didefinisikan bukan saat dipanggil.

    SYNTAX :
    ()=> expression
    param => expression
    (param) => expression
    (param1, paramN) => expression
    ()=> {statements}
    param=> {statement}
    (param1, paramN)=> {statements}
*/

/* 01.  TIDAK DAPAT DIGUNAKAN SEBAGAI METHOD
        - dalam fungsi c yang ditulis dg sytax c(){} merupakan shorthand dari penulisan c: function(){} ini merupakan syntax dari js modern ES6
        -Object.defineProperty adalah sebuah metode dalam js untuk menentukan konfigurasi property dalam sebuah objek. Metode ini digunakan untuk menambah property baru, memodifikasi, dengan mengatur writable, enumerable, configurable, dan get, set untuk menjadi property menjadi dapat dimodifikasi atau read only.
        -Get/set disini kita sebut sebagai "Property accessor" -> ini digunakan untuk mendefinisikan cara akses dan modifikasi nilai properti tertentu. Get untuk cara baca, set untuk cara tulis-nya.
*/
// "use strict";
const obj = {
    i: 10,
    b: ()=> console.log("01a.", this.i, this),
    c(){
        console.log("01b.", this.i, this)
    }
}
obj.b();
// const boundC= obj.c.bind(obj)
// boundC();
obj.c();

const myObj = {
    a: 10
};
Object.defineProperty(myObj, "b", {
    get: function() {console. log("01c.", this.a, typeof this.a, this)
    return this.a + 10
    },
})
console.log("01c.", myObj.b);

//  ShortHand defineProperty 
const myObj2 = {
    a: 10, 
    get b(){
        console.log("01d.", this.a, typeof this.a, this)
        return this.a +10;
    }
}
console.log("01d.", myObj2.b)

/*  02. TANPA BINDING ARGUMENT
    Kata kunci arguments dalam js adalah variable yg tersedia di dalam setiap fungsi dan berisi argumen yang dilewatkan ke fungsi tersebut saat dipanggil.
    argumen merupakan objek array-Like yang memiliki property length dan dapat diakses seperti array.
*/ 
function regularFunc(){
    console.log("01.", arguments);
    const arrowFunc= () => console.log("02.", arguments);
    arrowFunc();
}    
regularFunc(1, 2, 3);
function foo(n){
    const f= (...args)=> args[1]+ n
    return f(1, 2)
}
console.log("2.1", foo(10))

const materials = ["Hydrogen", "Helium", "Lithium", "Berrylium"];
console.log("2.2", materials.map((el)=> el.length));

/*  03. TIDAK DAPAT DIGUNAKAN SEBAGAI KONSTRUKTOR dan 
    04. TIDAK ADA YIELD DAN GENERATOR
    contoh ada di keterrangan diatas.
*/

// REST PARAMETERS, DEFAULT PARAMATER DAN DESTRUCTURING SUPPORT DALAM ARROW FUNCTION.
// REST PARAMETERS Pada function deklaratif
function rest(a, b, ...args){
    console.log("03.", a);
    console.log("03.", b);
    console.log("03.", args);
}
rest(1, 2, 7, 8, 9);

// Pada arrow function
const myArrow = (a, b, ...rest) => {
    console.log("04.", a);
    console.log("04.", b);
    console.log("04.", rest);
    return rest
}
console.log("04.", myArrow(1, 2, 3, 4, 5));
 
// Default Parameters Function deklaratif: 
function defaultParams(a= 100, b= 20, c){
    console.log("05.", a);
    console.log("05.", b);
    console.log("05.", c);
}
defaultParams(10, 20, 30);

// Arrow Function 
const defaultArrow = (a = 100, b=20, c) => {
    console.log("06.", a);
    console.log("06.", b);
    console.log("06.", c= 30);
}
defaultArrow(10);

// DESTRUCTURING Function deklaratif
function deklarasiArr([a, b] = [10, 20]){
    console.log("07.", a);
    console.log("07.", b);
}    
deklarasiArr();

function deklarasiObj({ a, b } = { a: 10, b: 20}){
    console.log("08.", a);
    console.log("08.", b);
}
deklarasiObj();

//  Arrow function 
const destructArr = ([a, b]= [10, 20] ) => {
    console.log("09.", a);
    console.log("09.", b);
}
destructArr();

const destructObj = ({ a, b} = { a: 10, b: 20})=> {
    console.log("10.", a);
    console.log("10.", b);
}
destructObj();

/*  MENGUBAH FUNGSI ANONIM TRADISIONAL MENJADI ARROW FUNCTION SECARA BERTAHAP:
    1.  Remove the word function & place arrow:
        Hilangkan kata function dan tempatkan panah diantara argument dan tanda kurung kurawal pembuka.
    2.  Remove the body braces and word return
        Menghilangkan kurung kurawal dan kata return.  
    3.  Remove the paramater parentheses
        Menghilangkan tanda kurung disekitar parameter. ini hanya dapat dilakukan jika fungsi memiliki satu parameter. namun    jika fungsi tidak memiliki parameter, memiliki parameter ganda, parameter default, atau destructring serta rest parameter maka tanda kurung tetap didapat dihilangkan.
*/
(function (a){ return console.log("11.", a+100)})(10);
//  Tahap Perubahan
    (a)=>{return a+100}
    (a)=>a+ 100
     a=>  a+100;
    const myFunction = a=> a+100
    console.log("12.", myFunction(10));

/*  Empat kondisi dimana tanda kurung dalam arrowFunct tidak dapat dihilangkan: 
    1. FUNGSI TIDAK MEMILIKI PARAMETER
*/
(function (){return a+b+ 100});
() => a+ b+ 100;
   
    // 2. FUNGSI MEMILIKI LEBIH DARI SATU PARAMETER, ATAU LEBIH STATEMENT, SELAIN KURUNG TIDAK DIHILANGKAN, KURUNG KURAWAL DAN KATA RETURN TETAP ADA DALAM ARROW FUNCTION.
(function(a, b){return a+b + 100});
(a, b)=> a+b+ 100;   

(function(a, b){ 
    const chuck= 42;
    return a+ b+ chuck
});

//  NAMUN JIKA FUNGSI TERSEBUT HANYA 1 PARAMETER DAN TERDIRI DARI DUA (2) STATEMENT, KITA TETAP BISA MENGHILANGKAN TANDA KURUNG, NAMUN TANDA KURUNG KURAWAL DAN KATA KUNCI RETURN HARUS TETAP ADA.
(function(a){
    const result= a* 2;
    return result;
});
a => {
    const result = a*2;
    return result;
}

(a, b) => { 
    const chuck = 42;
    return a+ b+ chuck;    
}
    
    // 3. DESTRUCTURING 
(function([a, b]= [10, 20]){ return a+ b+ 100});
([a, b]= [10, 20])=> a+ b+ 100;     

    // 4. REST PARAMATER
(function(...args){return args.reduce((acc, val) => acc+ val) });
(...args)=> args.reduce((acc, val)=> acc, val, 0)  

/* FUNCTION BODY
    Expresi body mengacu pada kondisi arrow function saja saat fungsi arrow itu memberikan nilai kembali secara implisit..namun arrow function yang kondisinya mengembalikan hasil secara explisit yaitu saat dua statement digunakan, maka tidak disebut lagi expressi body, tetapi tetap disebut sebagai Blok body, kondisi ini tidak terjadi pada fungsi tradisional...fungsi tradisional hanya memiliki Blok body yang menyatakan hasil secara explisit.
*/
const myFunct = (x)=> x*x // ini expression body
const myFucnt2 = (x)=> {
    const b = 5
    return x* b
}// ini block body
     
/* OBJECT LITERAL PADA EXPRESION BODY
    - syntax tambahan tanda kurung yang digunakan untuk menangani objek literal hanya terjadi pada kondisi arrow function yg hanya memiliki satu statement dan tidak menggunakan kata kunci return. 
    - ini dikarenakan js mengintrepretasikan konten didalam kurung kurawal sebagai awal dari sebuah blok kode/urutan pernyataan dan bukan sebagai objek literal.
*/
// Pada function traditional
function getObject(){
    return { foo: "bar"}
}
console.log("13.", getObject());

const func= (x) => { foo : 1 }
console.log("14.", func()); // ini akan undifined;

const func2= (x)=> ({ foo: 1 });  
console.log("15.", func2());

//  ARROW FUNCTION DAPAT DIGUNAKAN DALAM METODA STATIS DALAM CLASS
class C {
    a= 1;
    autoBoundMethod= ()=> {
        console.log("16.", this.a);
    } 
}
const c= new C();
c.autoBoundMethod()
const{ autoBoundMethod }= c
autoBoundMethod();

class Example{
    constructor(){
        this.value= 42;
    }
    arrowMethod= ()=> {
        console.log("17.", this.value)
    }
}
const example= new Example()
example.arrowMethod();

/* PROPERTY DARI INSTANCE KELAS 
    - properti yang dideklarasikan diluar konstruktor membutuhkan metode bind untuk mengikat nilai propertinya, namum tidak efisien dalam penggunaan memory karena property tsb akan dibuat ulang setiap instance.
*/
class D {
    a= 33;
    constructor(){
        this.method= this.method.bind(this);
    }
    method() {
        console.log("18.", this.a)
    }
}
const d= new D();
d.method()

// arrowFunction tetap dapat mengakses properti diluar construktor tanpa metode bind
class E{
    a= 34;
    method= ()=> {
        console.log("19.", this.a);
    }
}
const e= new E();
e.method();


//  Destructuring pada fungsi regular membutuhkan metode bind
class F{
    constructor(){
        this.a = 35
    }
    method2(){
        console.log("19.", this.a)
    }
}
const f= new F();
const{ method2 } = f
const boundMethod = method2.bind(f)
boundMethod();

class G{
    constructor(){
        this.a= 36;
    }
    method= ()=> {
        console.log("20.", this.a) 
    }
}
const g = new G();
const{ method } = g //destructuring method tidak membuat arrow function kehilangan conteks this. function regular akan menjadi undefined.
method();

/*  Ketika menggunakan metode call(), bind(), apply()
    -  method ini bekerja seperti yang diharapkan pada fungsi tradisional, karena secara langsung(explisit) menetapkan lingkup untuk setiap metode tersebut. 
    -   sedangkan pada arrowFunction lingkup dibuat secara global("global this/scope") maka this akan dianggap global this.
        a. bind(): membuat salinan fungsi dengan konteks this tertentu.
    b. apply(); menjalankan fungsi dengan konteks nilai (this) yang diatur dan dengan argumen yang diberikan sebagai array.
    c. call(): sama dengan apply perbedaan terletak pada argument yang diberikan bukan sebagai array.
*/
// bind(), apply() dan call() pada regular function
const obj2= {
    num: 31,
}
globalThis.num= 100;
const add= function(a, b, c) {return this.num+ a+ b+ c};
console.log("21.", add.call(obj2, 1, 2, 3));
console.log("22.", add.apply(obj2, [1, 2, 3]));
const boundAdd = add.bind(obj2);
console.log("23.", boundAdd(1, 2, 3));

//bind(), apply(), call() pada arrowFunction
const obj3= {
    num: 32,
}
globalThis.num= 100;
const add3= (a, b, c) => globalThis.num+ a+ b+ c;
console.log("24.", add3.call(obj3, 1, 2, 3));
console.log("25.", add3.apply(obj3, [1, 2, 3]));
const boundAdd3 = add3.bind(obj3);
console.log("26.", boundAdd3(1, 2, 3));

/*  PRESEDENCE ARROWFUNCTION
    - Arrow function memiliki presedence yang rendah dibanndingkan 
    operator yang lain.
    - ini dapat mempengaruhi cara expresi di sekitar-nya diinterpretasikan olah js.
*/
//callback || ()=> {} || memiliki presedence yg lebih tinggi dari => sehingga tanda ()=> {} dianggap sebagai bagian expresi. untuk menghindari ini cukup tambahkan tanda kurung.
// callback || (()=> {})

//  MANFAAT TERBESAR ARROWFUNCTION TIDAK MEMBUTUHKAN BIND, APPLY DAN CALL
const obj4= {
    value: 38,
    printValue: function(){
        console.log("27.", this.value);
    }
};
setTimeout(obj4.printValue.bind(obj4), 300);
setTimeout(()=> {console.log("28.", this.value), 300});

const obj5= {
    value: 39,
    printValue: function(){
        setTimeout(()=> {
            console.log("29.", this.value);
        }, 300)
    }
}
obj5.printValue();

//function tradisional
const obj6= {
        count: 39,
        Adding(){
            setTimeout(function(){
                this.count++
                console.log("30.", this.count)
            }.bind(this), 300)//jika bind tidak digunakan akan NaN
        } 
    }
obj6.Adding();

const obj7= {
    count: 40,
    Adding(){
        setTimeout(()=> {
            this.count++
            console.log("31.", this.count);
        }, 300)
    }
}
obj7.Adding();

/*  FUNGSI GLOBAL BAWAAN DALAM JS
    -isFinite()-> menentukan apakah nilai yang dilewatkan adalah bilangan terbatas atau tidak. pertama-tama parameter tersebut dikonversi menjadi sebuah angka
*/
console.log("32.", isFinite(10));
console.log("33.", isFinite("10"));
console.log("34.", isFinite("Hello")); //jalankan diweb console

//  isNaN: menentukan apakah nilai yang diberikan adalah NaN atau bukan.
console.log("35.", isNaN(10));
console.log("36.", isNaN("10"));
console.log("37.", isNaN("Hello")); //diweb console
//ParseFloat() dan ParseInt()