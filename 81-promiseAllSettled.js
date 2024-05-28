/* 
    Method statis yang menerima sebuah iterable "promise" dan mengembalikan sebuah object berupa semua deskripsi semua promise tersebut. 
    Syntax: 
    Promise.allSettled(iterable)
    -Promise.allSettled([])-> akan mengembalikan promise terpenuhi dengan hasil array kosong. 
*/
const promise1= Promise.resolve(3);
const promise2= new Promise((resolve, reject)=> {
    setTimeout(reject, 100, "foo")
})
const promise= [promise1, promise2]
Promise.allSettled(promise)
    .then(res=> res.forEach(el=> console.log("01.", el.status, el.reason)))
Promise.allSettled([promise1, promise2]).then(res=> console.log("02", res))    