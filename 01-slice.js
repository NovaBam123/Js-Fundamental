//slice = akan menjadi array baru, array asli tidak berubah! 
//slice jika minus misal -1 = maka -1 + -1 = -2 
//slice [-4, 2] lihat data array-nya..

const arrayLike = {
  length: 3,
  0 : 2,
  1 : 3,
  2 : 4,
  3 : 33,
}

const convertArray = Array.from(arrayLike)
console.log("01.", Array.prototype.slice.call(arrayLike, 0, 3));
console.log("02.", convertArray);

const slice = Function.prototype.call.bind(Array.prototype.slice)
function list() {
  return slice(arguments)
}

const mySlice = list({
  1 : 2,
  2 : 3,
  3 : 4,
})
console.log("03.", mySlice)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("04.", animals.slice(-2)); //["duck", "elephant"]
console.log("05.", animals.slice(-2, -3)); //[""]
console.log("06.", animals.slice(-4, 3)); //["bison, camel"]
console.log("07.", animals.slice(0, 1)); 


const string = "Mozilla"
console.log("08.", string.slice(1,3)); //oz
console.log("09.", string.slice(0, 1));//M
console.log("10.", string.slice(1, 0));//""
console.log("11.", string.slice(0, 6));//Mozill
console.log("12.", string.slice(1, 4));//ozi
console.log("13.", string.slice(5, 1));//""
console.log("14.", string.slice(-5, 3));//z
console.log("15.", string.slice(-5, -3));//zi