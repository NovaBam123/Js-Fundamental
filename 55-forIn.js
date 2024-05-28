 /* 
  Iterasi terhadap enumarable properti sebuah objek.
  SNYTAX: 
  -for(variable in obj){
    statement
*/

/*  ITERASI PADA SEMUA INDEKS NON SYMBOL
    - property symbol tidak akan terbaca pada iterasi loop for...in
    - symbol adalah tipe data primtif di js yang unik dan tidak dapat diubah, umumnya digunakan untuk kunci yang bersifat unik dan tidak tercampur dg property yang lainnya. 
*/
const sym = Symbol('desc'); //symbol property
const obj = { a: 1, b: 2, [sym]: 'mySymbol'}
for(const key in obj){
    console.log("01.", `${key}: ${obj[key]}`);
}

const obj1 = {a: 1, b: 2, c: 3};
for(const idx in obj1){
    console.log("02.", `${idx}: ${obj1[idx]}`);
}

/*  ITERASI OWN PROPERTY
    pada contoh dibawah property a,b,c pada const triangle tidak ditampilkan dalam loop for...in di obj3 karena prop tersebut diwariskan dari var tsb.
    -penulisan untuk2 prop2 yang diwarisi harus ditulis manual
    -PENDEKATAN YANG LEBIH AMAN DAN KONSISTEN DENGAN MENGGUNAKAN METODE OBJECT.ENTRIES(), OBJECT.KEYS(), OBJECT.VALUES() DAPAT JUGA MENGGUNAKAN LOOP FOR...OF UTK MENGHINDARI MASALAH YG TIDAK DIINGINKAN: MENGITERASI PROPERTY YG TIDAK TERDUGA(TDK DIINGINKAN)
*/
const triangle = { a: 1, b: 2, c: 3}
function ColoredTriangle(){ //constructor function
    this.color = "red";
}
ColoredTriangle.prototype = triangle;
const obj3 = new ColoredTriangle(); //mengatur prototype dari fungsi konstruktor menjadi objek triangle.
for(const prop in obj3){
    if(Object.hasOwn(obj3, prop)){
        console.log("04.", `${prop}: ${obj3[prop]}`);
        console.log("05. Prop yg diwarisi: ", `a : ${obj3.a}`);
        console.log("06.", `b : ${obj3.b}`);
        console.log("07.", `c : ${obj3.c}`);
    }
}
//PROPERTY YG DITAMBAHKAN PADA OBJEK YG SEDANG DIPROSES TIDAK PERNAH AKAN DIKUNJUNGI..
const myObj= {a:1, b: 2};
for(const prop in myObj){
    console.log("08.", `${prop}: ${myObj[prop]}`);
}

