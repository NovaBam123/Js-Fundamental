/*  Berfungsi untuk membagi sebuah string menjadi array substring berdasarkan sebuah pemisah (separator) tertentu dan mengembalikan hasil berupa array.
    Fungsi: 
    1. Memecah string menjadi array substring berdasarkan pemisah yang diberikan.
    2. jika pemisah tidak diberikan sebagai argumen, defaultnya akan mengembalikan array yg berisi element string tersebut(hanya menjadi 1 element array),
    3. REGEX, selain menggunakan pemisah umumnya string banyak digunakan pemisah untuk memecah string.
    Syntax
    split(separator)
    split(separator, limit)
    limit-> jumlah element array yang menjadi string.
    jika tidak ditentukan-> array menjadi 1 element isinya string tsb.
    jika negatif -> akan menjadi array kosong. 
    -""-> memecah huruf menjadi element array
    -" "-> memecah kata menjaid element array
*/

const text = "How are you doing today?";
const myArr = text.split(" ", 3);
console.log("01.", myArr);

const str = "the quick brown fox jumps over the lazy dog";
const words = str.split(" ", 3); 
const Dword = str.split("", 5);
const wordCopy = str.split();
console.log("02.", words);
console.log(Dword);
console.log("03.", Dword[2]);
console.log("04.", wordCopy);

const emptyString = ""; // string is empty and separator is non-empty
console.log("05.", emptyString.split(" "));
console.log("06.", emptyString.split(emptyString));

const tempestString = "Oh brave new world that has such people in it";
function splitstring(string, separator){
  const arrayOfStr = string.split(separator);
console.log("07.", "The original string is:", string)
console.log("08.", "The separator is: ", separator)
console.log("09.", "The array has", arrayOfStr.length, "elements:", arrayOfStr.join("/"))
return arrayOfStr;
}
const space = " ";
console.log("10.", splitstring(tempestString, space));

const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Okt,Nov,Des";
const comma = "  ";
console.log("11.", splitstring(monthString, comma));

const names = "Harry Trump ; Fred Barney ; Helen Rigby ; Bill Abel ; Chris Hand";
console.log("12.", names);
const regex = /\s*(?:;|$)\s*/;
const nameList = names.split(regex);
console.log("13.", nameList);

const myStr = "1 Melihat 2 Mendengar dan Mempelajari 3 Memahami 4 Mengerti";
console.log("14.", myStr.split(" "));
console.log("15.", myStr.split(/\d/)); 
console.log("16.", myStr.split(/(\d)/)); 

//01. TANPA LIMIT(default)
let string= "apple, banana, orange, grape";
let arr= string.split()
console.log("17.", arr);

//02. DENGAN LIMIT POSITIF
let arr2= string.split("", 5)
console.log("18.", arr2);
console.log("19.", arr2[2]);

//03. LIMIT NEGATIF(SAMA DG DEFAULT)
let arr3= string.split(",", -1)
console.log("20.", arr3);

//04. LIMIT NOL
let arr4= string.split(",", 0)
console.log("21.", arr4);

