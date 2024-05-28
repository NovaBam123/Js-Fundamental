/*  BLOK INISIASI STATIS
    berfungsi untuk mengeksekusi kode hanya sekali saat kelas diinisiasi.
    Syntax:
    -Class Bis{
        static{...}-> Acess to private static diperbolehkan.
    }
    -dapat mengakses privat prop.
    dalam class bisa terdapat beberapa BIS dan dievaluasi sesuai urutan.
*/
class ClassWithSIB{
    static statProp1= "prop1";
    static statProp2;
    static{
        this.statProp2= "prop2"
    }
}
console.log("01.", ClassWithSIB.statProp1);
console.log("02.", ClassWithSIB.statProp2);

// Multyple Blocks inisiasi static(BIS)
class Multy{
    static field1= console.log("03. statField1");
    static{ console.log("04. statBlok1")};
    static field2= console.log("05. statField2");
    static{ console.log("06. statBlok2");}
}

// CARA MENGAKSES STATIC FIELD DENGAN THIS PADA BIS
class A{ 
    static field= "data statField"
    static{ console.log("07.", this.field)}// tidak disarankan
}

// MENGAKSES STATIC FIELD DG SUPER DALAM BIS
class B{
    static field= "My Static using super"
}
class C extends B{
    static{
        console.log("08.", super.field);//ini tidak disarankan
    }
}

// CARA YANG BENAR DALAM MENGAKSES STATIC FIELD DALAM BIS
class F{
    static data= "data1";
    static{ console.log("09.", F.data) }
}
// BAIK SUBCLASS ATAU KELAS LAIN DAPAT SALING MENGAKSES STATFIELD MASING2. NAMUN SEBAGAI CATATAN STATIC FIELD INI DIAKSES DENGAN CLASS ITU SENDIRI
class G{
    static data= "data2";    
}
class G1 extends G{
    static{ console.log("10.", G.data)}
}
console.log("10.1", G1.data);// Prop static superClass diwariskan ke subClass

// BIS UNTUK AKSES PRIVATE PROPERTIES
let getHPrivateField;
class H{
    #privateField;
    constructor(v){
        this.#privateField= v
    }
    static{
        getHPrivateField= (H)=> H.#privateField;
    }
}
console.log("11.", getHPrivateField(new H("Private")));

class Configuration{
    static PORT; //-> static properties
    static HOSTNAME;
    static DATABASE_NAME;
    static{ //-> BIS(blok inisiasi statis)
        try{ 
            const config= loadConfigFromFile();
            Configuration.PORT= config.port;
            Configuration.HOSTNAME= config.hostname;
            Configuration.DATABASE_NAME= config.database; 
        } catch(error){
            console.log("Failed to Load Config:", error);
        }
    }
}
function loadConfigFromFile(){
    return{
        port: 8080,
        hostname: "localhost",
        database: "mydb"
    }
}
console.log("02.", Configuration.PORT);
console.log("03.", Configuration.HOSTNAME);
console.log("04.", Configuration.DATABASE_NAME);

/*  STATIS PROPERTIES/FIELDS DAN STATIS METHOD
    -Encapsulation: prop statis hanya dapat diakses dan dirubah oleh metode statis dalam kelas yang sama.
    -Lazy initialization: konsep ini digunakan pada metod getConnetion, dimana koneksi database diinisiasi hanya saat dibutuhkan pertama kali. (pengehematan sumber daya)
    -Singlton Pattern: -> hanya ada satu instance Database yang dibuat untuk seluruh aplikasi dg static property untuk seluruh koneksi.
*/
class DB{
    static #connection= "";
    static #initializeConn() {
        const randomNum= Math.ceil(Math.random()* 10);
        DB.#connection= `New Database Connection ${randomNum}`
    }
    static getConnection(){
        if(!DB.#connection){
            DB.#initializeConn();
        }
        return DB.#connection
    }
}
console.log("05.", DB.getConnection());
console.log("06.", DB.getConnection());


class Animal {
    kingdom = "Animalia";
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    // Tidak ada constructor atau kata kunci super() di sini
    bark() {
      console.log("Woof!");
    }
  }
    // Membuat instance dari subclass
  const myDog = new Dog();
  
  // Mengakses properti statik dan metode dari superclass
  console.log(Dog.kingdom); // Output: "Animalia"
  myDog.makeSound(); // Output: "Some generic sound"
  
  // Memanggil metode dari subclass sendiri
  myDog.bark(); // Output: "Woof!"
  