/*  
    Fungsi yang dieksekusi setiap kali ada upaya untuk merubah properti sebuah obj.
    -sering digunakan bersama getter untuk mengontrol dan manipulasi data pd obj.
    
    Syntax: 
    - { set prop(val){ ... } };
    - { set [expression](val){ ... }}
    - setter hanya boleh memiliki satu parameter.
    
    -sama halnya dg getter fungsi setter dapat diikat menggunakan nama prop berupa string literal, number literal dan identifier.
    -Data property: property berupa nilai langsung seperti: string, angka, boolean, objek.
    -Accesor property: prop yg tidak memiliki nilai langsung, tetapi memiliki getter dan setter function untuk mengakses atau mengatur nilai.
    -Object.defineProp: metode yg memungkinkan menetapkan/mengubah property baru yang kosong dan sudah ada dalam obj baik itu data prop atau aksesor prop.
*/
const person= {
    _name: " ",
    get name(){ return this._name },
    set name(newName){
        console.log("01.", "Setting New Name:", newName);
        this._name= newName
    }
};
person.name= "John"
console.log("02.", person.name);

const language= {
    set current(name){ 
        this.arr.push(name);
    },
    arr: []
}
language.current= "EN";
console.log("03.", language.arr);
language.arr= ["IND"];
console.log("04.", language.arr);

/*  Menggunakan Setter dalam class
    dalam class kita tidak membutuhkan koma antara prop dan method.

    Privatisasi property:
    -underScore("_"): konvensi lama
    -tandaPagar("#"): ECMAScript 2020, dan lebih formal.
    Setter dalam class:
    1. Setter prop defined on the Prototype prop
        setter secara efektif didefinisikan pada property prototype kelas, sehingga semua instance memiliki akses ke setter yang sama.
    2. Setter prop are not Enumerable:
        property setter tidak akan terhitung ketika objek kelas di iterasi menggunakan Object.keys() dan for in.
    3. Syntax setter statis dan setter privat memiliki kesamaan.         
*/

// MENGGUNAKAN SETTER DALAM CLASS
class GetSet{
    #msg= "hello world";
    get myMsg() { return this.#msg }
    set myMsg(x) { 
        console.log("06. Setting New msg:", x);
        this.#msg= `Hello ${x}`}
}
const instance= new GetSet();
console.log("05.", instance.myMsg);
instance.myMsg= "Food!"
console.log("07.", instance.myMsg);

// Defining a setter on existing obj using defineProperty
const obj= { a: 0}
Object.defineProperty(obj, "b", {
    set(n){ return this.a= n/2}
})
obj.b= 10;
console.log("08.", obj.a);
