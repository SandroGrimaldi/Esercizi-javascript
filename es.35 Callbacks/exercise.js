function repeatHello(callback){
    let sayHello = setInterval(() => callback(), 1000);
    /* setTimeout(() => clearInterval(sayHello), 10000) */
    return sayHello
}
    
repeatHello(() => console.log('Hello'))

/* la callback function deve essere una arrow function perchè:
    1 non ha bisogno di parametri obbligatoriamente;
    2 non necessita di un this qualora esso fosse presente nello scope dove stiamo usando la arrow function*/