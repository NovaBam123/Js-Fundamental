    
/*  PRIVATE PROPERTY
    properties yang hanya dapat diakses oleh class dimana ia dideklarasikan, instace object dan subclass tidak dapat mengakses prop ini.
    Syntax: 
    Class Private{
        #privateField;
        #privateFieldWithInitializer;
        #privateMethod() {...};
        static #privateStaticField;
        static #privateStaticFieldWithInitializer= 33
        static #privateStaticMethod() {}
    }, Aturan tambahan:
    01. nama yg unik: tidak boleh ada nama yg sama. contoh salah:
      class Example {
        #privateField;
        #privateField;
      }
    02. namespacebersama: Namespace private identifier bersifat bersama antara static properties dan instance. ini berarti bahwa private identifier yang sama tidak bisa digunakan untuk sebuah static prop dan instace prop. namun jika kedua deklarasi menggunakan getter-setter pair, maka private identifier dapat digunakan kembali. contoh salah:
    class Example {
        static #privateField;
        #privateField;
    }
    Pengecualian getter-setter pair:
    class Example {
        static #privateField;
        #privateField
        static get privateField(){
            return Example.#privateField;
        }
        static set privateField(){
            Example.#privateField= value;
        }
        get privateField(){
            return this.#privateField;
        }
        set privateField(){
            Example.privateField= value;
        }
    }
    03. Pengecualian untuk constructor: Private identifier tidak boleh dinamai #constructor.  
    04. Tidak dapat dihapus dg operator "delete"
    class WithPrivate{
        #secret;
        constructor(){
            delete this.#privateField;
            this.#undeclaredPrivate= 42;
        }
    }
    const instance= new WithPrivate()-> Syntax Error
    instance.#undeclaredPrivate-> Sytax Error
*/
class Contoh{
    #privateField;
    constructor(nilai) {
        this.#privateField= nilai;
    }
    dapatkanPrivateField(){
        return this.#privateField
    }
}
const instance= new Contoh(10)
console.log("01.", instance.dapatkanPrivateField());
//console.log(instance.#privateField); SyntaxError
//console.log(Contoh.#privateField); SyntaxError juga

/* Ketika kita mencoba mengakses prop private dari sebuah objek yang tidak memiliki prop obj tersebut, hasil-nya akan "TypeError", hal ini berbeda dengan prop biasa, jika tidak ditemukan akan mengembalikan hasil "undefined"
    Beberapa sifat private:
    1. pre-declared: selalu dideklarasikan sebelumnya dalam class dan tidak dapat dihapus setelah deklarasinya.
    2. Non-inheritence: dapat diakses dalam badan kelas namun tidak diwariskan dalam oleh subclass.
    3, tidak terpengaruh oleh metode Object.freeze() dan Object.seal()
*/
// Fungsi static dapat mengakses private dari class instance-nya, namun dengan nama class tersebut, tidak dg this.
class A{
    #private = 11
    static getPrivate(obj){
        return obj.#private
    }
}
console.log("02.", A.getPrivate(new A()));// ini tidak disarankan lebih baik gunakan method public
// console.log(A.getPrivate({})); //-> Type Error

class B{
    #privateII;
    constructor(privateII) {
        this.#privateII= privateII
    }
    static getPrivate(obj){
        if(#privateII in obj) {
            return obj.#privateII
        } else{
            return "obj must be in instance of E"            
        }
    }    
}    
console.log("03.", B.getPrivate(new B("Foo")));
console.log("04.", B.getPrivate(new B(new Date())));
console.log("05.", B.getPrivate({}));

/* PRIVAT INSTANCE FIELDS
    -Seperti halnya public fields, private instande diinisiasi sebelum constructor berjalan atau segara setelah super() dipanggil dalam subclass. artinya prop privat siap digunakan begitu instance dibuat.
    -dan hanya tersedia dalam instance dari class tersebut
*/
class WithPrivate{
    #token;
    constructor(){
        this.#token= 404
    }
}
class SubPrivate extends WithPrivate{
    #subToken;
    constructor(){
        super();
        this.#subToken= 12
    }
    //method publik untuk mengakses private prop
    getSubToken(){
        return {
            "EsubToken": this.#subToken
        }
    }
}
const subPrivate= new SubPrivate
console.log("06.", subPrivate.getSubToken());
// subprivate{}-> tanda bahwa prop tersebut tidak dapat diakses dari luar kelas-nya..untuk mengakses prop dan nilai-nya gunakan method public yang mengembalikan private prop tersebut.

/*  RETURNING OVERIDING OBJECT
    constructor dapat mengembalikan obj yang berbeda sehingga digunakan sebagai nilai "this" untuk subClass. maka subClass tersebut mencap property private pada obj yang dikembalikan bahkan jika obj tsb sebelumnya tidak memiliki prop tersebut.
    teknik ini tidak umum dan hanya dapat dilakukan dengan menggunakan Superclass yang anonim.
*/
class Stamper extends class{
    constructor(myObj){
        return myObj
    }
}{
    #stamp= 43
    static getStamp(myObj){
        return {"stamp": myObj.#stamp};
    }
}
const obj= {}
new Stamper(obj);
console.log("07.", obj);
console.log("08.", Stamper.getStamp(obj));
console.log("09.", obj instanceof Stamper);

/*  PRIVATE STATIC FIELD
    -hanya class tempat private berada yang dapat mengakeses field tsb. maka jika kita menggunakan this untuk mengakses-nya akan menyebabkan error.
*/
class PrivateStatic{
    static #pStatField= 13;
    static publicStatMeth(){
        return PrivateStatic.#pStatField;
    }
}
console.log("10.", PrivateStatic.publicStatMeth());

class Cprivate{
    static #secret= 14
    static publicStatMeth(){
        return this.#secret
    }
}
class SubF2 extends Cprivate{
    static getSecret(){
        return Cprivate.publicStatMeth()
    }
}
console.log("11.", SubF2.getSecret());
class SubF extends Cprivate{}
// console.log(SubF.publicStatMeth()); kode ini akan type error

//  CARA YANG SAMA DENGAN PEMANGGILAN METHOD SUPER
class DPrivate{
    static #secret= 404
    static publicStatMeth(){
        return this.#secret
    }
}
class SubD extends DPrivate{
    static callSuper(){
        return super.publicStatMeth()
    }
}
//console.log(SubD.callSuper()) //ini juga akan typeErorr

/*  PRIVATE METHODS
    1. Private Instance Method:
    2. Private Static Method  

    PRIVATE INSTANCE METHODS
    - segera diinisiasi sebelum instance field diinisiasi.
    - hanya tersedia/dapat diakses dalam instance class, bukan pada protoype property-nya. 
    - dapat berupa generator, async, atau async generator functions.
    - juga dapat berupa private getter dan setter. 
*/
class EPrivateMeth{
    #instanceToken(){
        return 15
    }
    publicToken(){
        return this.#instanceToken();
    }
}
const instanceE= new EPrivateMeth();
console.log("12.", instanceE.publicToken());

// Syntax untuk nama Getter harus sama dengan setter-nya.
class WithPrivateAccessor{
    #message;
    get #privateMsg() {
        return `${this.#message}`
    }
    set #privateMsg(str) {
        this.#message= str
    }
    constructor(){
        this.#message="\u{1F44B} Hello World"
        console.log("13.", this.#message);
    }
}
new WithPrivateAccessor();

// Private Method tidak accessible dalam prototype properti-nya, tidak seperti public method pada umumnya
class E{
    #method(){}
    static getMethod(x){
        return x.#method;
    }
}
console.log("14.", E.getMethod(new E()));
// console.log(E.getMethod(E.prototype));

/*  PRIVATE STATIC METHOD
    - Ditambahkan pada class constructor pada saat waktu evaluasi
    -seperti hal-nya static prop public ia hanya dapat diakses oleh class itu sendiri
    -dapat berupa generator, async dan async generator function.
*/
class WithPrivateStatMethod{
    static #myStatic(){
        return 16
    }
    static myPublic(){
        return WithPrivateStatMethod.#myStatic()
    }
}
console.log("15.", WithPrivateStatMethod.myPublic());

/* Penggunaan this pada static Method tidak dapat dilakukan.
*/
class F{
    static #myStatMethod(){
        return 17
    }
    static publicMethod(){
        return this.#myStatMethod();
    }
}
class subF extends F{}
//console.log(subF.publicMethod()); typeError

// MENSIMULASI PRIVATE CONSTRUCTOR
