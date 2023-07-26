const prompt = require("prompt-sync")({ sigint: true });

let numeroOne = prompt("INGRESE EL NUMERO UNO: ");
let numeroTwo = prompt("INGRESE EL NUMERO DOS: ");
let op= prompt("QUE DESEA HACER 1.-SUMA 2.-RESTA (*)MULTIPLICACION: ");

const opeFunction = (a,b,c) =>{
    let result ="";
    if(c==1){
        result = a+b;
    }else if(c==2){
        result = a-b;
    } else
    {
        result = a*b;
    }
    console.log(result);
    return result;
}
let suma = opeFunction(numeroOne,numeroTwo,op);
console.log(suma*100);