
export const NewCard = (person)=>{
console.log(person)
    const  x =1;

    const listLi = ()=>{
        let arrayList = [];
        for(let i=0;i<=10;i++){
            arrayList.push(<li key={i}>Item {i}</li>)
        }
        return arrayList;
    }

    return (<>
            <p>Ejemplo de vista</p>
            <p>acciones..</p>
            <p>{person.name} {person.age}</p>
            {x>5 ? (<p>Ejemplo</p>) : <p>No ejemplo</p>}
            {
                 (()=>{
                    if(x>5){
                        return <p>SI</p>
                    }
                    else{
                        return <p>No</p>
                    }
                 })()
            }
            <ul>
                {listLi()}
            </ul>

        </>)
}