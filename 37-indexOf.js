/*
    - paramater indexOf ada 2 (a, b) a sebgai yg dicari b =pencarian dimulai dari index ke-
    - jika -b maka -b + panjangArray = jika b <= 0 tidak valid dan dianggap 0
    - jika b>=pnjng array maka langsung dapat hasil -1 
    - NaN, Undefined juga tidak valid
    syntax: 
    - indexOf(searchElement)
    - indexOf(searchElement, fromIndex)
*/
const beasts = ["ant", "bison", "camel", "duck", "bison", "horse", "duck"];
console.log("01.",beasts.indexOf("duck"));
console.log("02.",beasts.indexOf("bison", 1));
console.log("03.",beasts.indexOf("bison", 2));
console.log("04.",beasts.indexOf("duck", 2));
console.log("05.",beasts.indexOf("duck", 4));
console.log("06.",beasts.indexOf("giraffe"));

const nums = [2, 9, 9, 2];
console.log("07.",nums.indexOf(2)); //0
console.log("08.",nums.indexOf(9, 2));//2
console.log("09.",nums.indexOf(2, -1));//3
console.log("10.",nums.indexOf(2, -3));//3
console.log("11.",nums.indexOf(2, -4)); //0
console.log("12.",nums.indexOf(2, -5)); //0
console.log("13.",nums.indexOf(2, NaN)); //0 : NaN disini diabaikan sama saja dg console.log(nums.indexOf(2));
console.log("14.",nums.indexOf(2, true));//true = 1 mks hasilnya car index ke-2 mulai dari index ke-1 yaitu 3

//mencari item disemua index
const array = ["a", "b", "a", "c", "a", "d"];
const allIndex = []
let idx = array.indexOf("a");
while(idx !== -1){
    allIndex.push(idx);
    idx = array.indexOf("a", idx+1);//mencari element a selanjutnya loop akan berhenti saat idx === -1 atau a tidak ditemukan lagi..!
}
console.log("15a.", allIndex)

const array2 = ["b", "a", "c", "a", "d", "e", "a"];
const indices = [];
let idx2 = array2.indexOf("a");
for(let i =0; i< array2.length; i++){
    if(idx2 !== -1){
        indices.push(idx2);
        idx2 = array2.indexOf("a", idx2+1)
    }
}
console.log("15b.", indices);


function updateCars(cars, car){
  if(cars.indexOf(car) === -1){
    cars.push(car)
    console.log("16.", `New Cars collection is ${cars}`)
  } else {
    console.log("17.", `${car} already exist in car collection..!!`)
  }
  console.log(cars);
}
const cars = ["vw", "honda", "mercy", "suzuki"];
updateCars(cars, "bmw");
updateCars(cars, "bmw");

const arrayLike = {
  length: 4,
  0: 2,
  1: 3,
  2: 4,
  3: 5,
}
console.log("18.", Array.prototype.indexOf.call(arrayLike, 4));
console.log("19.", Array.prototype.indexOf.call(arrayLike, 5));

//metode indexOf di jenis data string:
const myString = "Hello, world!";
const substring = "w";
const index = myString.indexOf(substring);
console.log("20.", index); 

const arr= [NaN];
console.log("21.",arr.indexOf(NaN));//-1