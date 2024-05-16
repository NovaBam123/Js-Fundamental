/*  Merupakan kumpulan data terkait yang terdiri dari variable dan fungsi(properti dan method)
    Syntax:
    Object Literal Syntax: { }
    let var= new Object();
    - didalam-nya merupakan pasangan kunci dan nilai(key-value)
    - nama properti/method, dan value juga fungsi sebuah metod.
    - Untuk mengakses property dari sebuah objek, menggunakan 2 cara yaitu: 
    1. Dot Notation(.)-> digunakan ketika nama properti sudah diketahui sebelumnya. cth: objek.property
    2. Bracket Notation([""])-> digunakan ketika nama properti tidak diketahui sebelumnya, atau berupa variable atau nama properti yang mengandung karakter khusus contohnya spasi dalam property tsb. cth: objek["property"]

*/
/* contoh untuk dibrowser console
const person= {
    name: ["John", "Smith"],
    age: "30",
    bio: function(){
        console.log("01.", `${this.name[0]} ${this.name[1]} is ${this.age} years old`);
    },
    introduceSelf: function(){
        console.log("02.", `Hi I'm ${this.name[0]}`);
    },
};
person.name;
person.name[0];
person.age;
person.bio();
person.introduceSelf();
*/
const user= {
    name: ["John", "Smith"],
    email: "john@example.com",
    age: 30, 
    login(){ //shorthand method pada ES6.
        console.log("01.", `${this.name[1]} logged in`);
    },
    logout: function(){
        console.log("02.", `${this.name[0]} logged out`);
    }
}
user.login();
user.logout();
console.log("03.", user.name[1]);

//  OBJECT SEBAGAI OBJECT PROPERTY
const user2= {
    name: {
        first: "John",
        last: "Smith",
        third: "Nova"
    },
    email: "john@example.com",
    age: 30,
    login(){console.log("04.", `${this.name.first} logged in`);},
    logout(){console.log("05.", `${this.name.last} logged out`);}
};

/*  BRACKET NOTATION;
    Fungsi utama-nya :
    Mengedit, menambah atau bahkan menghapus properti dan value dalam sebuah object.
    Cara alternatif untuk mengakses properti object dengan menggunakan tanda kurung siku.
    -syntax:
    object[namaProperty]
    -ini digunakan untuk mengakses properti secara dinamis pada saat runtime yang tidak mungkin dilakukan oleh notasi titik.
    Tiga kasus penggunaan Notasi Bracket:
    1.  Akses Properti Dinamis:
        ketikan nama properti ditentukan pada saat runtime atau disimpan dalam sebuah variable.
    2.  Karakter Khusus: (spasi, kata kunci js)
        Nama properti mengandung karakter khusus atau kata kunci dari js.
    3.  Nama Property terhitung: 
        ketika menggunakan nama property terhitung pada ES6.    
*/

// 01a. KASUS PROPERTY DISIMPAN DALAM VARIABLE
user2.login();
let propertyName= "name"
console.log("05.", user2[propertyName].first);
console.log("06.", user2["name"]["last"]);

const person= {
    name: ["Bob", "Smith", "Nova"],
    age: 32
}
logProp("name");
logProp2("name")
function logProp(propName){console.log("07.", person[propName][2]);}
function logProp2(propName){console.log("07.1", user2[propName].third);}

/* 01b. KASUS MENGAKSES PROPERTY DINAMIS PADA SAAT RUNTIME(SAAT PROGRAM BERJALAN)
    let propertyName1= prompt("Masukkan nama property yang ingin diakses:")
*/    

// 02. PROPERTY MENGANDUNG KARAKTER KHUSUS MISAL SPASI/ KATA KUNCI
const person2= {
    "first name": "John",
    "last name" : "Doe"
}
console.log("08.", person2["first name"]);
console.log("09.", person2["last name"]);

const object= {
    return: "MyReturn",
    function: "MyFunction"
}
console.log("10.", object.return);
console.log("11.", object["function"]);

// 03. PROPERTY TERHITUNG ES6
let a= 10;
let b= 20;
const obj= {
    [a+ b]: "Nilai dari a+ b",
    ["square"]: a* a,
    ["cube"]: b* b* b    
}
console.log("12.", obj[30]);
console.log("13.", obj.square);
console.log("14.", obj.cube);

// SETTING EDITING OBJECT MEMBER
// Mengganti properti dalam sebuah object.
const user3= {
    name: {
        first: "John",
        second: "Smith",
        third: "Nova"
    },
    email: "john@example.com",
    age: 30,
    login(){console.log("15.", `${this.name.first} logged in`);},
    logout(){console.log("16.", `${this.name.third} logged out`);}
};

//  Menambah properti pada sebuah objek, menambah value dan menambah method
//  Menambah value
user3.age= 45
user3.name.third= "Bamahry"
user3.logout();
user3["address"]= "Jl. Lingkar Bandung";
console.log("17.", user3.address);

// Menambah method dg Method Chaining dengan kata kunci return this.
user3.greeting= function(){
    console.log("18.", "Hello everyone!")
    return this;
}
user3["introduceSelf"]= function(){
    console.log("19.", `Myname is ${user3.name.first}..!`)
    
}
user3.greeting().introduceSelf(); //metode chaining

// menghapus property atau value dalam obj
delete user3["name"]["third"];
delete user3.address;
console.log("20", user3);

/* Menambah parameter baru
jadi variabel yang dibuat, akan berguna-nya saat user pengguna menginput sesuatu yang akan menambahkan kedalam objek yang kita buat. 
*/
const userInputName= "name"
const userInputValue= "Andi"
const member= {};
member[userInputName]= userInputValue
console.log("21.", member["name"]);

/*  This dalam object
    - merujuk pada object dimana kode sedang dibuat.
    - dengan this memungkinkan panggunaan divinisi metode yang sama untuk setiap object. 
    - membuat metode yang dapat dibuat oleh berbagai object sehingga memudahkan pengelolaan dan meminimalkan pengulangan.
*/
const person3 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const person4 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };

/*  Factory Function    
    fungsi yang digunakan untuk membuat sebuah objek.
    membuat abstraksi pembuatan objek, sehingga pemanggilan kode untuk membuat objek lebih sederhana, beberapa keuntungan-nya:
    1. Abstraksi: Mengurangi kompleksitas dan detail dalam pembuatan objek
    2. Kustomisasi: Memungkinkan pembuatan objek dengan konfigurasi khusus.
    3. Reusabilitas: Memungkinkan penggunaan kembali kode untuk objek serupa.
*/
function createPerson(name){
    const obj= {};
    obj.name= name;
    obj.introduceSelf= function() {
        console.log("22.",`Hi! I'm ${this.name}.`)
    }
    return obj;
}
function createPerson2(name){
    return{
        name: name,
        introduceSelf(){
            console.log("23.", "Hi! I'm "+ this.name+ ".");
        }
    }
}
const budi= createPerson("Budi");
const cindy= createPerson2("Cindy")
budi.introduceSelf();
cindy.introduceSelf();

/*  Introducing Constructors
    - Dg object literal saat membuat beberapa object dg structur yg sama akan membuat penulisan kode secara berulang, sehingga tidak efisien.
    untuk mengatasi masalah ini yaitu dengan: 
    - function Constructor 
    - instance Classs
    disebut juga dengan pemrograman berorientasi objek atau: Object Oriented Program(OOP). Kedua konsep ini dapat membuat dan mengelolan object tanpa menulis ulang kode.
    Langkah2 dalam penggunaan konstruktor:
    1.  Membuat Objek baru:     
        Saat construktor dipanggil dg operator "new", js akan membuat objek baru kosong.
    2.  Binding "this":
        This dalam construktor function, merujuk pada objek yang sedang dibuat. ini memungkinkan untuk menginisialisasi property dan obj tsb.
    3.  Menjalankan Kode dalam konstruktor:
        kita dapat menambahkan logika dalam konstruktor untuk melakukan tindakan tertentu saat objek dibuat.
    4.  Mengembalikan Obj: 
        Secara default, construktor tidak perlu mengembalikan nilai, karena nilai obj sudah diatur dalam proses pembuatan object "new".             
*/
function Person(name){
    this.name= name;
    this.introduceSelf= function(){
        console.log("24.", "Hi I'm "+ this.name, ".");
    }
}
const danu= new Person("Danu");
danu.introduceSelf();

