/*  REKURSIF FUNCTION 
    - fungsi yang memanggil dirinya sendiri secara berulang hingga mencapai kondisi berhenti(BASE CASE).
    - umumnya digunakan dalam menyelesaikan masalah yang dapat dipecahkan dengan cara yang berulang kali.
    Cara membaca fungsi rekursif:
    - Selalu identifikasi base case dari fungsi sebelum kode yang lain.
    - Argument yang dilewatkan pada fungsi yang menyebabkan kondisi base case terpenuhi.
    - identifikasi argument yang setidak-nya akan di eksekusi oleh fungsi setidak-nya satu kali.
*/

function hitungMundur(number){
    console.log("01.", number);
    const newNumber= number - 1
    if(newNumber > 0){
        hitungMundur(newNumber)
    }
}
hitungMundur(3);

function hitungMaju(number){
    console.log("02.", number);
    const newNumber = number + 1
    if(newNumber< 4){
        hitungMaju(newNumber)
    }
}
hitungMaju(1);

function factorial(n){
    if(n=== 0){
        return 1;
    }else { 
        return n* factorial(n-1);
    }
};
console.log("03.", factorial(5))

function log(num){
    if(num> 5){
        return;
    }
    console.log("04.", num)
    log(num + 1)
}
log(1)
