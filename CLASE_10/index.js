const ejemplo = () =>{
    console.log("hola");
}

const ejemplo2 = () =>{
    console.log("hola");
}

const ejemplo3 = () =>{
    console.log("hola");
}

ejemplo();
setTimeout(()=>{
console.log('holaa');
},1000);
ejemplo2();
ejemplo3();

/** asincronia
 * callbacks
 * promise
 * async / await 
 */

let list = [1,4,5,6,7,8,9,0];
const flist = (elem,index)=>{
    console.log(`${elem} ${index}`)
}
list.forEach(flist);

/** crear una funcion callback 
 * repetir un cliclo repetitivo para numeros aleatorios
 * callbacks funcion, retonar dos valores error = 10; success = listado
*/
const numerosAleatorios = (repetir, callbacks)=>{
    let numeros = [];
    for(let i=0; i<repetir; i++){
        const numeroRandom = i + Math.floor(Math.random() * 6);
        numeros.push(numeroRandom);
        if(numeroRandom ===10 ){
            callbacks({error:true, message:'Existe un 10'});
            return;
        }
    }
    return callbacks(null,{error:false, numeros});
}

numerosAleatorios(6,(error,success)=>{
    if(error){
        console.error(`${error.message}`);
        return;
    }
    console.log(`${success.numeros}`)

})

//promise
/**
 * promesa pendiente (bucle) (pending)
 * promesa cumplida (full filled)
 * promesa no cumpida (reject) 
 */

/**
 * then() resolve cuando la promesa se cumple
 * catch() reject cuando la promesa se rechaza
 * finally() cuando se ejecuta cumple - rechaza
 */

//promesa
fetch("https://dummyjson.com/products/1")
         .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        .finally(()=>{console.log("ejecuto..")});

// crear promesa new Promise();
//resolve()
//reject()

const numerosAleatoriosPromise = (repetir)=>{
     return new Promise((resolve,reject)=>{
        let numeros = [];
        for(let i=0; i<repetir; i++){
            const numeroRandom = i + Math.floor(Math.random() * 6);
            numeros.push(numeroRandom);
            if(numeroRandom ===10 ){
                reject({error:true, message:'Existe un 10'});
                return;
            }
        }
        return resolve({error:false, numeros});
     });
}
numerosAleatoriosPromise(7)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.error(error)})
    .finally(()=>{ console.log("finalizado")});


