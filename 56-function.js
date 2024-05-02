
/*  "BLOK KODE YG DITULIS UNTUK MELAKUKAN TUGAS TERTENTU DAN DAPAT 
    DIGUNAKAN KEMBALI, "
    -sebuah subprogram yg dapat dipanggil oleh kode lain-nya.
    funtion terbagi atas: 
    1.  function Constructor
    2.  function Regular: 
        a. function Declaration -> ditulis kt kunci function dan nama dan parameter(){}
        b. function Expression bisa kita sebut juga dengan arrow function -> disimpan dalam variable 
    SYNTAX: 
    function name(param0){
        statements
    }
    function name(param0, param1)
    function name(param0, param1, ... ,paramN){
        statement
    }
*/
/*FUNCTION DECLARATION 
    1. seperti let, mode ketat(strict mode) -> hanya dalam blok tsb
        -jika kita mendeklarasikan fungsi didalam if atau loop maka fungsi tersebut hanya akan dapat diakses dalam blok tersebut.
        -fungsi tidak dapat dinyatakan ulang oleh deklarasi lainnya: 
        jika fungdi sudah dideklaraasikan dg sebuah nama maka tidak dapat dideklarasi ulang dg nama dan lingkup yg sama.
    2. seperti var, deklarasi fungsi(non strict), maka akan menjadi properti pada globalThis(objek global dlm lingkungan browser), dan dapat mendeklariskan ulang fungsi tersebut dg nama yang sama.
    3.  mode hoisting: fungsi dapat dipanggil bersama dengan nilainya dimana saja -> dimana deklarasi fungdi dipindahkan keatas lingkup kode sebelum kode dieksekusi. (dipanggil diatas fungsi tsb)
*/
"use strict";
function calcRect(width, height) {return width* height}
console.log("01. Luas persegi: ",calcRect(5, 6));
if(true) {
    function greet(){return "Hello"}
    console.log("02.", greet());
}
console.log("03. greet adalah: ", typeof greet); //ini tidak akan dikenali(diluar lingkup kode pada strick mode)

console.log("03",  
    `"foo" name ${
        "foo" in globalThis ? "is" : "is not"
    } global.typeof foo is ${typeof foo}`
);
if(true){ 
    console.log("08.", foo());
    console.log("05. sebelum dideklarasi(hoisting):", typeof foo);
    function foo(){
        return "Heloo"
    }
    console.log("06. setelah dideklarasi", typeof foo );    
    console.log("07. setelah dideklarasi: ",foo());    

}
console.log("07. diluar blok fungsi:", typeof foo);

/*  HOISTING (DIANGKAT);
    -fungsi deklarasi diangkat ke atas dari lingkup kode tsb, atau global scope.
*/  
hoistedTambah(2, 3);
console.log("11.", hoistedTambah.toString());

function hoistedTambah(x, y){
    return console.log("10.", x + y);
}
console.log("12", hoistedTambah);

/* FUNGSI EXPRESSION TIDAK BERLAKU HOISTING
    - terdiri atas : 
    1. anonymous function 
    2. arrow function
    - console.log("13.", hoistKali(2, 3)) -> akan error Cannot access 'hoistKali' before initialization
*/ 
const hoistKali = (x, y) => x * y;
console.log("14.", hoistKali(2, 3));

/*  REDECLARATION  
    deklarasi fungsi tergantung pada lingkup(scope) dimana deklarasi tersebut berada.
    -TOP LEVEL SCRIPT: paling atas dari script -> ini mirip dg var  
    maka funct yg kedua akan menggantikan yang pertama. (tidak berlaku bagi let, ,const dan class)
    a.length dalam sebuah fungsi digunakan untuk mengetahui jumlah parameter yg didefinisikan.
*/ 
myFunct();
function myFunct(){
    console.log("15.", "First declaration"); //digantikan dg yg bawah
}
function myFunct(){
    console.log("16.", "second declaration");
}

function greet(){return "Hello"};
var greet = 5;
console.log("17.", greet);
console.log("18.", typeof greet);

/*  FUNCTION PARAMETER:
    -adalah sebuah variable yang digunakan untuk menerima nilai yang nantinya akan diproses oleh sebuah fungsi.
    - perannya sebagai "PLACEHOLDER" untuk nilai yang nantinya digunakan dalam tubuh fungsi.
    ARGUMENT: 
    - adalah nilai-nilai yang diteruskan pada fungsi tersebut dan diikat sesuai urutan-Nya.
    greeting -> Parameter 
    "Hello" -> Argument
    - Multiple parameter -> dipisahkan dengan koma
    syntax: 
    const res = myString.replace("string", "sausage")
*/

let obj = { 
    name: "John",
    myMethod: function(greeting) {
        console.log("19.", `${greeting} ${this.name}!`)
    }
}
obj.myMethod("Hello");

/*  PERBEDAAN FUNCTION DAN METHOD 
    -method merupakan fungsi juga namun ia merupakan bagian dari sebuah object.
    -jika fungsi dapat dipanggil secara indepent maka method 
    dipanggil pada object tertentu. 
    -Method umumnya terikat pada bagian properti-nya dari sebuah object.
    - object yang mempunyai fungsi tersebut kita sebut sebagai "this" konteks dalam tubuh metode.
*/
let obj2 = { 
    name: "John",
    myMethod: function(greeting) {
        console.log("20.", `${greeting} ${this.name}!`)
    }
}
obj2.myMethod("Hello");

/*  OPTIONAL dan DEFAULT PARAMETER
    -Paramater ini bersifat optional dan tidak wajib diberikan sebuah nilai.
    - perbedaan-nya dg default, parameter default lebih kenilai-nya dari sebuah parameter optional yang akan diproses oleh sebuah fungsi. 
*/
//OPTIONAL 
function sapa(name){  //optional boleh ada/tidak ada saat pemanggilan fungsi.
    if (name === "undefined") { 
        name= "Anonymous"; //ini kita sebut parameter default
    }
    console.log("21.", `Hello ${name}..!`);
}
sapa(); //jika tidak ada default paramater maka undifined
sapa("Budi");

/*  REST PARAMETER 
    -   rest parameter merupakan fungsi yang mengumpulkan semua argumen menjadi sebuah array. (...args) pada kode dibawah ini akan menjadi array dari semua fungsi yang dilewatkan ke pipe2.
    -   rest parameter akan dapat menangani berapapun jumlah fungsi yg dilewatkan didalam-nya karena ia akan mengumpulkan-nya menjadi sebuah array:
    -   function pipe2(...fungsi){ 
            return function(input){
                return fungsi.reduce((acc, val) => val(acc), input)
    const myPipe = pipe2(double2, addFive, square, double2, addFive, square); 
    
    SYNTAX: 
    function example(a, b, ...args){ }
    -syntax rest parameter harus selalu disimpan diakhir parameter sebuah fungsi. ini dikarenakan rest parameter mengumpulkan semua argument yang tidak cocok dg parameter2 lainnya dalam array.
    jika disimpan diawal atau ditengah, maka sulit membedakan antara argumen yang harus dimasukan dalam array rest parameter dan argumen yang seharusnya menjadi nilai parameter lainnya.
*/
function foo(...args){ //=> rest parameter hasil dikembalikan dalam btk array.
    console.log("22.", args)
}
foo(1, 2, 3);
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log("23.", arr2);

function double2(x) { return x * 2};
function addFive(x) { return x + 5 };
function square(x) { return x * x };
function pipe2(...fungsi){ // rest parameter
    return function(input){
        return fungsi.reduce((acc, val) => val(acc), input)
    }
}    
const myPipe = pipe2(double2, addFive, square);
console.log("24.", myPipe(2));

(function (){
    console.log("Hello")
})

/* NESTED FUNCTION 
    Fungsi dapat memiliki fungsi didalam bagiannya dimana fungsi yg didalam dapat memiliki akses pada variable dan parameter pada fungsi bagian luar(enclosing/outer function), kebalikannya fungsi luar tidak memiliki akses pada fungsi di bagian dalam(inner function/nested function) -> prinsip ini kita sebut "LEXICAL SCOPING".
*/
function outer(a){
    function inner(b){
        return a+ b
    }
   return inner;
}
console.log("23", outer("Saya sedang, ")("belajar JavaScript."))

//  LEXICAL SCOPING
function luar(){
    const varLuar= "var luar"
    function dalam(){ 
        const varDalam= "var dalam"
        console.log("24. Function dalam akses var dalam:", varDalam);
        console.log("25. Function dalam akses var luar:", varLuar);
    }
    dalam();
    console.log("26. Function luar akses luar:", varLuar);
    console.log("26. Function luar akses yg dalam:", typeof varDalam);
};
luar();
/*  Arrow function dan Anonymous functions 
    -otomatis menjadi anonymous function jika kita tidak menyematkan nama/ function-nya.
    anonymous function: 
    fungsi yang tidak memiliki nama    
*/
    let add = function(x, y) { return x + y}
    let add2 = (x, y) => x + y

/*  IIFE  (IMMEDIETLY INVOKED FUNCTION EXPRESSION) 
    - kedua function ini bisa tidak disematkan dalam sebuah variable
*/   
(() => {
    console.log("27. arrow function IIFE");
})();

/*  FUNCTION SCOPE 
    Variable(const, let) yang dideklarikan diluar fungsi dapat diakses baik dari luar fungsi maupun dalam fungsi = "GLOBAL SCOPE"
    sedangkan yang didalam fungsi hanya dapat diakses oleh fungsi tersebut = "LOCAL SCOPE/FUNCTION SCOPE"
const x = 1;
function a(){
    const y= 2;
    output(y)
}
function b(){
    const z =3;
    output(z);
}
function output(value){
    const para= document.createElement("h1");
    document.body.appendChild(para);
    para.textContent = `Nilai: ${value}`;
}
*/