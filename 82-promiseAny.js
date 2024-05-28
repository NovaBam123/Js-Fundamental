/*
    Method statis yang menerima iterable promise sebagai input dan mengembalikan satu janji promise baru. Promise ini akan fulfilled ketika salah satu iterable promise fulfilled. 
    -Jika semua error-> 'Agregat Error'
     maka semua error tersebut ditampilkan dalam pengembalian hasil. 
    -promise yang dikembalikan adalah promise fulfilled yang pertama kali terpenuhi.
    -Promise.any([])-> segera ditolak jika iterable kosong.
    Syntax: 
    Promise.any(iterable)
*/ 
// FULFILLED ASYNCHRONOUS-> janji yg pertama kali fulfilled
const p1= Promise.reject(0);
const p2= new Promise(resolve=> setTimeout(resolve, 2000, "Slow"));
const p3= new Promise(resolve=> setTimeout(resolve, 500, "Quick"));
Promise.any([p1, p2, p3]).then(val=> console.log("01.", val))

// REJECTED ASYNCHRONOUS PADA AGGREGAT ERROR -> berdasar urutan asli dalam array.
const a= new Promise((_, reject)=> setTimeout(reject, 300, "Err1"));
const b= new Promise((_, reject)=> setTimeout(reject, 100, "Err2"));
const c= new Promise((_, reject)=> setTimeout(reject, 200, "Err3"));
Promise.any([a, b, c])
    .then(val=> console.log(val))
    .catch(err=> {
        console.error("02.", err)
        console.error("03.", err.errors)
    })

// PADA ITERASI PROMISE KOSONG
Promise.any([])
    .then(val=> console.log(val))
    .catch(err=> {
        console.log("04.",err)
        console.log("05.",err.errors);
    })    

const failure = new Promise((resolve, reject) => {
    reject("Always fails");
    });   
Promise.any([failure]).catch((err) => {
console.log("06.",err);
});    