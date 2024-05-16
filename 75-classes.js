/*
    Classes "merupakan sebuah tempalate object yang mengencapsuletion property dan method". pada dasar-nya kelas adalah fungsi khusus yg mendefinisi-kan function expression dan declaration.
    berfungsi: pembuatan kode yang lebih terstruktur, reusable dan mudah dipahami.
    terbagi atas 2 macam:
    1. class expression 
        -tidak hoisting
        -tidak TDZ (Temporal Dead Zone):
         merujuk pada cakupan scope dimana variable belum diinisialisasi maka tidak dapat diakses.  dimulai saat menggunakan class hingga {}.
    2. class declaration
        -hoisting
        -terkena TDZ
*/
// CLASS EXPRESSION: class anonymous tapi assigned kedalam variable
const Rectangle= class{ //-> prototype class/blueprint dari obj yang akan dibuat.
    constructor(height, width){
        this.height= height;//-> instance field: prop dari instance obj yg dibuat dalam Rectangle
        this.width= width;
    }
    calculateArea() {
        return this.height* this.width
    }
};
const rect= new Rectangle(10, 4)//instance obj dari blueprint Rectangle.
console.log("01.", rect.height);
console.log("02.", rect.calculateArea());

//  CLASS YANG MEMPUNYAI NAMA
const Rectangle2 = class Rectangle{
    constructor(height, width){
        this.height= height;
        this.width= width
    }
    calculateArea(){
        return this.height* this.width
    }
}
const rect2 = new Rectangle2(10, 5);
console.log("03.", rect2.height);
console.log("04.", rect2.calculateArea());

/*  CLASS BODY
    tubuh class merupakan bagian didalam tanda curly braces {}
    disini kita mendefinisikan anggota class, seperti method dan constructor.
    - tubuh dalam class menggunakan strict mode bahkan walau tidak dideklarasikan
    - element dalam tubuh class terdiri:
        a. getter, setter atau field
        b. location: static atau instance
        c. visiblity Public atau private
    Sebagai tambahan terdapat 2 bagian penting dalam syntax class: 
    Constructor dan static initialization block.    

    IIFC pada class
    sebuah parent class walapun tidak mempunyai class Body selama ia ditulis dengan extends class (nama Kelas) ia dianggap ada sebagai class parent yang sah.
    new(class C extends class B {
    constructor() {
        console.log("13.", this.foo());
    }
} {
    #a= 1
    foo(){
        return this.#a error karena private field tidak dapat diakses diluar class tempat ia didefiniskan
    }
}
)() */
new(class C extends class B {
    constructor(){
        this.a= "Nova";
        console.log("05.", this.foo());
    }
}{
    a;
    foo(){
        return this.a
    }
})

/* NAMA CLASS, CONSTRUCTOR DAN PROPERTY DALAM OBJECT TIDAK BOLEH COMPUTED PROPERTIES. 
    computer properties: "cara membuat property nama yang dihitung secara dinamis ditandai dg kurung siku. 
*/
const prop= "Hello";
const obj= {[prop+ "world"]: "Hai"}
console.log("06.", obj[prop+ "world"]);// dot notation tidak bisa pada computed properties
console.log("07.", Object.keys(obj));

class Foo{ 
    ["constructor"](){ //walau tidak sesuai aturan kode ini masih berfungsi tanpa pesan kesalahan/error.
        console.log("08.", "called");
        this.a= 1
    }
}
const foo = new Foo();
console.log("09.",foo);
foo.constructor();
console.log("10.", foo);

/* INSTANCEOF OPERATOR
    instanceof digunakan untuk memeriksa apakah sebuah object merupakan instance dari sebuah kelas tertentu, true dan false sebagai kembalian hasil-nya.
*/
class Animal{};
class Rabbit extends Animal{};
class Tree{};
const rabbit = new Rabbit();
const tree= new Tree();
console.log("11.", rabbit instanceof Rabbit);
console.log("12.", rabbit instanceof Animal);
console.log("13.", tree instanceof Animal);

//  KEYWORD "SUPER"
class User{ 
    name;
    #code= "";
    constructor(codePrefix= ""){
        const randomNumber= Math.round(Math.random()*1000)
        this.#code= `${codePrefix}${randomNumber.toString().padStart(4, "0")}`
    }
    getCode(){
        return this.#code;
    }
}
class Student extends User{
    constructor(){
        super("STD")
    }
}
class Employee extends User{
    constructor(){
        super("EMP")
    }
}
const student= new Student();
const employee= new Employee()
console.log("14.", student.getCode());
console.log("15.", employee.getCode());

