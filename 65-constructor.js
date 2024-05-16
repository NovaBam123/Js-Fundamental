/* Constructor
    - special method dari class untuk menginisiasi instance obj.
    - hanya boleh ada 1 constructor dalam class.
    - Syntax constructor:
        constructor(){...}
        constructor(arg0){...}
        constructor(arg0, arg1, /.../, argN)
        tidak boleh sebagai getter, setter, async dan generator.
    - jika constructor tidak disediakan, maka default constructor telah disediakan dalam class dan kosong.    
    -super digunakan untuk memanggil constructor dari parent class untuk dapat mengakses prop dan method-nya. khususnya field declaration.
    * Dlm subclass, constructor dpt menggunakan kata kunci "super"untuk memanggil konstruktor dari kelas induk. ini akan berguna untuk menambahkan logika dalam subclass.
    syntax:
    constructor(...args)
    super(...args) dan dilakukan sebelum penggunaan "this".   
*/  
class Person {
    constructor(name){
        this.name= name;
    }
    introduce(){
        console.log("01. Hello my name is "+ this.name);
    }
}
const andi= new Person("Andi");
andi.introduce()

class Parent{ 
    constructor(name) {
        this.name= name;
    }
}
class Child extends Parent{
    constructor(name, age){
        super(name);
        this.age= age;
    }
}
const parent= new Parent("John")
const child= new Child("John junior", 10)
console.log("02.", parent.name);
console.log("03.", child.age);
console.log("04.", child instanceof Child);

/*  default constructor dan class bawaan dari js;
    kelas induk yang dapat digunakan untuk kita extends:
    Error, Array, Object, String, Number dan lain2.
*/
class ValError extends Error{
    printCustomMsg(){
        return `validation failed (detail: ${this.message})`
    }
}
try{
    throw new ValError("Not a valid phone number")
} catch(error){
    if(error instanceof ValError){
        console.log("05.", error.name);
        console.log("06.", error.printCustomMsg());
    }else {
        console.log("Unknown Error", error);
        throw error;
    }
}

// Menyediakan class parent error dengan parameter sendiri dalam constructor-nya maka kita gunakan kata kunci super untuk memanggil arg tersebut.
class Error1{
    constructor(message){
        this.message= message;
    }
}
class ValidationError extends Error1{
    constructor(message){
        super(message);
        this.name= "Error";
        this.code= 42;
    }
    printCustomerMessage(){
        return `validation failed: (detail: ${this.message}, code: ${this.code})`
    }
}
try{ 
    throw new ValidationError("Not a valid transaction");
} catch(error){
    if(error instanceof ValidationError){
        console.log("07.", error.name);
        console.log("08.", error.printCustomerMessage());
    } else{
        console.log("Unknown Error", error);
        throw error;
    }
}
/*  MEMANGGIL SUPER DALAM CONSTUCTOR YANG TERIKAT PADA PROTOTYPE BERBEDA.
    - Object.setPrototypeOf() berfungsi untuk mengubah prototype dari sebuah object. 
    -Syntax: 
    Object.setPrototypeOf(obj, prototype);
    *obj: object prototype yang akan diubah.
    *prototype: Objek baru yang akan manjadi prototype obj
*/
class Polygon{ 
    constructor() {
        this.name= "Polygon";
    }
}
class Triangle{
    constructor(){
        this.name= "Triangle";
    }
}
class Square extends Polygon{
    constructor() {
        super();
    }
}
Object.setPrototypeOf(Square, Triangle)
const newSquare= new Square();
console.log("09.", newSquare instanceof Polygon);
console.log("10.", newSquare instanceof Triangle);
console.log("11.", newSquare.name);
