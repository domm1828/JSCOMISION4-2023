// case-sensitive

/**
 * DECLARACIONES DE VARIABLES
 * 3 FORMAS DE DECLARAR LA VARIABLES
 */

var x =3; //number
let y ='5'; //string
//{ }
const z=true; //booleano


function ejemplo(){
    let x=6;

}

//COMO SABER QUE TIPO DE DATO ES UNA VARIABLE
//typeof 

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

let a=5;
let b=4;
console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log("sin sumar a=> ",a)

a -=b; // a = a + b;
console.log("sumado a=> ", a)

console.log(a++);
console.log(++a);
console.log(++y);

/**OPERADORES DE COMPARACION
 * IGUALDA VALOR  ==
 * IGUALDA IDENTICA  ===
 * DIFERENTE    !=
 * NO IDENTICO !==
 * MAYOR >
 * MAYOR QUE >=
 * MENOR <
 * MENOR QUE <=
 * 
 */
let aa="2";
let bb=2;
// (aa === bb) //FALSE
//(a <= 10) //10

/** OPERADOR DE STRING + CONCATENAR */
console.log(aa+bb);

a=10;
b=6;
let c;

/**Operadores logicos
 * AND   &&
 * OR    ||
 * TERNARIO ? : 
 * NOT !
 * ENCADENAMIENTO OPCIONAL (OBJETO) ? 
 * NULLISH ?? (A ?? B) //
 */

//(a ?? b || b<c) 

let xy = c ?? b;
(a>b && b>c || c>a)
