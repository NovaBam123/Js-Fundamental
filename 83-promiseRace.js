/*
    "Method statis object Promise yg mengambil sebuah iterable dan mengembalikan sebuah promise dengan status akhir: dari promise pertama dalam iterable yang diselesaikan."
    Syntax: 
    -Promise.race(iterable)
    Promise.race([])-> pending selamanya, karena tidak ada janji yang diselesaikan.

*/
const p1= new Promise((resolve, reject)=> {setTimeout(resolve, 300, "one")});
const p2= new Promise((resolve, reject)=> {setTimeout(resolve, 100, "two")})
Promise.race([p1, p2]).then(val=> console.log("01.", val))

// CONTOH INI MENGGAMBARKAN PROMISE RACE DANGAN WAKTU YANG LEBIH CEPAT MENANG LOMBA. 
const a= sleep(500, "One", "fulfill");
const b= sleep(100, "two", "fulfill");
const c= sleep(500, "three", "fulfill");
const d= sleep(100, "four", "rejected");
const e= sleep(500, "five", "rejected");
const f= sleep(100, "six", "fulfill");

function sleep(time, value, state){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(state=== "fulfill"){
            return resolve(value)
            } else{
            return reject(new Error("Faster rejected then fulfill"))
            }
        }, time)    
    })
}
Promise.race([a, b])
    .then(val=> console.log("02.", val))
    .catch(err=> console.error("03.", err))
Promise.race([c, d])
    .then(val=> console.log("04.", val))
    .catch(err=> console.error("05.", err))
Promise.race([e, f])
    .then(val=> console.log("04.", val))
    .catch(err=> console.error("05.", err))
    
// ASYNCHRONOUS OF PROMISE RACE    
const arrPromise= [Promise.resolve(33), Promise.resolve(44)]
const p= Promise.race(arrPromise)
console.log("06,", p)
setTimeout(()=>{
    console.log("07. The stack is now empty")
    console.log("08.", p)
})

//  Kondisi iterabele pada nilai non=promise sama dengan yg "state fulfilled" 
const p3= Promise.resolve("This promise is more quick");
const p4= new Promise((resolve, _)=> setTimeout(resolve, 300, 200))
Promise.race([p3, p4]).then(res=> console.log("09.",res))

const foreverPending= Promise.race([]);
const alreadyFulfilled= Promise.resolve(100); //non Promise value
const nonPromise= Promise.resolve("None Promise Value"); //non Promise value

const arr= [foreverPending, alreadyFulfilled, nonPromise];
const arr2= [foreverPending, nonPromise, Promise.resolve(100)];
const myPromise= Promise.race(arr);
const myPromise2= Promise.race(arr2)

console.log("09.", myPromise);
console.log("10.", myPromise2);
setTimeout(()=> {
    console.log("11. The stock is now empty")
    console.log("12.", myPromise);
    console.log("13.", myPromise2);
})

// USING PROMISE RACE() TO DETECT THE STATUS OF PROMISE.
function promiseState(promise){
    const pendingState= { status: "pending"};
    return Promise.race([promise, pendingState])
        .then(value=> value=== pendingState ? value: {status: "fulfilled", value})
        .catch(reason=> ({ status: "rejected", reason }))
}
const prom1= new Promise(res=> setTimeout(()=> res(100), 100));
const prom2= new Promise(res=> setTimeout(()=> res(200), 200));
const prom3= new Promise((_, rej)=> setTimeout(()=> rej("Insufficient Income"), 100));

async function getStates(){
    console.log("14.", (await promiseState(prom1)));
    console.log("15.", (await promiseState(prom2)));
    console.log("16.", (await promiseState(prom3)));
}
console.log("immediately after initiation");
getStates();
setTimeout(()=> {
    console.log("17. after waiting 100ms")
    getStates()
}, 100)

