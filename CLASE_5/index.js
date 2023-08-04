const prompt = require("prompt-sync")({ sigint: true });
let dataPerson = [];

const addDataPerson = (firstName = 'jose', lastName = 'ramon', age = 20, status = 1, insert = true) => {
    let persona = {
        firstName,
        lastName,
        age,
        status
    }
    if (insert) {
        dataPerson.push(persona);
    }
    else {
        dataPerson.unshift(persona);
    }
}

addDataPerson("juan", "perez", 10, 1);
addDataPerson("jose", "ramon", 10, 2);
addDataPerson("maria", "ramona", 10, 3, false);
addDataPerson("lucia", "vazques", 10, 3);
addDataPerson("laura", "osorio", 10, 2);
addDataPerson("pedro", "ramon", 10, 2);
addDataPerson("judith", "perez", 10, 1);
addDataPerson("ramona", "mercede", 10, 2);
addDataPerson("lucas", "ramon", 10, 3);
addDataPerson("antonio", "ramon", 10, 1);


const promedio = () =>{
    let suma = 0;
    dataPerson.forEach( (element) =>{
        suma = suma + element.age;
    });
    let promedio = suma / dataPerson.length;
    console.log(promedio);

    //reduce(acumulador,element)
    let sumaReduce = dataPerson.reduce((acumulador,element)=>{
        return acumulador + element.age;
    },0);
    console.log(sumaReduce);
}
promedio();
/** OPERACIONES CON CADENA STRING */

let cadena ="hOLA mundo hOLA  ";
/** length => longitud */
console.log(cadena.length);
/** toUpperCase */
console.log(cadena.toUpperCase());
/** toLowerCase */
console.log(cadena.toLowerCase());
/** trim() elimina los espacis en blanco inicio y final */
console.log(cadena.trim().length);
/**slice(start,end) */
console.log(cadena.slice(1,5));
console.log(cadena[0]);
/** replace("buscar","cambiar") reemplazar primera coincidencia */
console.log(cadena.replace("OLA","COMO"));
/** replaceAll("buscar","cambiar") reemplaza todas las coincidencias */
console.log(cadena.replaceAll(" ",""));
/** split("separar") */
console.log(cadena.split("L"))
/** includes("buscar") true, false */
console.log(cadena.includes("A"));
/** startsWith("buscar") */

let words = prompt("Ingrese el valor a buscar: ");

let dataFilterPerson = dataPerson.filter( (element)=>{
    words = words.toLowerCase();
    let firstName = element.firstName.toLowerCase();
    let lastName = element.lastName.toLowerCase();
    return (firstName.includes(words) || lastName.includes(words))
})
console.table(dataFilterPerson);

dataFilterPerson = dataPerson.filter( (element)=>{
    words = words.toLowerCase();
    let firstName = element.firstName.toLowerCase();
    let lastName = element.lastName.toLowerCase();
    return (firstName.startsWith(words) || lastName.startsWith(words))
})
console.table(dataFilterPerson);
