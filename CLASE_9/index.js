/** ALAMACENAMIENTO LOCAL - ALAMACENAMIENTO EN SESSISON
 * getItem("nombre item - key")
 * setItem("nombre item - key", value) value => string
 * removeItem("nombre item")
 * clear()
 * key(index) index => position retorna el nombre de la key
 * length retorna la logintud los items
 */

//sessionStorage.clear();
//localStorage.clear();


let ejemplo = {
    name:'hola',
    status:0
}
let ejemploArray = [1,4,5,"hola","n",1]

localStorage.setItem('objectString',JSON.stringify(ejemplo));
console.log(localStorage.getItem('objectString'))
console.log(JSON.parse(localStorage.getItem('objectString')))

localStorage.setItem("arrayString",JSON.stringify(ejemploArray));
console.log(localStorage.getItem("arrayString"))
console.log(JSON.parse(localStorage.getItem('arrayString')))
console.log(localStorage.length);
console.log(sessionStorage.length);

for(let i=0; i<localStorage.length; i++){

    let key = localStorage.key(i)
    document.getElementById("local").innerHTML += `<li>${key} = ${localStorage.getItem(key)}</li>`
}

/** crear y abrir BD indexedDB
 * crear object store
 * insert element object store
 */

/** ABRIR BASE DE DATOS */

if(window.indexedDB){
    //open("nombre Base Datos",version) = 1,2
    const db = indexedDB.open("school");

    //ocurre un error

    db.onerror = ()=>{
        console.error("error al conectarse con bd");
    }

    db.onupgradeneeded = () =>{
        let openDB = db.result;
        let store = openDB.createObjectStore('student',{autoIncrement:true});
        let index = store.createIndex('dniIndex','dni',{
            unique:true
        });
    }

    db.onsuccess = () =>{
        let openDB = db.result
        addStudent(openDB,  {
                             dni:11,
                            firstName:"dm",
                            lastName:"pr"});
        addStudent(openDB,  {
                             dni:11,
                            firstName:"dm",
                            lastName:"pr"});
        addStudent(openDB,  {
                             dni:13,
                            firstName:"dm",
                            lastName:"pr"});
        addStudent(openDB,  {
                             dni:17,
                            firstName:"dm",
                            lastName:"pr"});
    }

    const addStudent = (db,student) =>{
        //crear una transaction
       let trans = db.transaction('student','readwrite');
       let store = trans.objectStore('student');
       let query = store.put(student);

       query.onsuccess = () =>{ console.log("exitoso...");}
       query.onerror = () =>{ console.error("error....")}

       trans.oncomplete = () =>{
        db.close();
       }

    }


}