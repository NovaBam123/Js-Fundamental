/*  CLOSURE 
    -kombinasi fungsi dalam lingkungan tertutup(enclosed) namun menyediakan referensi ke fungsi bagian dalam(inner function), parameter ini tersedia bahkan setelah fungsi luar ini selesai dijalankan.
    -ini disebabkan karena inner function menyimpan referensi-nya
    - TEMPLATE LITERAL UMUMNYA DG TANDA `{}` -> menyisipkan/menggabungkan expresi/variable dalam js
    -OBJEK LITERAL tanda {} -> merupakan penampung properti dalam sebuah objek.
    -METHOD -> fungsi yang merupakan bagian dari sebuah properti dari sebuah object
*/
//  LEXICAL SCOPE 
function greeting(name){
    let message= "Hello"
    function displayGreet(){
        console.log("01.", `${message} ${name}..!`)
    }
    displayGreet()
}
greeting("Andi");

function greeting2(name){
    let message= "Hello";
    function displayGreet(){
        return message + name
    }
    return displayGreet;
}
console.log("02.", greeting2(" Budi")())
function greeting3(name){
    let message = "Hello";
    return function(){
        message = "Haiii"
        return `${message} ${name}..!!`
    }       
}
const sapaNama3= greeting3("Candra")
console.log("03.", sapaNama3());

function greeting4(message){
    return function(name){
        return message + name
    }
}
const sapaNama4= greeting4("Hello")
console.log("04,", sapaNama4(" Dina"));

const greeting5= (function(){
    let message= "Hello";
    return function(name) {
        return message + name
    }    
})();
console.log("05.", greeting5(" Ella"))

//  ARROW FUNCTION DAN IIFE
const greeting6= ((message)=> (name)=> `${message} ${name}..!`)("Hello")
console.log("06.", greeting6("Fajar"));

/*  OBJEK LITERAL/FUNCTION CONSTRUCTOR DAN METHOD
    ciri closere ini tidak hanya terjadi pada inner function saja tetapi juga pada:  
    -   method yang mempunyai akses terhadap properti dalam lain dalam sebuah lingkup objek.
    -   Event Handler  -> fungsi closure sebagai event handler karena memiliki akses ke variable terhadap lingkunagan dimana ia didefinisikan.
    function setupCounter(){
        let count = 0;
        document.getElementById("btn").addEventListener("click", function(){
            count++'
            console.log(count)
        })
    }
    setupCounter();
*/
const greeting7= {
    message: "Hello",
    greet: function(name){
        return `${this.message} ${name}..!`
    }
}
console.log("07.", greeting7.greet("Gissele"))

//  CONTOH LAIN CLOSURE
function makeAdder(x){ //pabrik fungsi yang membuat fungsi lain. membuat fungsi add5 dan add10 
    return function(y){
        return x + y
    }
}
const add5= makeAdder(5); //angka5 disimpan dlm memory sbh referensi
const add10= makeAdder(10);
console.log("08.", add5(2));
console.log("09.", add10(2));

/*  PENGGUNAAN CLOSURE UNTUK MENSIMULASIKAN METODE PRIVATE
    - Hal ini umumnya dilakukan dalam class dalam js.
    - fungsi yang bersifat privat artinya mereka hanya dapat diakses oleh fungsi2 lain namun dalam lingkup yang sama.
    - ini bertujuan untuk menyembunyikan implementasi dan detail internal sebuah fungsi juga mengelola ruang global untuk mencegah konflik nama antar beberapa bagian.
    - penulisan huruf besar pada penamaan sebuah variable menunjukan bahwa variable tsb merupakan sebuah modul/kumpulan fungsi yang mempunyai peran khusus dalam js.(penandaan konsep atau struktur tertentu)
*/
const Module = (function(){
    let privateVar = "I am private"
    // Fungsi privat
    function myPrivate(){
        console.log("10.", "Ini fungsi privat");
    }
    // Fungsi Public
    function publicFunc(){
        console.log("11.", "Ini fungsi public");
        console.log("12.", privateVar);
        myPrivate();
    }
    return { publicFunc }
})();    
Module.publicFunc(); 

const counter= (function() {
    let privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        increment(){
            changeBy(1)
        },
        decrement(){
            changeBy(-1)
        },
        value(){
            return privateCounter;
        }
    }
})();
console.log("13.", counter.value());
counter.increment()
counter.increment()
console.log("14.", counter.value());
counter.decrement()
console.log("15.", counter.value());

/* CLOSURE SCOPE CHAIN
    - ketika sebuah fungsi membentuk sebuah closure ia memiliki tiga scope yang berbeda: 
    1. Local Scope(Own Scope) : scope local pada inner function yg dapat diakses oleh ia sendiri
    2. Enclosing scope(outer function): pembungkus inner function 
    3. Global scope : variable diluar fungsi. variable ini disimpan dalam global execution context, yang terkait dengan objek window dalam lingkungan browser.
    fungsi yang memiliki akses tidak hanya didalam fungsi tsb tetapi juga fungsi luar yang membentuk rantai scope (chain scope) kita sebut dengan function scope.
*/
// RANTAI SCOPE DALAM ANONYMOUS FUNCTGION
const e= 10;
function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d+e
            }
        }
    }
};
console.log("16.", sum(1)(2)(3)(4));

// RANTAI SCOPE DALAM FUNGSI DEKLARASI: 
const global =10
function jumlah(a){
    return function sum2(b){
        return function sum3(c){
            return function sum4(d){
                return a+b+c+d+global
            }
        }
    }
}
const sum2 = jumlah(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log("17.", result);
//atau dengan sederhana 
const result2 = jumlah(1)(2)(3)(4);
console.log("18.", result2);

//CLOSURE DAPAT JUGA MENGAKSES const yang tidak dapat diakses dari fungsi outer-nya
function outer(){
    let getY;
    {
        const Y = 6
        getY = function() {return Y} ;
    }
    console.log("19.", typeof Y)
    console.log("20.", getY());
}
outer();

/*  PERFORMANCE AND CONSIDERATION
    - closure dibuat hanya saat diperlukan hal ini berhubungan dengan kinerja kode. closure akan mempertahankan referensi dalam lingkungan lexical-nya dan dapat meningkatkan konsumsi memori dan memperlambat kinerja.
    - alternatif dengan menggunakan function constructor dalam pembuatn objek terutama saat sebuah method dapat dibagiakn. method ini akan ditugaskan sekali dan menghemat memori dan meningkatkan kinerja.
*/
function MyObject (name, message){
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function(){
        return this.name;
    }
    this.getMessage = function(){
        return "Hello " + this.name;
    }
}
const obj = new MyObject("Idrus", "Hello");
console.log("21.", obj.getMessage());
/*  Pada kode diatas setiap objek baru dibuat maka akan membuat salinan fungsi baru(method) yang akan menyimpan referensi pada bagian memory yang berbeda2 terutama jika banyak objek yg dibuat, sehingga akan membebani kinerja memory. untuk menghindari ini gunakan "PROTOTYPE". selain dg kinerja memory berikut beberapa fungsi prototype pada fungsi konstruktor: 
    1. Pemeliharaan kode: mengatur setiap metode2 yang terkait dalam sebuah objek dalam suatu tempat.
    2. Dinamisitas: dimana metode yang terkait dg objek dapat diubah, ditambah dan dihapus scr fleksibel tergantung kebutuhan.
    3. Inheritance: konsep pewarisan pada setiap metode dg prototype chain.
    perlu dicatat kode dibawah bukan merupakan sebuah closure fungsi tsb hanya memiliki akses keproperti name yang ditetapkan dalam objek tsb.
*/
function MoreEfisien(name, message){
    this.name = name.toString();
    this.message = message.toString();
}
MoreEfisien.prototype.dapatName = function(){
    return this.name;
}
MoreEfisien.prototype.dapatMessage = function(){
    return "Hello " + this.name
}
const myObj = new MoreEfisien("John", "Hello");
console.log("22.", myObj.dapatMessage());

// OBJEK LITERAL PADA ARROW FUNCTION