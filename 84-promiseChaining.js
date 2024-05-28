// PROMISE CHAINING
function buangSampah(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const buang= true;
            if(buang){
                resolve("01. Finished buangSampah");
            } else{
                reject("Kamu gagal tugas ke-1")
            }
        }, 200)
    })
}
function cuciBaju(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const mencuci= true;
            if(mencuci){
                resolve("02. Finished cuciBaju");
            } else {
                reject("Kamu gagal tugas ke-2")
            }
        }, 400)
    })
}
function coding(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const belajar= false;
            if(belajar){
                resolve("03. Finished belajar js");
            } else {
                reject("Kamu gagal tugas ke-3")
            }
        }, 50)    
    })
}
// CHAINING PROMISE
buangSampah()
    .then(val=> {console.log(val); return cuciBaju()})
    .then(val=> {console.log(val); return coding()})
    .then(val=> {console.log(val); return console.log("04. TodoList Done..!")}) 
    .catch(err=> console.log("04.1", err));

// CONCURRENCY PROMISE METHOD    
Promise.allSettled([buangSampah(), cuciBaju(), coding()]) //semua status yg selesai
    .then(res=> console.log("05.", res))    
Promise.all([buangSampah(), cuciBaju(), coding()]) // mencari reject pertama-kali
    .then(res=> console.log("06.", res))    
    .catch(err=> console.log("07.", err))
Promise.any([buangSampah(), cuciBaju(), coding()]) // mencari fulfill pertama-kali
    .then(res=> console.log("08.", res))
    .catch(err=> console.log(err))    
Promise.race([buangSampah(), cuciBaju(), coding()]) // mencari yang tercepat selesai   
    .then(res=> console.log("09.",res))
    .catch(err=> console.log("09.",err))

