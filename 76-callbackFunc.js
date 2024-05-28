/* CallBack Function
    - Merupakan fungsi yang diteruskan ke fungsi lain sebagai argument.
    - Dampak dari sebuah callback: 
    1. Synchronous : Eksekusi kode yang diproses secara berurutan. 
    2. Asynchronous : Eksekusi kode berjalan sambil menunggu kode lain diproses sampai selesai.
    Asynchronous umumnya ditangani oleh beberapa cara: 
    - Promise -> (than(), catch())
    - Async-Await -> (async await) 
    - Event Listener -> addEventListener("click", ()=>{console.log("button clicked")})
*/
// First Way Problem -> harus memanggil 2 fungsi
function calculator(a, b){return a+ b};
function display(something){console.log("01.",something)};
let result= calculator(5, 5);
display(result) //-> problem disini kita harus memanggil 2 fungsi 

// Second Way Problem -> tidak dapat mencegah pemanggilan display dalam fungsi calc
function calculator2(a, b){ 
    let result= a+ b
    display2(result)
}
function display2(something){console.log("02.", something)}
calculator2(5, 6)

// ASYNCHRONOUS => proses eksekusi fungsi calculator ditunda sehingga display menunggu proses tersebut selesai
function calculator4(a, b, callback){
    console.log("03. Waiting...")
    setTimeout(()=> {callback(a+ b)}, 1000);
}
function display4(something){console.log("04.", something)}
calculator4(5, 8, display4)

// SYNCHRONOUS =>proses eksekusi terjadi tanpa ada penundaan/asynhronous yg terlibat.
function calculator3(a, b, callback){callback(a+ b)}
function display3(something){console.log("05.", something)}
calculator3(5, 7, display3);




