function MyNumber(n) {
  this.number = n
}
MyNumber.prototype.valueOf = function() {
  return this.number*2
}
const obj = new MyNumber(4);
console.log(obj + 4)

class Box {
  value;
  constructor(value) {
    this.value = value
  }
  valueOf() {
    return this.value;
  }
}
const box = new Box(123);
console.log(box+456);
console.log(box == 123);
console.log(typeof box)