let newPromise= new Promise((resolve,reject)=>{
    const number=15;
    if (number>10){
        resolve(number);
    }else{
        reject( new Error ( ` ${number} <= 10 `));
    }
})

newPromise
    .then((number)=>console.log(number))
    .catch((err)=>console.error(err))