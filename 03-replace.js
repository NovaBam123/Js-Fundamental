//Syntax(pattern, replace)
//jika pattern kosong, replace dilakukan diawal string.
//kode gi digunakan untuk mengganti secara global(g) dan i(ignored/insensitive) utk tidak senstitif thd huruf besar dan kecil.
//regex /w (word) /w+ word grup..$1 pola grup 1 dan $2 pola grup2
//? optional minimal o kali atau 1 kali

const paragraph = "I think Ruth dog is cuter than your dog!"

console.log(paragraph.replace("Ruth", "my"));
console.log(paragraph.replace(/DOG/i, "ferret"));
console.log("xxx".replace("","_" )); 
console.log("fooF".replace(/f/gi,"$")); 

let sinonim = ["sedikit", "cukup", "banyak", "sangat", "luarbiasa"];
let hit = 0;
console.log("saya tidak kecewa, saya tidak ada uang, saya tidak berfikir, saya tidak lelah,  dan (saya tidak marah)".replace(/tidak/g, function() {
  if (hit === sinonim.length){
    hit = 0
  }
  return sinonim[hit++]
}))

const re = /(\w+)\s(\w+)\s(\w+)/
const str = "Budi Ibu Ini!"
const newStr = str.replace(re, "$3 $2 $1")
console.log(newStr)

