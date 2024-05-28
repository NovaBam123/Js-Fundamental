/* 
    Promise: Objek yang mewakili nilai yg tidak diketahui saat dibuat, sehingga dapat dibuat penanganan(handler) dg keberhasilan/kegagalan dari suatu aksi asinkron di masa depan. 
    *TIGA STATUS PROMISE:
    1. Pending: proses masih berlangsung.
    2. Fulfilled: proses telah selesai, dan promise memiliki nilai.
    3. Rejected: proses gagal, promise memiliki nilai namun alasan error penyebab kegagalan tersebut.
    *CALLBACK METHODS, instance Metode dalam promise:
    _Then: untuk menentukan apa yg harus dilakukan ketika promise terpenuhi(fulfilled)
        menerima 2argument 
        .then(arg1, arg2):
        -arg1/onFulfilled -> penanganan saat promise terpenuhi.
        -arg2 -> penanganan saat promise ditolak.
    _Catch: menangani situasi ketika promise ditolak. 
        .catch(arg)
        - arg/Onrejected -> hanya satu paremater yang dilewatkan untuk menangani kondisi/alasan promise ditolak.
    _finally: 
        -method ini dipanggil baik itu dalam keadaan terpenuhi atau ditolak. contoh seperti membersihkan resources atau menyembunyikan indicator pemuatan(loading spinner).
        tidak ada parameter yang dilewatkan.
    *EVENT LOOP AND MICROTASK QUEQUE: 
        - snycronous code dijalankan terlebih dahulu.
        - callback dari promise ditempatkan dalam microtask dan dijalankan setelah syncronous code selesai.    

    _Promise.all() bermanfaat ketika Anda membutuhkan semua janji terpenuhi dan hanya satu penolakan saja akan menyebabkan seluruh operasi gagal.
    _Promise.any() bermanfaat ketika Anda hanya membutuhkan satu janji terpenuhi dan tidak peduli yang mana.
    _Promise.race() bermanfaat ketika Anda membutuhkan hasil dari janji pertama yang selesai, baik itu berhasil atau gagal.
    _Promise.allSettled() bermanfaat ketika Anda ingin mengetahui hasil dari semua janji, tanpa mempedulikan apakah mereka berhasil atau gagal.    
*/
function calculator4(a, b, callback){
    console.log("01. Waiting...")
    setTimeout(()=> {callback(a+ b)}, 100);
}
function display4(something){console.log("02.", something)}
calculator4(5, 8, display4)

const promise1= new Promise((resolve, reject) => {
    let isError= false;
    if(isError) {
        reject("Error") // false
    } else {
        reject("Promise1 Success") // true
    }
})
promise1
    .then(res=> console.log("03.", res))
    .catch(err=> console.log("04.", err))
    .finally(()=> console.log("05.", "Finally done"))

const promise2= new Promise((resolve, reject)=> {
    let isResolve= true;
    if(isResolve) resolve("Promise2 Success")
    else resolve("Error")
})
promise2 
    .then(res=> console.log("06.", res))
    .catch(err=> console.log("07.", err))
    .finally(()=> console.log("08.", "Finally done"))
console.log("09. Synchronous code finished");    

/*  PROMISE RESOLUTION/ RESOLUTION CHAINING
    -kondisi dimana promise lain mengikuti state/kondisi promise lain, (sebuah promise di-resolve dengan promise lain).
    CHAINING PROMISES: 
    - mengacu pada penggunaan .then, .catch dan finally
*/
let promiseA= new Promise((resolve, reject)=> {
    setTimeout(()=> resolve("A is resolved"), 500)
});
promiseA
    .then(res=>console.log("09.",res))
    .catch(err=>console.log("10.", err))

let promiseB= new Promise((resolve, reject)=>{
    resolve(promiseA);
})
promiseB
    .then(res=>console.log("11.", res))
    .catch(err=>console.log("12", err));

/* THENABLES 
    thenables sebagai pengganti promise dan dapat berinteraksi (resolution chaining) dengan promise.
*/
let myObj= {
    then(resolve, reject){
        resolve("Finished..")
    }
}
Promise.resolve(myObj).then(function(val){
    console.log("13.",val)
})

const aThenable= {
    then(onFulfilled, Onrejected){
        onFulfilled({
            then(onFulfilled, onRejected){
                onFulfilled(42)
            }
        })
    }
}
Promise.resolve(aThenable).then(res=>console.log("14.", res))

// PROMISE RESOLUTION PADA THENABLE
let obj= {
    then(resolve, reject){
        resolve("finished...!")
    }
}
let promiseObj= new Promise((resolve, reject)=>{
    resolve(obj)
})
promiseObj.then(res=> console.log("15.", res))

/*  PROMISE CONCURRENCY
    "kemampuan untuk menjalankan tugas asinkron secara bersamaan." walau js berjalan dalam single threads dg menggunakan metode2 promise, akan dapat mengelola operasi asinkron secara efisien. 
    beberapa method statis dalam promise:
    1. Promise.all(): "menunggu semua promise dalam iterable utk terpenuhi(fulfilled), jika salah satu promise rejected, maka promiseAll akan menolak juga. -> Kondisi dimana kita menjalankan beberapa tugas asinkron secara pararel dan hanya melanjutkan setelah semua selesai.
    Promise.all([promise1, promise2, promise3])
    .then(val=> console.log(val))
    .catch(err=>console.error(err))


    2. Promise.allSettled(): "Menunggu semua promise untuk settle(baik fulfilled ataupun rejected" -> untuk mengetahui status akhir dari semua promise tanpa mempedulikan promise terpenuhi atau ditolak.
    Promise.allSettled([promise1, promise2, promise3])
        .then(res=> console.log(res))

    3. Promise.any(): ketika salah satu promise dalam iterable terpenuhi. jika semua promise ditolak maka promise.any() akan menolak.
    -> untuk skenario dimana kita hanya memerlukan satu tugas untuk berhasil dan tidak peduli mana yang lebih dahulu.


    4. Promise.race(): ketika salah satu promise settle terlebih dahulu.
    -> ketika ingin melanjutkan setelah salah satu dari beberapa tugas selesai, baik terpenuhi atau ditolak.   
    SUBCLASSING PROMISE:
    Subclass dari promise dengan semua metode statis diatas.
    PROMISE STATIC:
    4 method diatas ditambah: 
    5. promise.reject(): "Mengembalikan hasil berupa alasan sebuah promise ditolak(rejected)"
    6. promise.resolve(): "mengembalikan hasil promise yang terpenuhi dg nilai yang diberikan."
*/
// Subclass Promise
class MyPromise extends Promise{
    constructor(executor){
        super(executor);
    }
    static resolve(val){
        return new Promis((resolve)=> resolve(val))
    }
}

// CONTOH PROMISE DENGAN SITUASI YANG BERAGAM/LUAS
const THRESHOLD_A= 8;
function tetheredGetNumb(resolve, reject){
    setTimeout(()=> {
        const randomInt= Date.now();
        const value= randomInt% 10;
        if(value< THRESHOLD_A){
            resolve(value)
        } else {
            reject(`Too large: ${value}`)
        }
    }, 300)
} 
function determineParity(value){
    const isOdd= value% 2 === 1;
    return { value, isOdd }
}
function troubleWithGetNumber(reason){
    const err= new Error("Trouble getting number", {
        cause: reason});
        console.error("16.", err);
        throw err;
}
function promiseGetWord(parityInfo){
    return new Promise((resolve, reject)=> {
        const { value, isOdd }= parityInfo;
        if (value >= THRESHOLD_A- 1){
            reject(`Still too large: ${value}`)
        }else {
            parityInfo.wordEvenOdd= isOdd? "odd" : "even"
            resolve("parityInfo")
        }
    })
}

new Promise(tetheredGetNumb)
    .then(determineParity, troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info)=> {
        console.log("17. Got:", info.value, info.wordEvenOdd);
        return info;
    })
    .catch((reason)=> {
        if(reason.cause){
            console.error("18. Had previously handled error")
        }else {
            console.error("19. Trouble with promiseGetWord():", reason)
        }
    })
    .finally((info)=> console.log("20. All Done"));