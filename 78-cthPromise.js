const THRESHOLD_A= 5;
function tetheredGetNumb(resolve, reject){
    setTimeout(()=> {
        const randomInt= Date.now();
        const value= randomInt% 10;
        if(value< THRESHOLD_A){
            resolve(value)
        } else {
            reject(`Too large: ${value}`)
        }
    }, 300)
} 
function determineParity(value){ 
    const isOdd= value% 2=== 1;
    return { value, isOdd }
}
function troubleWithGetNumber(reason){
    const err= new Error("Too large number...", {cause: reason});
    console.log(err)
    throw err;
}
function newPromiseGetWord(parityInfo){
    return new Promise((resolve, reject)=> {
        const {value, isOdd}= parityInfo
        if(value >= THRESHOLD_A- 1){
            reject(`still to large: ${value}`)
        } else {
            parityInfo.oddEven= isOdd? "odd": "even"//value: 5, oddEven: true, oddEven: odd
            resolve(parityInfo)
        }
    })
}

new Promise(tetheredGetNumb)
    .then(determineParity, troubleWithGetNumber)
    .then(newPromiseGetWord)
    .then((info)=> {console.log(`Got value:${info.value}-> ${info.oddEven}, isODD: ${info.isOdd}`)
        return info})
    .catch((reason)=> {
        if(reason.cause){
            console.error("Error happened again")
        }else {
            console.error("Trouble at newPromiseGetword function", reason)
        }
    })
    