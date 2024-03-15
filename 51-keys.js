/*
    METODE YG MENGEMBALIKAN OBJEK ITERATOR YG BERISI KUNCI SETIAP INDEKS DALAM ARRAY. 
    -ini dapat digunakan oleh loop atau metode lain yang dapat menerima iterator untuk mangakses indeks tsb. seperti for...of, for etc.
    SYNTAX: 
    -keys()
*/
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for(const key of iterator){
    console.log("01.", key);
}

/*  PADA SPARSE ARRAY 
    - akan tetap berisi key: dan ia akan mengiterasi slot kosong itu dan diisi dg nilai undefined,
    -sedangkan pada metode Objek.keys() jika diterapkan pada array ia akan mendapatkan nilai indeks array tsb(key jika dalam objek) namun sparse array tidak akan diikut sertakan.
*/
const sparse=[];
sparse[0]= "a";
sparse[2]= "c";
const iterator2 = sparse.keys();
for(const key of iterator2){
    console.log("02.", key);
    console.log("03.", sparse[key]);
}

const arr = ["a", , "b"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log("04.", sparseKeys);
console.log("05.", denseKeys);

/*  PADA OBJECT-LIKE ARRAY 
    ia hanya akan mengakses dan mengiterasi keys/indeks dari objek arrayLike tsb tanpa mengakses value dari objek tsb.
*/
const arrLike = { 
    length: 3,
    0: "BMW",
    1: "Escudo"
}
for(const key of Array.prototype.keys.call(arrLike)){
    console.log("06.", key);
}