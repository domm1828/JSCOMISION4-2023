const prompt = require("prompt-sync")({ sigint: true })
/**
 * INGRESADO TRES VALORES POR EL USUARIO, SABER CUAL ES 
 * EL MAYOR DE LOS TRES Y EL MENOR DE LOS TRES
 */

let numeroOne = prompt("INGRESE EL NUMERO UNO: ");
let numeroTwo = prompt("INGRESE EL NUMERO DOS: ");
let numeroThree= prompt("INGRESE EL NUMERO TRES: ");

let mensaje="";
if( (numeroOne==numeroTwo) || ( numeroTwo==numeroThree) || (numeroOne==numeroThree) ){
    if(numeroOne==numeroTwo) {mensaje +="SON IGUALES... UNO - DOS ";}
    if(numeroOne==numeroThree) {mensaje +="SON IGUALES... UNO - TRES ";}
    if(numeroTwo==numeroThree) {mensaje +="SON IGUALES... DOS - TRES ";}
}
else
if( (numeroOne > numeroTwo) && (numeroOne > numeroThree)){
    mensaje ="EL MAYOR ES EL NUMERO UNO "+numeroOne;
}else if( (numeroTwo > numeroOne) && (numeroTwo > numeroThree)){
    mensaje ="EL MAYOR ES EL NUMERO DOS "+numeroTwo;
}
else if( (numeroThree > numeroOne) && (numeroThree > numeroTwo) ){
    mensaje ="EL MAYOR ES EL NUMERO TRES "+numeroThree;
}
else{
    mensaje ="LOS NUMEROS SON IGUALES";
}
console.log(mensaje);

/** REALIZAR LA TABLA DE MULTIPLICAR DADO UN VALOR 
 * POR EL USUARIO EJEMPLO. 8
 *  8 X 1 = 8
 *  8 X 2 = 16
 *  8 X 10 = 80
 **/

let tabla = prompt("INGRESE EL NUMERO DE LA TABLA A MOSTRAR: ");
//template literales o string ` ${}
for(let i=1; i<=10; i++){
   // let result = tabla + " X " +i+" = "+(tabla*i);
   let result=`${tabla} X ${i} = ${i*tabla}`;
    console.log(result);
   // console.log(`${y}*${i}=`,y*i);
}
console.log("********while********")
let i =1;
while(i<=10){
    let result=`${tabla} X ${i} = ${i*tabla}`;
    console.log(result);
    i++;
}

/**
 *  * REALIZAR LA TABLA DE DIVIDIR DADO UN VALOR POR EL 
 * USUARIO 1
 * 8 / 8 = 1
 * 16 / 8 = 2
 * 24 / 8 = 3
 * 80 / 8 = 10
 */
for(let i=1; i<=10; i++){
    console.log(tabla * i +" / "+ tabla+" ="+i);
}

for(let i=tabla; i<=(10*tabla); i+=tabla){
console.log(i);
}
/**DECLARACION DE FUNCION
 * FUNCIONES DECLARATIVAS
 */
function nombreFunction(){
    console.log('hola');
}
/**EJECUTAMOS */
nombreFunction();
/**FUNCION DECLARATIVAS CON PARAMETROS */

function suma(x,y){
    console.log(x+y);
}
/**EJECUCION */
suma(3,6);

/**FUNCIONES POR EXPRESION */
const fuctExpre = function ejemplo(){
    console.log("ejemplo");
}
/**EJECUCION */
fuctExpre();

/**FUNCIONES ANONIMAS */

const functAno = function (){
    console.log("hola");
}

/**FUNCIONES AUTOEJECUTABLES */
(
function (){
    console.log("ejemplo");
}
)();

(
    function (x,dos){
        console.log("ejemplo "+x);
    }
    )("de prueba",9);

/**FUNCIONES DE FLECHAS  FUNCIONES ARROW 
 * 
 * const functAno = function (){
    console.log("hola");
}
*/

const ejemplo = ()=>{
   console.log("prueba..."); 
}

ejemplo();