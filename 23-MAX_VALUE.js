//angka diatas e308 disebut tak terhingga
//MAX_VALUE: angka terbesar dalam js
//MIN_Value: angka terkecil dalam js

function multiply(x, y){
  if(x * y > Number.MAX_VALUE){
    return "Process as infinity";
  }
  return x * y
}
console.log(multiply(1.7976931348623157e308, 1));
console.log(multiply(1.7976931348623157e308, 2));

function multiplyA(a, b){
  if (a*b <= Number.MAX_VALUE){
    return a*b
  } else {
    return "Process as Infinity";
  }
}
console.log(multiplyA(10, 5));
console.log(multiplyA(1e308, 5));

let x = Number.MAX_VALUE; 
// console.log(x.MAX_VALUE);// saat x adalah variable
console.log(x);// saat x adalah variable
