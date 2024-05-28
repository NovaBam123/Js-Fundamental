/*
    Await operator digunakan untuk menunggu sebuah promise dan mendapatkan hasil terpenuhi atau reject. ketika menggunakan await eksekusi fungsi yg mengandung "await" akan berhenti sampai Promise tersebut selesai(fulfilled atau rejected)

    Hanya dapat digunakan didalam async function.
    Syntax:
    -await expression
    PARAMETER:
    _Sebuah promise, thenable object, ataupun nilai apapun untuk ditunggu.
    RETURN VALUE:
    _NIlai fulfilled dari sebuah promise atau thenable object atau jika expressi bukan merupakan object thenable maka nilai expresi itu sendiri.
    EXCPETIONS:
    _Melempar alasan reject jika promise atau thenable tersebut ditolak.
*/
/*  PROMISE NATIVE (PROMISE CONSTRUCTOR) -> then optional digunakan.
    MENUNGGU PROMISE UNTUK FULFILLED
*/
function getNumber(){
    return new Promise(resolve=> setTimeout(()=>resolve(42), 300))
}
async function main(){
    let number= await getNumber();
    try {
        console.log("hasil:", number);
    } catch (err) {
        console.log("terjadi kesalahan:", err);
    }    
}
main();

// THENABLE OBJECTS (OBJECT YG MEMILIKI METHOD THEN-> diresolve seperti halnya Promise native dapat menggunakan kt kunci await.
async function f() {
    const thenable= { then(resolve, reject){
        resolve("resolved!")
    }}
    console.log("06.", await thenable)
}
f()

// THENABLE DAPAT JUGA UNTUK REJECT: 
async function f2(){
    const thenable= { then(_, reject){
        reject(new Error("error at thenable..!"))
    }}
    try {
        await thenable;
    } catch(err){
        console.log("07.", err)
    }
}
f2()

/*  KONVERSI KEDALAM PROMISE
    Jika nilai dalam await bukan promise, maka nilai tersebut dikonversi otomatis oleh await, dan menjadi nilai promise yg resolve.
*/
async function f3(){
    const y= await 20;
    console.log("04.", y);
    const obj= { name: "John"}
    console.log("08.", (await obj) === obj);
}
f3();

/* HANDLING REJECTED PROMISES 
sifat catch ini: 
_menangani error yang terjadi saat promise ditolak namun tidak dapat menangani error yang dilempar secara sinkron sebelum promise dikembalikan.
sifat try and Catch:
_menangani semua jenis error secara sinkron dan asinkron.

contoh catch yg tidak dapat menangani error saat promise melempar secara sinkron sebelum mengembalikan promise:
const throwErr=()=>{
    throw new Error("Synchronous error!");
    return Promise.reject(new Error("Async error!"))
}
throwErr().catch(err=> console.error("Caught error:", err.message))

WITH CHAINING CATCH*/
async function example(){
    const promisedFunc=()=> Promise.reject(new Error("Error at PromisedFunc"))
    const result= await promisedFunc()
    .catch(err=> { console.log("05. Caught Error:", err.message) 
        return {"error": err.message}
    })
    console.log("09.", result);
}
example()

/* TOP LEVEL AWAIT
    "Kemampuan untuk menggunakan await ditingkat atas modul tanpa harus menggunakan async function contoh pada file 87-parentModul.js", function async diexport dari child module.js 
    _ modul tersebut akan menunggu promise sebelum melanjutkan eksekusi kode setelah await. semua kode dibawah await akan menunggu promise diselesaikan bahkan yang tidak berhubungan dengan hasil promise tersebut.
    _ namun modele lain tidak akan menunggu promise lain dalam file ini.
*/

// CONTROL FLOW EFFECT OF AWAIT -> error handling with async await.
async function foo(name) {
    console.log("01. start", name);
    await console.log("02. middle", name);
    console.log("03. end", name);
}
foo("first")
foo("second")
 

