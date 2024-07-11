/* 
    setInterval digunakan "untuk menjalankan fungsi/kode tertentu secara berulang dengan interval waktu yang tetap."
    Syntax: 
    setInterval(code)
    setInterval(code, delay)
    setInterval(code, delay, arg1)
    setInterval(code, delay, arg1, ...argN)
    Delay bersifat optional, default-nya adalah 0 jika tidak ditentukan.


*/
let index= 0
let intervalGreeting= setInterval(()=>{
    let arrName= ["Alice", "Badru", "Clara", "Danu"]
    console.log("Hello "+ arrName[index]+" ..!!")
    index++
    if(index>= arrName.length){
        clearInterval(intervalGreeting)
    }
}, 1500)

function greeting(name){
    console.log(name)
}
let greetingID= setInterval(greeting, 2000, "Hi...")
setTimeout(()=>{
    clearInterval(greetingID)
}, 10000)

const intervalID = setInterval(callback, 500, "Ella", "Fuso")
function callback(a, b){
    console.log("Hello", a)
    console.log("Hello", b)
    setTimeout(()=>{
        clearInterval(intervalID)
    }, 500)
}