function printAsyncName(callback,name){
    let printHello = setInterval(()=> console.log(callback), 1000);
    let printName = setInterval(() => console.log(name), 2000);
    setTimeout(()=> clearInterval(printHello),5000)
    setTimeout(()=> clearInterval(printName),5000)
}

printAsyncName((`Hello`),'Mario')
