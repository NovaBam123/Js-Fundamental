/*  FIELD DECLARATION-PUBLIC PROPERTIES
    - properti yg mirip data prop object, 
    - dideklarasikan dg nilai atau undefined
    - Syntax: 
    class WithField{
        instancefield;
        instanceFieldWithInitializer= "Instance field"
        static staticField
        staticFieldWithInitializer= "static field"
    }
    -super dalam class subclass tidak dapat digunakan untuk mengakses instance property dari superclass secara langsung, 
*/
// 2 Cara subclass untuk mengakses instance field yang ada di superclass, namun kebalikan-nya untuk instance superclass ia tidak akan dapat mengakses instance dari subclass
class Base{
    baseField= "Battlefield";
    anotherBaseField= this.baseField
    baseMethod(){
        return "base method output"
    }
}
class Derived extends Base{
    // subfield= super.anotherBaseField; ini akan undefined
    subBaseField= "Battlefield II"
    subClassBase= this.subBaseField
    constructor(){
        super();
        this.myField= new Base().anotherBaseField
    }
}
const base= new Base();
const sub= new Derived();
console.log("01.", base.anotherBaseField);
console.log("01.1", base.subClassBase);
// console.log("02.", sub.myField);//super tidak memiliki akses ke instance prop..kecuali jika dia constructor.
const sub2= new Derived();
console.log("02.1", sub2.anotherBaseField);

const PREFIX= "battle"
class WithField{
    field;
    fieldWithValue= "instance field";
    [`${PREFIX}Field`]= "prefixed field"
}
const instance= new WithField();
console.log("03.", Object.hasOwn(instance, "field"));
console.log("04.", instance.field);
console.log("05.", instance.fieldWithValue);
console.log("06.", instance.battleField)

// Computed prop dan field declaration hanya dievaluasi satu kali dalam public field
class C{
    [Math.random().toFixed(2)]= 1// hanya dievaluasi sekali
}
console.log("07.", new C());
console.log("08.", new C());

//Namun field initialize expression dievaluasi setiap instance dibuat.
let initialVal= 0
class Increment{
    myField= initialVal++;
}
console.log("09.", new Increment());
console.log("10.", new Increment());

// Eksekusi kode terjadi dari atas kebawah
class A{
    constructor(){
        console.log("11. A constructor:", this.field);
    }
}
class ADerived extends A{
    field= 1;
    constructor(){
        super();
        console.log("12. Derived from A:", this.field);
        this.field= 2
    }
}
const aDerived= new ADerived();
console.log("13.", aDerived.field);

class B{
    a= 1;
    b= this.c;
    c= this.a +1;
    d= this.c +1;
}
const bInstance= new B();
console.log("14.", bInstance.b);// undefined (kode dievaluasi dari atas ke bawah.)
console.log("15.", bInstance.d);

/* ketika field dideclaration:
    - field tsb tsb dg method [[DefineOwnProperty]]() dibalik layar yg dasarnya sama dg Object.defineProperty(obj, target); perbedaan keduanya, hal yg pertama tidak dpt diakses oleh kode, dan bagian dari engine V8
    - karena hal tsb maka field dec tidak akan memicu dipanggilnya setter dalam superClass
    * sedangkan this dalam constructor melakukan perubahan prop tanpa method tsb sehingga akan memicu pemanggilan setter dalam superclass yang kita buat.
*/
class D {
    set field(val) {
        console.log("16.", val);
    }
}
class DerCwithField extends D{
    field= 4;
}
const derField= new DerCwithField();
class DerwithConstructor extends D{
    constructor(){
        super();
        this.field= 5
    }
}
const derConstructor= new DerwithConstructor();

// Menggunakan Class Field
class E{
    field= new Date().toISOString()
}
console.log("17.", new E())
console.log("18.", new E())

//obj intitializer pada field Declaration
const obj= { count: 0}
class F{
    field= obj.count++
}
console.log("19.", new F().field);
console.log("20.", new F().field);

