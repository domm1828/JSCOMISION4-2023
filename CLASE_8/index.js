/** EVALUAR QUE ELE USUARIO NO INGRESE INPUT VACIOS
 * EVALUAR QUE EL DNI NO SE REPITA
 * VERIFICAR LA FUNCION DE ELMINADO EN EL FILTER, O CONSIDERACIÓN
 */
let dataPerson = [];
let btnActionsCreate = document.getElementById("btnActionsCreate");
let btnActionsUpdate = document.getElementById("btnActionsUpdate");

const addDataPerson = (firstName, lastName, age, status , dni) => {
    let persona = {
        dni,
        firstName,
        lastName,
        age,
        status
    }
    dataPerson.push(persona);
}
 

const clickAddPerson = () =>{
    let dni = document.getElementById("dni").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let status = document.getElementById("status").value;

    if(validateInput(dni) && validateInput(firstName) && validateInput(lastName)
        && validateInput(age) && validateInput(status)){
        
        if(findOneDni(dni) == -1){ 
            addDataPerson(firstName,lastName,age,status,dni);
            document.getElementById("person").reset();
            document.getElementById("dni").focus();
            messageAlert("REGISTRO GUARDADO...!");
            listDataPerson(dataPerson); 
            storageDataPerson();
        }
        else{
            document.getElementById("dni").focus();
            messageAlert("DNI REPETIDO","error");
        }    
    }
    else{
        document.getElementById("dni").focus();
        messageAlert("ERROR, LLENE TODOS LOS CAMPOS","warning");
    }
}

const listDataPerson = (arrayDataPersona) =>{
    let list = '';
    if(arrayDataPersona.length > 0 ){
            arrayDataPersona.forEach( (person,index) => {
                let status = returnStatuString(parseInt(person.status));
                list += `<tr>
                        <td>${person.dni}</td>
                        <td>${person.firstName} ${person.lastName}</td>
                        <td>${person.age}</td>
                        <td>${status}</td>
                        <td>
                        <button class="btn btn-dark" onclick="editPersonOne(${person.dni})">Editar</button>
                        <button class="btn btn-primary" onclick="deletePersonOne(${person.dni})">Eliminar</button></td>
                        </tr>`;
            });
    }
    else{
        list =`<tr>
                    <td class="text-center" colspan="5"> NO EXISTE RESULTADO </td>
                </tr>`;
    }
    document.getElementById("listPerson").innerHTML = list;

}

const returnStatuString = (status) =>{
    switch(status){
        case 1: return "Activo"; break;
        case 2: return "Inactivo"; break;
        case 3: return "En Espera"; 
    }
}

const filterInput = () =>{
    let search = document.getElementById("search").value;
    search = search.trimStart().toLowerCase();
    document.getElementById("search").value = search;
    console.log(search);
    let filterArray = dataFilterPersona(search);
    listDataPerson(filterArray);

}

const dataFilterPersona = (search) =>{
    return dataPerson.filter((person)=>{
        return person.firstName.toLowerCase().includes(search) ||
               person.lastName.toLowerCase().includes(search);
    })
}

const deletePersonOne = (dni) =>{
    Swal.fire({
        title: 'ESTA SEGURO?' ,
        text: "Deseas eliminar este registro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo.'
      }).then((result) => {
        if (result.isConfirmed) {
            let position = findOneDni(dni);
            dataPerson.splice(position,1);
            filterInput();
            storageDataPerson();
        }
      })
      toggleButtonAction(2);
}

const validateInput = (valueInput) =>{
    return valueInput.trim().length > 0 ? true : false;
}

const findOneDni = (dni) =>{
    return dataPerson.findIndex((person)=>{
        return person.dni == dni;
    })
}

const editPersonOne = (dni) =>{
    let position = findOneDni(dni);
    let person = dataPerson[position]; 
    document.getElementById("dni").value = person.dni;
    document.querySelector("#firstName").value = person.firstName;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("age").value = person.age;
    document.getElementById("status").value = person.status;
    document.getElementById("indexPerson").value = position;
    toggleButtonAction(1);

}

const updateDataPersona = () =>{
    let dni = document.getElementById("dni").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let status = document.getElementById("status").value;
    let indexPerson = document.getElementById("indexPerson").value;

    if(validateInput(dni) && validateInput(firstName) && validateInput(lastName)
        && validateInput(age) && validateInput(status)){
        
        if(findOneDni(dni) == -1 || findOneDni(dni) == indexPerson){ 
             dataPerson[indexPerson].dni = dni;
             dataPerson[indexPerson].firstName = firstName;
             dataPerson[indexPerson].lastName = lastName;
             dataPerson[indexPerson].age = age;
             dataPerson[indexPerson].status = status;
             
            listDataPerson(dataPerson); 
            toggleButtonAction(2);
            
            storageDataPerson();
            messageAlert("DATOS MODIFICADOS","success");
        }
        else{
            document.getElementById("dni").focus();
            messageAlert("DNI REPETIDO","error");
        }    
    }
    else{
        document.getElementById("dni").focus();
        messageAlert("ERROR, LLENE TODOS LOS CAMPOS","warning");
    }
}

const toggleButtonAction = (visible) =>{
    if(visible==1){
        btnActionsUpdate.classList.remove('d-none');
        btnActionsCreate.classList.add('d-none');
    }
    else{
        btnActionsUpdate.classList.add('d-none');
        btnActionsCreate.classList.remove('d-none');
        document.getElementById("person").reset();
    }

}



const messageAlert = (title,icon='success') =>{
    Swal.fire({
        position: 'top-end',
        icon ,
        title: title,
        showConfirmButton: false,
        timer: 1000
      })
}

/** STORAGE => ALMACENAMIENTO 1.-LOCAL 2.-SESION 10-15 MB TEXT PLAIN */

/**
 * GUARDAR DATOS STORAGE
 * setItem("nombre variable",valor); // set variable
 * LEER DATOS STORAGE
 * getItem("nombre variable") //get variable
 * ELIMINAR DATOS STORAGE
 * removeItem("nombre variable") // eliminar un items
 * REMOVER TODOS LOS ITEMS
 * clear() // limpiar el storage
 */

/** ALMACENAMIENTO LOCAL (localStorage) */

//localStorage.clear();
localStorage.setItem("ejemplo","esto es una prueba");
localStorage.setItem("ejemplos","esto es una prueba");
localStorage.setItem("ejemplos3","esto es una prueba");
localStorage.setItem("ejemplo","asdasdasdasdas");
localStorage.removeItem('ejemplo')
console.log(localStorage.getItem('ejemplo'))

/**ALMACENAMIENTO  SESION sessionStorage */

sessionStorage.setItem("ejemplo","holaaa....")

const storageDataPerson = () =>{
    let arrayData = JSON.stringify(dataPerson);
    localStorage.setItem('persons',arrayData);
}

if(localStorage.getItem('persons') != null){
    let arrayData = localStorage.getItem('persons');
    arrayData = JSON.parse(arrayData);
    dataPerson = arrayData;
    listDataPerson(dataPerson); 
}

