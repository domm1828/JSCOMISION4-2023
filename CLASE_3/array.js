/** ARRAYS => ARREGLOS => VECTORES
 * CONJUNTO O AGRUPACION DE ELEMENTOS EN UNA MISMA VARIABLES
 * COMO SE DECLARA O INICIALIZA UN ARRAY
 */

const ejemplo = new Array(3, 4, 6, "ea", "ejemplo", true);
console.log(ejemplo);
const ejemploDos = [2, 52, "hola", true];
//cantidad de elementos de un array
console.log(ejemploDos);
console.log(ejemplo[2]);
/**PROPIEDADES Y FUNCIONES DE LOS ARRAY */

/** push() insertar elemento al final del array */
ejemploDos.push(3, "holaa");
console.log(ejemploDos);
/**unshift() inserta eleemntos al principio del array */
ejemploDos.unshift("nuevo item");
console.log(ejemploDos);
/**pop() elimina al final */
/** shift() elimina al principio */
ejemploDos.shift()
console.log(ejemploDos);
/** CONCAT => concatenar */
let nejemplo = ejemploDos.concat(ejemplo);
console.log(nejemplo);
/** join() separa */
console.log(nejemplo.join("-"));
/**BUSQUEDA SIMPLE 
 * COMPROBAR SI EL ELEMENTO EXISTE includes() verdadero o falso
 */
console.log(ejemploDos.includes(78878));
/** VERIFICAR el index-posicion indexOf() devuelve la posicion de la 
 * primera aparicion del elemento, si el valor no existe devolvera -1
 * lastindexOf
 *  */
console.log(nejemplo.indexOf(3));
console.log(nejemplo.lastIndexOf(3));
//recorrer el array
nejemplo.forEach((a, b) => {
    console.log(`POSITION ${b} valor = ${a}`);
});
nejemplo.map((elemet) => {
    console.log(elemet);
})
/** filter => filtrado muchos, find uno solo */
let filterResult = nejemplo.filter((elemet) => { return elemet >= 5 });
console.log(filterResult);

/**filterResult= nejemplo.filter((elemet) => { return elemet.startsWith("e"); });
console.log(filterResult);*/
//findIndex findLast findLastIndex
let findResult = nejemplo.findIndex( (elemet) => { return elemet == 3;});
console.log(findResult);

nejemplo.splice(3,1); //reorganiza las pocisiones
nejemplo.slice(3,1); // la posicion tres la elimina