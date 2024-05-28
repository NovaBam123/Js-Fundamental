export async function fetchData(){
    return new Promise(resolve=> {
        setTimeout(()=> {
            resolve("Data fetched from child module")
        }, 2000)
    })
}

async function foo(name) {
    console.log("01. start", name);
    await console.log("02. middle", name);
    console.log("03. end", name);
}
foo("first")
foo("second")