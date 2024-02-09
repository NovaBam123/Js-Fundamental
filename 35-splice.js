/*
    - splice: bisa mengganti value yang ada, atau menambah value baru pada array.
    syntax: 
    - splice(start)
    - splice(start, deleteCount, item1)
    - splice(start, deleteCount, item1, item2, ...itemN)
*/

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log("01.", months);
months.splice(4, 1, "May");
console.log("02.", months);

const array = [1, 2, 3, 4, 5];
array.splice(2);//menghapus semua element dimulai dari index ke-2
console.log("03.", array);// [1, 2]

const array2 = [1, 2, 3, 4, 5];
array2.splice(-2); //menghapus dari 2 element akhir array
console.log("04.", array2); // [1, 2, 3]

const array3 = [1, 2, 3, 4, 5];
array3.splice(-10); //start < -array.length maka 0 digunakan sama saja splice(0);
console.log("05.", array3); //[]

const array4 = [1, 2, 3, 4, 5];
array4.splice(10, 0, 6, 7); //start >= array.length menambah element
console.log("06.", array4); 

const array5 = [1, 2, 3, 4, 5];
array5.splice(); //jika paramater dihilangkan jadi shallow copy seperti concat()
console.log("05.", array5); 

//jika splice(0, 0, ...item) -. ini akan sama dg metode unshft(memasukan elem diawal array)
const myFish = ["Clown", "Mandarin", "Sturgeon"];
const addFront = myFish.splice(0, 0, "Angel");
console.log("07.", myFish)

const myFish2 = ["Clown", "Mandarin", "Sturgeon"];
const addFront2 = myFish2.unshift("Angel");
console.log("08.", myFish2); //splice sama dg metode unshift

//jika splice(arr.length, 0, item) maka sama dg metode push(menambah item diakhir array)
const myFish3 = ["Clown", "Mandarin", "Sturgeon"];
const addBack = myFish3.splice(myFish.length, 0, "angel");
console.log("09.", myFish3);

const myFish4 = ["Clown", "Mandarin", "Sturgeon"];
const addBack2 = myFish4.push("Angel");
console.log("10.", myFish4);

//manghapus 2 element di index ke-2 dan masukan item
const num1 = [1, 2, 3, 4];
const removed = num1.splice(2, 2, "and...");
console.log("11.", num1);
console.log("12.", removed);

//menghapus 2 element dari index ke-0 dan masukan item
const num2 = [1, 2, 3, 4]
const removed2 = num2.splice(0, 2, "start", "and");
console.log("13.", num2);

//menghapus 2 element dari index ke-2
const num3 = [1, 2, 3, 4, 5];
const removed3 = num3.splice(2, 2);
console.log("14.", num3);
console.log("15.", removed3); //yg dihapus [3, 4]

//walau ada sparse/array renggang konsisten dihapus menurut index-nya
const num4 = [1, , 3, 4, , 5]
const removed4 = num4.splice(1, 4); 
console.log("16.", num4);
console.log("17.", removed4); //[empty, 3, 4, empty] yg dihapus

const arrayLike = {
    0: 1,
    1: 2, 
    2: 3,
    length : 3
}
const result = Array.prototype.splice.call(arrayLike, 2, 1, 4, 5);
console.log("18.", arrayLike)
console.log("19.", result)


