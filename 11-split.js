const text = "How are you doing today?";
const myArr = text.split(" ", 3);
console.log(myArr);

const str = "the quick brown fox jumps over the lazy dog";
const words = str.split(" ", 3); 
const Dword = str.split("", 3);
const wordCopy = str.split();
console.log(words);
console.log(Dword[2]);
console.log(wordCopy);

const emptyString = ""; // string is empty and separator is non-empty
console.log(emptyString.split("a"));
console.log(emptyString.split(emptyString));

function splitstring(string, separator){
  const arrayOfStr = string.split(separator);
console.log("The original string is:", string)
console.log("The separator is: ", separator)
console.log("The array has", arrayOfStr.length, "elements:", arrayOfStr.join("/"))
return arrayOfStr;
}
const tempestString = "Oh brave new world that has such people in it";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Okt,Nov,Des";
const space = " ";
const comma = ",";
console.log(splitstring(tempestString, space));
console.log(splitstring(monthString, comma));

const names = "Harry Trump ; Fred Barney ; Helen Rigby ; Bill Abel ; Chris Hand";
console.log(names);
const regex = /\s*(?:;|$)\s*/;
const nameList = names.split(regex);
console.log(nameList);

const myStr = "1 Melihat 2 Mendengar dan Mempelajari 3 Memahami 4 Mengerti";
console.log(myStr.split(" "));
console.log(myStr.split(/\d/)); 
console.log(myStr.split(/(\d)/)); 

