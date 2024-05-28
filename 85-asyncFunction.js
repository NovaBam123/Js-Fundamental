/*
    Deklarasi Async merupakan kata kunci dalam js untuk menunggu hasil dari sebuah promise. Kata kunci dapat diikat dalam fungsi yg membuat fungsi tersebut mempunyai kemampuan tambahan untuk menangani operasi asynchrounous menjadi tampak seperti serangkaian synchrounous(langkah satu per satu). uUumnya digunakan untuk menghindari promise chain yang rumit.
    Syntax"
    - async function name(param0){ stetement}
    - async function name(param0, param1, /.../, paramN)
    async : pendeklarasian async akan selalu mengembalikan sebuah promise.
    LINE TERMINATOR: KARAKTER BARU DALAM JS TIDAK BOLEH ADA MISAL CONTOH SALAH:
    async
    function name 
    kata kunci ini hanya valid untuk fungsi asynchronous. diluar itu akan Error.
    
    IMPLICIT PROMISE WRAPPING
    jika function asikron mengembalikan nilai yg bukan promise, js akan secara otomatis membungkus nilai tersebut dalam sebuah promise.
    
    AWAIT:
    - kode yang asyncron akan tampak menjadi sinkron.
    - Digunakan untuk menunggu penyelesaian sebuah promise. 
    - nilai dari await: Nilai yang diselesaikan oleh promise.
    Penggunan asyncAwait memungkinkan penggunaan blok 'try and catch' untuk menangani kode asyncrhon untuk menangani kesalahan secara lebih mudah.
*/
function resolveAfter2s(){
    return new Promise(resolve => {
        setTimeout(()=> resolve("Ini resolve"), 50)
    })
}
async function asyncCall(){
    console.log("01. calling");
    const result= await resolveAfter2s();
    console.log("02.", result);
}
asyncCall();

async function foo(){
    let promise1, promise2;
    try {
        promise1= new Promise((resolve, reject)=> {
            let hasil = true;
            if(hasil){
                setTimeout(()=> resolve("1"), 300)
            } else {
                reject("1 rejected")
            }
        })
        promise2= new Promise((resolve, reject)=> {
            let okay= true
            if(!okay){
                setTimeout(()=> resolve("okay"), 200)
            } else {
                reject("it's not okay")
            }
        })  
        let result= await Promise.race([promise1, promise2])
        return result
    } catch(error) {
        throw error
    }
}
foo()
.then(val=> console.log("03.", val))
.catch(err=> console.log("03. rejected:", err))

/*  UNHANDLER PROMISE REJECTION
    Hal ini Ketika sebuah promise ditolak, sebelum (error handling diatur) atau diatur diluar blok fungsi tersebut.
    
    async function foo() {
    const p1= new Promise((resolve, _)=> setTimeout(()=> resolve("ok")), 300)
    const p2= new Promise((_, reject)=> setTimeout(()=> reject("not ok")), 100)
    const result= [await p1, await p2]
    return result
    }
    foo().catch(()=> {})
    
    handling error dilakukan hanya saat pemanggilan async function foo() yang menyebabkan unhandler error.
    untuk menangani hal tersebut dapat digunakan beberapa method:
    _Promise.all()
    _Promise.allSettled() atau best practice adalah dengan:
    _try and catch
*/
// CONTOH UNHANDLER ERROR:
// foo();
function createRejectedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("This promise was rejected");
      }, 300);
    });
  }
async function foo2() {
    const promise = createRejectedPromise();
    await promise; // Tidak ada penangan error di sini
}
  
// SOLUSI
async function withPromiseAll(){
    const p1= new Promise(resolve=> setTimeout(()=> resolve("Ok")), 1000);
    const p2= new Promise((_, reject)=> setTimeout(()=> reject("04. Is not ok")), 1000);
    try {
    const result= await Promise.any([p1, p2]);
    return  result;
    } catch(err) {
        console.log(err);
        throw err;
    }    
}
withPromiseAll()
.then(val=> console.log("04.", val))
.catch(()=> {});

// ASYNC FUNCTION AND EXECUTION ORDER
function resolveIn2s(){
    console.log("04. Slow promise began");
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve("slow")
            console.log("05. Slow promise is done");
        }, 2000)
    });
};
function resolveIn1s(){
    console.log("06. Fast Promise began")
    return new Promise(resolve=> {
        setTimeout(()=> {
            resolve("fast")
            console.log("07. Fast promise is done");
        }, 1000)
    })
};
async function sequentialStart() {
    console.log("== SequentialStart begin");
    const slow= resolveIn2s();
    console.log("08.", await slow)
    const fast= resolveIn1s();
    console.log("09.", await fast);
    console.log("== SequentialWait is Done==");
}
async function sequentialWait(){
    console.log("== SequentialWait starts ==")
    const slow= resolveIn2s();
    const fast= resolveIn1s();
    console.log("10.", await slow);
    console.log("11.", await fast);
    console.log("== SequentialWait is Done")
}
async function concurrent1() {
    console.log("== Concurrent1 began ==")
    const result= await Promise.all([resolveIn2s(), resolveIn1s()])
    console.log("12.", result[0])
    console.log("13.", result[1])
    console.log("== Concurrent1 is Done ==")
}
async function concurrent2() {
    console.log("== Concurrent2 began ==");
    await Promise.all([(async()=> console.log("12.", await resolveIn2s()))(), 
        (async()=> console.log("14.", await resolveIn1s())())
    ])
    console.log("== Concurrent2 is Done")
}
sequentialStart();
setTimeout(sequentialWait, 4000);
setTimeout(concurrent1, 7000);
setTimeout(concurrent2, 10000)