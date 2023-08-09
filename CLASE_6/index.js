let dataPerson = [];

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
    addDataPerson(firstName,lastName,age,status,dni);
    document.getElementById("person").reset();
    document.getElementById("dni").focus();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso..!',
        showConfirmButton: false,
        timer: 1000
      })
    listDataPerson(dataPerson);
    console.table(dataPerson);
    console.log(dni);
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
                        <td><button class="btn btn-primary" onclick="deletePersonOne(${index})">Eliminar</button></td>
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

const deletePersonOne = (position) =>{
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
            dataPerson.splice(position,1);
            listDataPerson(dataPerson);
          Swal.fire(
            'Eliminado!',
            'El resgitro fue eliminado.',
            'success'
          )
        }
      })

}