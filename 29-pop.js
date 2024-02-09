/*
    - menghapus element terakhir dari array.
    - jika pop pada array kosong maka undefined.
*/

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log("01.", plants.pop());
console.log("02.", plants)
console.log("03.", plants.pop());

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4
}
console.log("04.", Array.prototype.pop.call(arrayLike));
console.log("05.", arrayLike)

const arr= []
console.log("06.", arr.pop());

const plainObj = {}
console.log("07.", Array.prototype.pop.call(plainObj));

const collection = {
    length: 0,
    addElements(...elements){ //...(spread operator) berfungsi untuk mengkopi element pada sebuah array atau object.
        return [].push.call(this, ...elements);  
    },
    removeElements() {
        return [].pop.call(this);
    }
}
collection.addElements(10, 20, 30);
console.log(collection);
collection.removeElements();
console.log(collection);