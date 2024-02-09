const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

console.log(a, b);

const x =  String.prototype.toLowerCase.call({
  toString() {
    return "NOVA BAMAHRY"
  }
})
const res = String.prototype.toLowerCase.call(true)
console.log(x, res);