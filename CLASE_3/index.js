/**REALIZAR LAS TABLAS DE MULTIPLICAR, DIVIDIR, SUMAR, RESTAR
 * DADO LA OPCION Y EL NUMERO INGRESADO POR USUARIO
 */
const prompt = require("prompt-sync")({ sigint: true });

const tablaSumar = (x) =>{
    let i=1;
    while(i<=10){
        console.log(`${i} + ${x} = ${i+x}`);
        i++;
    }
}
const tableRestar = (y)=>{
    for(let i=y; i<=(10+y); i++){
        console.log(`${i} - ${y} = ${i-y}`);
    }
}
const tableMult = (x) =>{
    for(let i=1; i<=10;i++){
        console.log(`${x} * ${i} = ${x*i}`);
    }
}
const tableDiv = (y) =>{
    for(let i=1; i<=10;i++){
        console.log(`${y*i} / ${y} = ${i}`);
    }
}

let numero = prompt("INGRESE NUMERO: ");
let tabla = prompt("1.- SUMA 2.- RESTA 3.- DIVISION 4.- MULTIPLICACION: ");

switch(tabla){
    case '1': 
    for(let i=1; i<=parseInt(numero); i++){
        console.log(`********${i}********`)
        tablaSumar(parseInt(i)); 
        console.log(`*******************`)
    }
    break;
    case '2': tableRestar(parseInt(numero)); break;
    case '3': tableDiv(parseInt(numero)); break;
    case '4': tableMult(parseInt(numero)); break;
    default : console.log("No ingreso la opcion correcto"); break;
}