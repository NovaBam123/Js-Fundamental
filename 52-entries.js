/*  MENGEMBALIKAN SEBUAH OBJEK ITERATOR BARU BERUPA PASANGAN KUNCI  DAN NILAI PADA SETIAP INDEKS-NYA.
    - Dengan metode ini kita dapat mengakses indeks dan nilai secara bersamaan. 
    SYNTAX:
    - entries();
*/
const array1 = ["a", "b", "c"];
for(const [idx, el] of array1.entries()){
    console.log("01.", idx, el);
};

//PADA SPARSE ARRAY
const arr = [1, 2, ,4];
for(const [idx, el] of arr.entries()){
    console.log("03.", idx, el);
}

//PADA OBJECT ARRAYLIKE
const arrLike= { 
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "d"
}
for(const ent of Array.prototype.entries.call(arrLike)){
    console.log("04.", ent);
}