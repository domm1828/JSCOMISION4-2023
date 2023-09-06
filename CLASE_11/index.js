/** async 
 * await
 *  
 */


const peticion = async ()=>{
    try{
    const response = await fetch("index.json",{method:"POST"});
    const data = await response.json();
    console.log(data.nombres)
    }
    catch(error){
        console.log(error)
    }
}
peticion();
/** Manehos de Errores
 * try declaramos un bloque de instuccion para se evaluado
 * catch declaramos un bloque de instruccion para manejo de error
 * throw personalizacion de mensajes de error
 */

const ejemplo = () =>{
    let x = document.getElementById("input").value
   try{
       if(x.trim() == "") throw "Esta vacio."
       if(isNaN(x)) throw new Error("No es numero");
    }
    catch(error){
        console.log(error)
        console.log(error?.name);
        console.log(error?.message);
    }
}
/** C => POST R=> GET U => PUT D=> DELETE */

const allProductos = async ()=>{
    try{
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    data.products.forEach(element => {
        document.getElementById("list").innerHTML +=`<li>${element.title}</li>`
    });
    //list
    }
    catch(error){
        console.log(error)
    }
}
allProductos()