/*
   Blok try..catch dan finally :
   try: 
   _blok yang berpotensi menimbulkan error dan blok yg dieksekusi terlebih dahulu.
   catch: 
   _jika terjadi error eksekusi berpindah keblok ini, menangkap informasi kesalahan tersebut.
   finally: 
   blok yang akan selalu dieksekusi. 
   
   Syntax: 
   - try{ 
    tryStatement
   } catch (execptionVar){
    catchStatement
   } finally {
    finallyStatement
   }
   
   _ tanpa variable untuk menangkap informasi error atau dengan identifier catch(err)
   contoh: 
   try {
      nonExistentFunc()
   }catch {
       throw new Error("fungsi-nya gaib..!")      
   }
*/
/* CATCH BINDING
   _Ketika sebuah pengecualian dilempar/"Throw" variable exceptionVar akan memegang nilai "exception" tersebut.
   _Hanya tersedia dalam "scope" tersebut.
   _destructuring pattern: tidak harus menggunakan identifier tunggal, namun dapat menggunakan pola destructuring.
   _Binding yang dibuat dalam Catch sbg execeptionVar tidak boleh memiliki nama yang sama dalam scope tersebut:
   catch(e){let e:}
   _Binding execepition bersifat writeable/dapat dirubah
   _Exception pada catch sifatnya optional.
*/
try{
    throw new TypeError("Oops")
} catch({name, message}){
    console.log("01.", name);
    console.log("02.", message);
}

// WriteAble Binding
try{
    throw "An Error occured"
} catch(e){
    if(typeof e=== "string"){
        e= new Error;
    }
    console.log("03.", e)
}


/* FINALLY BLOCK
    _Jika ada pernyataan alur kontrol seperti "return", "throw", "break", dan "continue" di dalam blok try atau catch, maka blok finally akan dieksekusi sebelum pernyataan tersebut.
    _Jika sebuah pengecualian dilempar dari blok "try" bahkan ketika tidak ada blok catch untuk menangani pengecualian tsb, blok finally tetap akan dieksekusi. Pengecualian akan dilempar kembali setelah blok finally selesai dieksekusi.
*/
function test(){
    try{
        return 1;
    } finally {
        return 2;
    }
}
console.log("04.", test())

// try{
//     throw new TypeError("Typo error..!")
// } finally {
//     console.log("05. This statement still executed.")
// }

// Pernyataan alur kontrol dalam blok finally adalah sesuatu yang dapat menyebabkan perilaku kode yang tidak terduga. blok ini sebaiknya digunakan untuk pembersihan kode yg perlu dijalankan sepert menutup file, mengosongkan sumber daya atau memutus koneksi.
function readFile(){
    let file;
    try{
        file= openFile("/await.js")
    }catch(e){
        console.error("05. File Error:", e.message)
    }finally{
        if(file){
            closeFile(file)
        }
    }    
}
readFile();

// NESTED TRY BLOCK
try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("O6. inner", ex.message);
      throw ex;
    } finally {
      console.log("07. finally");
    }
  } catch (ex) {
    console.error("08. outer", ex.message);
  }
  
  
  