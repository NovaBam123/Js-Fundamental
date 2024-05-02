// switch case akan dilanjutkan ke ekspressi berikutnya jika tidak menggunakan break(fall through)

let nilai = " ";
if (nilai) {
  console.log("Truthy..!")
} else {
  console.log("falsy..!")
}

for(let i=0; i< 3; ++i){
  console.log("Hello");
}

let sum= 0;
while (true){
  let value = 1;
  if(sum === 5) break
  sum += value
}
console.log('sum :' + sum)

let days = new Date().getDay();
switch(days){
  case 0: 
   console.log("Hari Minggu")
    break
  case 1: 
    console.log("Hari Senin")
  case 2: 
    console.log("Hari Selasa")
  case 3: 
    console.log("Hari Rabu")
    break
  case 4: 
    console.log("Hari Kamis")
    break
  case 5: 
    console.log("Hari Jum'at")
    break
  case 6: 
   console.log("Hari Sabtu")
   break
  case 7: 
    console.log("Nova Keren")
    break
}

let car = "BMW"
if (car === "BMW" && car === "Toyota") {
    console.log("This car is awesome");
}

const expr = "bananas"
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
console.log("Is there anything else you'd like?");

switch(undefined) {
  case console.log(1):
  case console.log(2):  
}

let word = "Typescript";
if(word=== "Javascript"){
  console.log("Javascript")
}else if (word=== "Python"){
  console.log("Python")
} else {
  console.log("not Javascript and Python")
}
let result = (word=== "Javascript") ? "Javascript" : ((word=== "Python") ? "python" : "not Javascript and Python");

let kata = "Durian";
if(kata==="Pisang"){
  console.log("Pisang")
}else if(kata==="Dukuh"){
  console.log("Dukuh")
} else {
  console.log("Bukan Pisang dan Dukuh");
}
let hasil = (kata ==="Pisang") ? "Pisang" : ((kata = "Dukuh") ? "Dukuh" : "Bukan Pisang dan Dukuh");

if (car=== "BMW" || car ==="Toyota") {
  console.log("This car is awesome")
} else {
  console.log("nova keren")
}

//=========FOR LOOP==========//
let str ="";
for(let i=1; i<=5; i++){
 str = str+i
};
console.log("01.", str)

// for(; i<5; i++){
//   console.log("02.", i);
// }

for(let i=2; ;i++){     //menghilangkan salah satu expresi
  console.log("03.", i)
  if(i>=3) break
}

let j =0; //menghilangkan ketiga statement
for(;;){
  if(j>3) break;
  console.log("04.", j);
  j++;
}

let x = 0;
while(x<=3){
  console.log("05.", x);
  x++
}

let i = 0
for(; i<3; i++){
  setTimeout(() => {
    console.log("06.", i);
  }, 1000)
}

let n = 3
while(n <3){
  console.log(`Hello ke-${n} while`);
  n++
}
do{
  console.log(`Hello ke-${n} do while`)
  n++
} while (n< 3)