function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));
console.log(financial(0.004));
console.log(financial(1.23e+5));

const num = 123.456
console.log(num.toFixed());//dianggap 0-> tdk ada digit setelah desimal

const num2 = -234
let result1 = num.toFixed(1);
let result2 = (num).toFixed(1);
console.log(typeof result1)
console.log(typeof result2)
console.log(typeof -2.34.toFixed(1));
console.log(typeof (-2.34).toFixed(1)); //predensi tanda kurung lebih tinggi dati tanda minus


// try {
//   let result = num.toFixed(-1)
//   console.log(result)
// } catch (err) {
//   console.log(err)
// }//range error : toFixed() digit must be between 0-100

// let myObject = { value: 42};
// try {
//   let result = myObject.toFixed(2)
//   console.log(result)
// } catch (error) {
//   console.error(error)
// }//myObject.toFixed is not a function
