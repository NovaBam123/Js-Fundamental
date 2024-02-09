console.log("01.", parseFloat(3.14));
console.log("02.", parseFloat("3.14"));
console.log("03.", parseFloat("  3.14"));
console.log("04.", parseFloat("3.14e-2"));
console.log("05.", parseFloat("0.03.14E+2"));
console.log("06.", parseFloat("3.14some non-digit character"));
parseFloat( {
  toString() {
    return "3.14";
  },
})