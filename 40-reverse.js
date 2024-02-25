/*
    -reverse() menjadikan element awal diakhir dan sebaliknya.
    -utk melakukan hal ini tanpa merubah array asli gunakan toReversed()
    Syntax :
    -reverse()
*/
const arr = ["one", "two", "three"];
const num = [2, 4, 7, 5]
const reversed = arr.reverse();
const reversed2 = num.reverse();
console.log("01.", arr);
console.log("02.", num);

//reverse metode pada sparse
const num2 = [2, , 4, 7, 5, ,];
console.log("03.", num2.reverse())// [<empty slots>, 5, 7, 4,<empty slot> , 2]

//metode reverse merubah original array di referensi memori:
const num3 = [3, 2, 4, 1, 5];
const rev = num3.reverse();
rev[1] = 10;
console.log("04.", rev);
console.log("05.", num3);

//utk tidak merubah array original gunakan spread operator atau toReversed()
const num4 = [3, 2, 4, 1, 5];
const rev2 = num4.toReversed();
const rev3 = [...num4].reverse();
rev2[0] = 10;
rev3[0] = 10;
console.log("06.", rev2);
console.log("07.", rev3);
console.log("08.", num4)

//CALLING REVERSE() PADA LIKE-ARRAY OBJECT TERDEFINISI DG INDEKS SESUAI
const arrayLike = {
    length : 4,
    0: 1,
    1: 4,
    2: 5,
    3: 11
}
console.log("09", Array.prototype.reverse.call(arrayLike));

//pd bagian ini object arrayLike bukan array sejati dg indeks numerik tidak tersusun sehinggga tidak ada jaminan urutan-nya diakses sesuai dg indeks.
const arrayLike2 = {
    length: 3,
    unrelated: "foo",
    2: 4,
    3: 33
} 
console.log("10", Array.prototype.reverse.call(arrayLike2));