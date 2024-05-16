/*
    Syntax:
    toString()
*/
const num = 118;
const convertNum = num.toString()
const sum = convertNum + 11
console.log("01.", typeof(convertNum));//string
console.log("02.", sum);//11811

const numberArr = [1, 2, 3, 5, 6]
const numToString = numberArr.toString();
console.log("03.", numToString)//"1", "2,", "3", "5", "6"
console.log("04.", typeof(numToString));//string

function Dog1(name){
    this.name = name
}
const dog1 = new Dog1("Gabby");
Dog1.prototype.toString= function dog1ToString(){
    return `${this.name}`
}
console.log("05.", dog1.toString());

function Dog2(name) {
    this.name = name
}
const dog2 = new Dog2("Goofy");
Dog2.prototype.toString = () => { 
    return `${this.name}`; 
}
console.log("06.", dog2.toString()); //undifined krn karena menggunakan arrow function

function Dog3(name) {
    this.name = name;
}
Dog3.prototype.bark = function() {
    console.log("Woof..!!")
}
const dog3 = new Dog3("Buddy");
console.log("07.", dog3)

class Dog4{
  constructor(name){
    this.name= name;
  }
  bark(){
    console.log("Woof..!!")
  }
}
const dog4= new Dog4("Charlie")
console.log("08.", dog4)

const arr = [1, 2, 3]; //object array
console.log("09.", arr.toString());
console.log("10.", Array.prototype.toString.call(arr));
console.log("11.", Object.prototype.toString.call(arr));

const obj = { number: 10 }
console.log("12.", obj.toString());
console.log("13.", Object.prototype.toString.apply(obj));

function CustomObject(value){
  this.value = value
}
CustomObject.prototype.toString = function() {
  return `CustomObject : ${this.value}`;
}
CustomObject.prototype.valueOf =function() {
  return this.value;
}
const CustomObj = new CustomObject(42)
console.log("14.", String(CustomObj));
console.log("15.", Number(CustomObj));

class Dog{
    constructor(name, breed, color, sex) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.sex = sex
    }
    toString() {
        return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`
    }
}
const theDog = new Dog("Gabby", "Lab", "Chocolate", "female");
console.log("16.", `${theDog}`);
