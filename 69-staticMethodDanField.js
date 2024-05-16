/*  STATIC-STATIC METHODS AND STATIC FIELD
    - Static method banyak digunakan untuk utility function, dimana static property berguna sebagai catches, dan configurasi yang tetap, dan data2 yang tidak membutuhkan pembuatan instance obj.
    - Static hanya dapat diakses oleh class itu sendiri dan tidak dapat diakses oleh instance class-nya.
    Syntax:
    - class ClassWithStatic{
        static staticField;
        static staticFieldWithInitializer= value;
        static staticMethod(){
        }
    }
*/
class WithStatMethod{
    static statProp= "Data";
    static statMethod() {
        return "Static method dipanggil"
    }
    static {
        console.log("01. Blok inisiasi dipanggil");
    }
}
console.log("02.", WithStatMethod.statProp);
console.log("03.", WithStatMethod.statMethod());

/* 
    Public Static Field:
    - Deklarasi: Property dideklarasi dengan menggunakan kata kunci "static"
    - Penambahan: Properti static ditambahkan ke constructor kelas pada saat evaluasi kelas menggunakan semantic/konsep [[DefineOwnProperty]] yg pada dasarnya menggunakan "Object.defineProperty()"
    - Penggunaan: Jika sebuah properti hanya ada satu kali dalam class bukan pada setiap instance, seperti untuk configurasi, catch, atau data lain yang tidak perlu direplica dalam instance.
    - Inisiasi: Property static dapat langsung memberikan nilai/"value" pada awal deklarasi.
    - Perilaku: jika inisiasi tidak ada, inisiasi berupa undefined.
    - Perubahan pada Subclass: Properti static tidak diinisiasi kembali pada subclass tapi masih dapat diakses melalui rantai prototype.
    - Computed Properties: [Prefix] dapat dihitung;
    - This: Nilai This dalam expresi yang dihitung adalah this yang mengelilingi definisi kelas dan mengacu pada nama class akan menyebabkan ReferenceError karana kelas belum diinisiasi. 
    class MyClass{
        static [this.name]= 42
    }
    console.log(MyClass.myProp)-> reference Eror atau
    class MyClass2{
        static[prefix+ "Property"]= 42
    }
        - await dan yield: berfungsi pada static.
    Static Method:
    - Penggunaan: Digunakan dalam hal utiliti, seperti fungsi untuk membuat dan mengkloning instance.
    -Untuk prop & method static dan non statis diwariskan pada subclass
    -Namun untuk field declaration tidak diwariskan saat itulah dibutuhkan constructor dan kata kunci super() untuk hal tersebut dapat diakses oleh subClass.
*/
class WithStatField{
    static dataField;
    static dataInitializer= "Data statField"
}
class SubWith extends WithStatField{
    static subData= "Subclass data"
}
console.log("04.", Object.hasOwn(WithStatField, "dataField"));
console.log("05.", WithStatField.dataInitializer);
console.log("06.", SubWith.dataInitializer);
console.log("07.", SubWith.subData);

/* 
  - Dalam static field initializer, this mengacu pada class tsb(dimana kita bisa mengakses juga dg nama class-nya)
  - super() mengacu pada constructor dari base class.
*/
class WithThis{
    static dataInitializer= "baseStatic data";
    static dataWithThis= this.dataInitializer
    static baseMethod(){
        return "baseData static method"    
    }
}
class WithSuper extends WithThis{
    static subData= super.baseMethod()
}
console.log("08.", WithThis.dataWithThis);
console.log("09.", WithSuper.subData);

// Memanggil anggota static dari static method static lain menggunakan kata kunci this.

class StatMethodCall{
    static statProp= "Data static1";
    static statMethod1() {
        return `Static method1 and ${this.statProp} called`
    }
    static statMethod2(){
        return `${this.statMethod1()} from statMehod2`
    }
}
console.log("10.", StatMethodCall.statMethod1());
console.log("11.", StatMethodCall.statMethod2());

// Memanggil anggota static dari sebuah constructor dan method biasa
class OtherCall{
    constructor(){
        console.log("12.", OtherCall.statProp);
        console.log("13.", this.constructor.statProp);
        console.log("14.", OtherCall.statMethod());
        console.log("15.", this.constructor.statMethod());
    }
    static statProp= "DataStatic2"
    static statMethod(){
        return `static method otherCalled has been called `
    }
}
new OtherCall()
console.log("16.", OtherCall.statMethod())


class Point{
    constructor(x, y){
        this.x= x;
        this.y= y
    }
    static displayName= "Hypotenusa"
    static distance(height, width){
        const sideA= height.x- width.x
        const sideB= height.y- width.y
        return (Math.hypot(sideA, sideB)).toFixed(2);
    }
}
const p1= new Point(5, 5);
const p2= new Point(10, 10);
console.log("01.", p1.displayName);
console.log("02.", p2.distance)
console.log("03.", Point.displayName);
console.log("04.", Point.distance(p1, p2));

// Contoh Penggunaan Static pada class selain singleton
class Counter{
    static #count= 0;
    constructor(){
        Counter.#count++
    }
    static getCount(){
        return Counter.#count
    }
}
const instance1= new Counter();
const instance2= new Counter();
console.log("05.", Counter.getCount());

class Setting{
    static #config= {theme: "light", languange: "en"}
    static getConfig(key){
        return Setting.#config[key];
    }
    static setConfig(key, value){
        Setting.#config[key]= value;
    }
}
console.log("06.", Setting.getConfig("theme"));
Setting.setConfig("theme", "dark");
console.log("07.", Setting.getConfig("theme"));