function precise(x) {
  return x.toPrecision(4)
}
console.log(precise(123.456));
console.log(precise(0.004));
console.log(precise(1.23e5));
console.log(0.01235.toPrecision());
console.log(0.01266.toPrecision(2)); //rounded atau pembulatan keatas
console.log(typeof precise(0.04));
console.log(typeof 0.004.toPrecision(4)); //hasil selalu berupa string