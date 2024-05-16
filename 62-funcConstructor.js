/*  - Fungsi yang digunakan untuk membuat banyak objek dengan tipe yang sama.
    - Fungsi yang dibuat untuk fungsi tersebut bersifat dinamis berdasarkans string sebagai argumen.
*/
// Sebagai Object constructor 
function Person(name, age){
    this.name= name;
    this.age= age;
}

// Menambah property 
Person["greet"] = function(){
    console.log("05.", "Hello")
}
let person1= new Person("andi", 30);

/*  Menambah properti untuk instance tertentu dan global;
    -untuk menambah property untuk keseluruhan instance digunakan "prototype"
*/
person1["email"]= "andi@mail.com";
Person.prototype["work"]= "PT. Mentari"

console.log("01.", person1.name);
console.log("02.", person1.age);
console.log("03.", person1.email);
console.log("04.", person1.work);
console.log("04.1", Object.keys(person1));//Akses nama semua prop object.
Person.greet();

/* Penambahan method sebaiknya dilakukan pada keseluruhan instance Person dengan menggunakan prototype, bukan pada instance objek khusus seperti person1 karena akan membuat kinerja aplikasi berlebihan
*/
person1["introduce"]= function(){
    console.log("06.", "Hai My Name is "+ this.name);
}// ini sebaiknya tidak dilakukan
person1.introduce();

/*  Optional Chaining
    Mengakses property object yg mungkin tidak ada tanpa menyebabkan error.
    Syntax: 
    - obj?.prop
    - obj?.[expression]
    - obj?.method()
    Jika dalam pemanggilan method belum ada instance object yang dibuat maka kode akan error.
*/ 
function Member(name, age, introduceSelf){
    this.name= name;
    this.age= age;
    this.introduceSelf= introduceSelf
    this.greeting= function(){console.log("08.", "Hai");}
}
let member= null;
//console.log("08.", MyObj.name); undefined
let member1= new Member("Budi", 40)
console.log("07.", member1?.name)
member1.greeting();
member1?.task?.();
console.log("07.1", Object.keys(member1));// method terdisplay karena dalam function constructor.

/*  namun kode diatas tidak disarankan karena setiap instance   object dibuat maka js membuat salinan method untuk setiap object.
    Disarankan dengan menggunakan prototype object.
*/
function Member2(name){
    this.name= name
}
Member2.prototype.greeting= function(){console.log("09.", "Hello");}
const member2= new Member2("Cindy", "...")
Member2.prototype.greeting(); //constructor function
member2.greeting(); //instance object

// Prototype pada Object
function Member3(name, age){
    this.name= name;
    this.age= age;
}
Member3.prototype.greet= function(){
    return "Hi!, my name is "+ this.name+ ".";
}
const member3= new Member3("Danu", 45);
console.log("10.", member3?.greet?.());

/*  AKSES PROPERTY DALAM OBJEC DG OBJECT.KEYS() & FOR IN
    -Object.keys()-> hanya mengembalikan hasil property yang dimiliki oleh object itu sendiri.
    -for in-> prop komplit-nya
*/    
console.log("11.", Object.keys(member3));

// for in akan mendisplay property yg lngsng dimiliki oleh object ataupun dari prototype-nya
for(let key in member3){
    console.log("12.", key+": "+member3[key]);
}



