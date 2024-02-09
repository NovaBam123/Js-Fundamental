//undefined menjadi NaN
//null menjadi 0
//true = 1, -1, false = 0

console.log("01.", 255 === 255.0);
console.log("02.", 255 === 0xff);// (hexadecimal notation)
console.log("03.", 255 === 0b11111111); // (binary notation)
console.log("04.", 255 === 0.255e3);// (decimal exponential notatian)

//konversi dari string:
console.log("05.", typeof Number("255"));//Number
console.log("06.", Number(undefined)); //NaN
console.log("07.", typeof Number(undefined));//Number
console.log("08.", Number("0x11"), Number("0b11"), Number("0o11"));
console.log("09.", Number(""));
console.log("10.", Number(null));
console.log("11", Number(true));
console.log("12", Number(false))
console.log("13", typeof Number(true));

const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));