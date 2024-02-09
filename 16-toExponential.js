function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
console.log("01.", expo(123586, 2));//1.24e+5 pembulatan seperti motode toFixed
console.log("02.", expo("123456"));
console.log("03.", expo("oink"));

const string = "123.45";
const floatValue= parseFloat(string)
console.log("04.", floatValue);
console.log("05.", typeof floatValue);

const numObj = 77.1234;
console.log("06.", numObj.toExponential()); 
console.log("07.", numObj.toExponential(4)); 
console.log("08.", numObj.toExponential(2)); 
console.log("09.", 77.1234.toExponential()); 
console.log("10.", 77 .toExponential()); //spasi saat number tidak mempunyai desimal
console.log("11.", (77).toExponential()); //atau menggunakan tanda kurung
