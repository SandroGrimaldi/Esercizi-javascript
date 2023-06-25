const isLogged = true;
function firstPromise(isLogged){ 
    return new Promise((resolve,reject) => {
    if (isLogged === true){
        resolve(Math.random())
    }else{
        reject(new Error (`isLogged is ${isLogged}`))
    }
    })
} 

function secondPromise(rand){
    return new Promise((resolve,reject) => {
    if(rand> 0.5){
        resolve({name: "John", age: 24});
    }else {
        reject(new Error (`rand number < 0.5, unlucky`));
    }
    })
} 

firstPromise(isLogged)
    .then((rand) => secondPromise(rand))
    .then((res) => console.log(res))
    .catch((err)=>console.error(err))


