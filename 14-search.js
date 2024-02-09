const paragraph = "I think Ruth dog's is cuter than your dog!"
const regex = /[^\w\s'!]/;
console.log(paragraph.search(regex));//-1
console.log(paragraph[paragraph.search(regex)]);//undefined

let text = "Mr. Blue has a blue house";
let position = text.search("Blue");
console.log(position)