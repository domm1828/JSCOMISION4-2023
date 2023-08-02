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

addDataPerson("juan", "perez", 20, 1);
addDataPerson("jose", "ramon", 10, 2);
addDataPerson("maria", "ramona", 12, 3, false);
addDataPerson("lucia", "vazques", 14, 3);
addDataPerson("laura", "osorio", 15, 2);
addDataPerson("pedro", "ramon", 10, 2);
addDataPerson("judith", "perez", 30, 1);
addDataPerson("ramona", "mercede", 35, 2);
addDataPerson("lucas", "ramon", 18, 3);
addDataPerson("antonio", "ramon", 19, 1);
l

/**
 * ACTIVIDA AGREGAR 15 ELEMENTOS DE OBJETO PERSONA AL ARRAY CON DIFERENTE DATA
 * 1.- MOSTRAR EL PROMEDIO DE LAS EDADES
 * 2.- FILTRAR POR NOMBRE O APELLIDO UN VALOR INGRESADO 
 * POR EL USUARIO DONDE COINCIDA CON LA LETRA O PALABRA
 * 
 */


//addDataPerson();
/*
for(let i=1;i<=3;i++){
    console.log("*********")
    let firstName = prompt("INGRESE EL NOMBRE: ");
    let lastName = prompt("INGRESE EL APELIDO: ");
    let age = parseInt(prompt("INGRESE LA EDAD: "));
    let status = parseInt(prompt("INGRESE EL STATUS: "));
    addDataPerson(firstName,lastName,age,status);
}*/

// objecto["nombre propiedad"]
//objecto.propieda


/**FUNCIONES DE ARRAY METODOS DEVOLVER UN ARRAY NUEVO
 * FOREACH RECORRE EL ARRAY
 */
/*
dataPerson.forEach((person,index)=>{
    console.log(` ${index} => ${person.firstName}`);
});
let dataPersonFor = (element, index)=>{
    console.log(` ${index} => ${element.firstName}`);
}
dataPerson.forEach(dataPersonFor);*/


dataPerson.forEach((element, index) => {
    console.log(` ${index} => ${element.firstName} ${element.lastName}`);
});

/** FILTER FILTRADO NUEVO VECTOR RESULTANTE Y NO SE MODIFICA EL ANTERIOR */
let dataFilterPerson = dataPerson.filter((element) => {
    return (element.age >= 10 && element.age < 15) && element.status == 3;
});
console.table(dataFilterPerson);
/**
 * FIND PRIMERA COINCIDENCIA DE ARRIBA - ABAJO
 * FINDLAST PRIMERA COINCIDENCIA DE ABAJO - ARRIBA
 * FINDINDEX DEVUELVE LA POSICION DE ELEMENTO SI LO ENCUENTRA, SI NO -1
 * FINDLASTINDEX 
 */
dataFilterPerson = dataPerson.find((element) => {
    return element.age == 10;
})
console.table(dataFilterPerson);

dataFilterPerson = dataPerson.findLast((element) => {
    return element.age == 100;
})
console.table(dataFilterPerson);

dataFilterPerson = dataPerson.findIndex((element) => {
    return element.age == 100;
})
console.table(dataFilterPerson);
/**MAP NOS PERMITE UNA INTERACION CON LOS ELEMENTOS */
let dataNewPerson = dataPerson.map((element, index) => {
    ///return {fullname:element.firstName+' '+element.lastName, index};
    let person = {
        fullname: element.firstName + ' ' + element.lastName,
        age: '',
        status: ''
    };
    if (element.age >= 18) {
        person.age = "MAYOR DE EDAD";
    }
    else {
        person.age = "MENOR DE EDAD";
    }
    switch (element.status) {
        case 1: person.status = "INACTIVO"; break;
        case 2: person.status = "PENDIENTE"; break;
        case 3: person.status = "ACTIVO"; break;
        default: person.status = "SIN ACCEDER"; break;
    }

return person;

});
console.table(dataNewPerson);
console.table(dataPerson);

/**METODOS DE ORDENAMIENTO SORT(a,b) */

dataPerson.sort((a,b)=>{
    return b.age - a.age;
})

console.table(dataPerson);

let arrayD=[1,4,6,9,200,100];
arrayD.sort((a,b)=>{ return b-a;});
console.table(arrayD);