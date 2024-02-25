/*
    -merupakan metode pada array untuk looping sekaligus membentuk array baru
    -memetakan setiap elament ke nilai baru berdasar pd fungsi yang diberikan
    - jika array baru dari map tidak digunakan maka dianggap pola yang tidak efisien "ANTI PATTERN" lebih baik gunakan for...of atau for each. 
    Syntax :
        -map(callbackFN)
        -map(callbackFn, thisArg)   
*/ 
const array1 = [1, 4, 9]
const map = array1.map((el, v) => {
    v = el*2
    console.log("01.", `value: ${v} = ${el}*${2} `);
});

//MAPPING AN ARRAY TO AN ARRAY OF SQUARE ROOT
const numbers = [1, 4, 9];
const root = numbers.map(item => Math.sqrt(item));
console.log("02.", numbers); //tidak merubah array asli.
console.log("03.", root);

//USING MAP UNTUK MEREFORMAT OBJEK DALAM ARRAY
const keyArray = [
    { key : 1, value: 10 },
    { key : 2, value: 20 },
    { key : 3, value: 30 },
]
const reformat = keyArray.map(({ key, value }) => ({ [key] : value})); //destructuring assignment                
console.log("04.", reformat);
console.log("05.", keyArray);

//USING PARSEINT() WITH MAP
console.log("06.", ["1", "2", "3"].map(parseInt));
console.log("07.", ["1", "2", "3"].map((str => parseInt(str, 10))));
console.log("08.", ["1", "2", "3"].map(Number));

/*MAPPED ARRAY CONTAINS UNDEFINED
    -jika tidak return hasil maka nilai akan undefined
    -Metode Map dirancang untuk menghasilkan array baru dengan panjang array yang sama dengan array aslinya.  
    -menghapus element gunakan filter() atau flatMap() 
    -berikut contoh kasus untuk menghapus nilai 4 pada array:   
*/
const nums = [1, 2, 3, 4];
const filterNums = nums.map((el, i)=> {
    if(i < 3) {
        return el;
    }
});
console.log("09.", filterNums); 

const array2 = [1, 4, 9, 16];
const newArray = array2.map((el) => {
    if (el !== 9) {
        return el;
    }
});
console.log("10.", newArray);// [1, 4, undefined, 16] kedua kode diatas akan mengembalikan hasil undefined, pada indeks penghapusan element array.

const filterNums2 = nums.filter((el, i) => i< 3);
console.log("11.", filterNums2);//menggunakan filter

const filterNums3 = nums.flatMap((el, i) =>i< 3 ? [el] : []);
console.log("12.", filterNums3);//menggunakan flatMap

/*  SIDE EFFECT MAPPING
    metoda ini fokus pada transformasi pada elemant array untuk menjadi array baru, dan tidak merubah array asli.
    perubahan(efek samping) menyebabkan kode sulit dipahami.
    Prinsip utama bahwa "metode perulangan pada setiap element array yang membentuk array baru pada hasilnya"
*/ 
const cart = [5, 15, 25];
let total = 0; 
const withTax = cart.map((cost)=> { 
    total += cost;
    return cost * 1.2;
})
console.log("13.", withTax);
console.log("14.", total);//efek samping lebih dikarenakan adanya variable diluar fungsi callback..

const products = [ 
    { name : "sports car"},
    { name : "laptop"},
    { name : "phone"}
];
products.map((product)=>{ 
    product.price = 100;
});
console.log("15.", products);
//gunakan ini:
products.forEach((product) => {
    product.price = 100; 
})
//kecuali jika ingin membuat array baru: 
const productWithPrice = products.map((product) => {
    return { ...product, price: 100}; 
})

//MENGGUNAKAN THIRD ARGUMEN DARI CALLBACKFN: 
const nums2 = [3, -1, 1, 4, 1, 5, 9, 2, 6];
// [3, 1, 4, 1, 5, 9, 2, 6]
const avg = nums2 
    .filter((num) => num > 0)
    .map((num, idx, arr) => {
        const prev = arr[idx - 1]; //el diakses untuk hitung rata2
        const next = arr[idx + 1];
        let count = 1 
        let total = num;
        if (prev !== undefined){
            count++;
            total += prev;
        } 
        if(next !== undefined){
            count++;
            total +=next;
        }
        const avg =total/count; 
        return Math.round(avg*100)/100;
    }) 
    console.log("16.", avg);

//MENGGUNAKAN MAP PADA SPARSE ARRAY 
console.log("17.", 
    [1, ,3].map((x, idx) => {
        console.log("18.", `lihat index ke-: ${idx}`);
        return x*2; //saat empty array yg diolah kosong maka kembalian hasil-nya juga kosong
    })
);    

//MAP PADA ARRAY OBJECT
const arrLike = {
    0 : 2, 
    1 : 3,
    2 : 4, 
    3 : 5,
    length: 3
}
console.log("18.", Array.prototype.map.call(arrLike, (el) => 
    el*2   
)); //hati2 penggunaan tanda ini : {} juga pada forEach dan filter pada object arrayLike 
/*
    iterasi melalui koleksi objek dikumpulkan menggunkan "document.query.selector untuk memilih el dalam dok HTML => Node List"
    object yang mirip array bisa diproses dg Array.prototype 
    atau menggunakan metode Array.from()
*/
const arr = Array.from(arrLike);
const gandakanArr = arr.map((el) => el*2);
console.log("19.", gandakanArr);