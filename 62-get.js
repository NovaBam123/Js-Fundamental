/*  
    Berfungsi untuk "mendefinisikan property yang dapat diambil nilai-nya, meskipun property dari object tersebut dihitung secara dinamis.
    Syntax: 
    - { get prop(){ ... }}
    - { get [expression](){ ... }}
    - ( getter tidak boleh memiliki parameter, hanya boleh memiliki nama dan blok kode yang mengembalikan nilai. )
    - getter dapat didefinisikan menggunakan string literal, number literal atau identifier. kita dapat menentukan nama properti getter-nya sebagai string ini berlaku saat get merupakan properti dari object-nya secara langsung.
*/
const obj= {
    arr: ["a", "b", "c"],
    get latestArr(){ // sebenarnya get()-> kita nama-i latestArr 
        return this.arr[this.arr.length- 1]
    } 
}
console.log("01.", obj.latestArr);

// concatenation sebagai expresi nama property
const prefix= "latest"
const obj2= {
    arr: ["a", "b", "c"],
    get [prefix + "Item"]() {
        return this.arr[this.arr.length- 1]
    }
}
console.log("02.", obj2.latestItem);

//01. Getter utk nilai yg dihitung dinamis:
const person= {
    firstName: "John",
    lastName: "Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log("03.", person.fullName);

/* 02. Getter sbg Aksesor Property:
    data property: data yg menyimpan nilai.
    accessor property: property yg mendifinisikan fungsi untuk mengambil dan mengatur nilai.    
*/
const nilai= {};
let value= 0;
Object.defineProperty(nilai, "prop", {
    get: function() {
        return value++
    }
})
console.log("04.", nilai.prop);
console.log("05.", nilai.prop);

/* Perbedaan Object.defineProperty() dan defineProperties()
    - Keduanya berfungsi untuk mendefinisikan property dengan konfigurasi yang lebih rinci, saat menentukan getter, setter, enumerable, configurable, dan writeable.
    - jika defineProperty: untuk merubah satu prop pd object sedangkan bentuk jamak-nya untuk beberapa property sekaligus.   
*/
// Object.defineProperty
const obj3 = {};
let value2 = 2;
Object.defineProperty(obj3, "prop", {
  get: function() {
    return value2++;
  }
});
console.log("06.", obj3.prop);

// Object.defineProperties
const obj4= {};
let value3= 3;
Object.defineProperties(obj4, {
    "prop1": {
        get: function(){return value3++},
        writeable: true
    }, 
    "prop2": {
        value: "Hello",
        writeable: false
    }
})
console.log("07.", obj4.prop1);
console.log("08.", obj4.prop2);

// Menambah property pada object yang sudah berisi property
const ob= {a: 1};
Object.defineProperty(ob, "b", {
    get() {return this.a+ 9 }
})
console.log("09.", ob.b);

// Menghapus getter dengan Delete
const alphabet= {
    arr: ["a", "b", "c"],
    get latest(){
        return this.arr[this.arr.length -1]
    }
}
console.log("10.", alphabet.latest);
console.log("11.", Object.keys(alphabet));
delete alphabet.latest;
console.log("12.", Object.keys(alphabet));
console.log("12.1.", alphabet.latest);

/*  Lazy Getter
    teknik lazifying adalah tehnik menunda nilai property obj hingga prop tersebut diakses.
    1.  Getter dalam penundaan perhitungan nilai(Defers Cost)
        Getter memberikan cara untuk mendefinisikan properti object tanpa menghitung nilai-nya sampai prop tsb diakses.
    2.  Getter Cerdas(Smart Getters/Memoized Getter)
        Tehnik ini melibatkan memorisasi(caching) nilai prop yg telah dihitung agar dapat diakses kembali tanpa perlu menghitung nilai-nya. Nilai prop dihitung saat Getter pertama kali dipanggil, kemudian disimpan dalam cache untuk akses berikut-nya. manfaat hal tsb: 
        - Jika perhitungan nilai prop memakan waktu dan sumber daya yg besar(RAM, CPU, thread worker, mengambil file, remote dll)
        - Jika nilai prop tidak dibutuhkan saat ini, namun digunakan nanti.
        - Jika nilai prop diakses beberapa kali, dan kita tidak perlu menghitung ulang, selama nilai tersebut tidak berubah.

    const obj= { 
        get notifier(){
            delete this.notifier;
            this.notifier= document.getElementById("bookmarked-notification-anchor");
            return this.notifier;
        }
    }
*/

/*  Get vs Object.defineProperty/ defineProperties
    - get: akan menempatkan-nya pada prototype instance.
    -defineProperty: akan menempatkan-nya langsung pada instance.
    maksudnya: dengan metode Get: maka property tersebut dapat diakses oleh semua instance dari class tersebut.
    sedangkan defineProperty membuat property pada instance specific yang tidak dapat diakses oleh objek instance yg lain.
*/
class Example {
    get hello(){
        return "World"
    }
}
const obj5= new Example();
console.log("13.", obj5.hello);
console.log("14.", Object.getOwnPropertyDescriptor(obj, "hello"));
console.log("15.", Object.getOwnPropertyDescriptor(obj), "hello");

class MyGet{
    get myProp(){
        return "Nilai A";
    }
}
const obj6= new MyGet();
console.log("16.", obj6.myProp);

class MyDefine{
    constructor(){
        Object.defineProperty(this, "myProp", {
            get: function(){
                return "Nilai B"
            }
        })
    }
}
const obj7= new MyDefine();
console.log("17.", obj7.myProp);

// USING GETTER DALAM CLASSES
class WithGetSet{
    #msg= "hello world";
    get msg(){
        return this.#msg
    }
    set msg(x){
        this.#msg= `Hello ${x}`
    }
}
const subGetSet= new WithGetSet();
subGetSet.msg= "Andi"
console.log("18.", subGetSet.msg);