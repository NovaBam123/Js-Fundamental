/*
    Sebuah concurrent method statis pada object promise yang digunakan untuk menangani beberapa janji(promise) secara bersamaan. Method ini menerima sebuah iterable promise dan mengembalikan satu janji baru.
    Syntax: 
    Promise.all(iterable); 
    iterable ini umumnya dalam bentuk array. namun bisa juga dalam bentuk 
    -set atau map selama setiap element didalam-nya adalah sebuah promise atau dapat dikonversi kedalam promise.  
    -string
    -Nodelist atau [symbol.iterator].
*/
const promise1= Promise.resolve(3)
const promise2= Promise.reject(42); //jika =42 nilai bukan janji, akan diperlakukan sebagai janji yg langsung fulfilled.
const promise3= new Promise((resolve, reject)=> {
    setTimeout(resolve, 100, "foo");
})
Promise.all([promise1, promise2, promise3]).then((val)=> console.log("01.", val))
.catch((error)=> console.log("02.", error))

// Terpenuhi secara sinkron jika iterable yang dilewatkan kosong
// Promise.all([]).then(val=> {console.log("03.", val)})

/* Fulfilled secara asinkron ketika semua janji dlm iterable terpenuhi
    - Promise yang fulfilled dikembalikan secara asinkron, dengan nilai berupa array dan urutan yg sama dengan urutan janji dalam iterable, walaupun urutan penyelesain berbeda.
*/
const a= Promise.resolve(3)
const b= new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, "foo")
})    
const c= 42;
Promise.all([a, b, c]).then((val)=>console.log("04.", val))
.catch((error)=> console.log(error))

// jika iterable mengandung nilai yang bukan promise, mereka diabaikan namun tetap menjadi nilai kembalian dalam array promise.
const p1= Promise.all([1, 2, 3]); //berisi nilai bukan promise
const p2= Promise.all([1, 2, 3, Promise.resolve(444)]);
const p3= Promise.all([1, 2, 3, Promise.reject(555)]);
p1.then(val=>console.log("05.", val)).catch(err=>console.log(err))
p2.then(val=>console.log("06.", val)).catch(err=>console.log(err))
p3.then(val=>console.log(val)).catch(err=>console.log("07.", err))

//Asynchronous dan synchronous dalam promise all
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
const p = Promise.all(resolvedPromisesArray);
console.log("08.",p); // pending menandakan kode dijalankan scr asinkronise
setTimeout(() => {
  console.log("09. the queue is now empty");//setelah antrian kosong dan tugas sinkron selesai, maka status promise di eksekusi.
  console.log("10.",p);
});

