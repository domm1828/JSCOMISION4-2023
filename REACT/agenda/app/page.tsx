'use client'
import { FormRegister } from '@/app/components/form-register';
import { ListRegister } from '@/app/components/list-register';
import { useState,useEffect } from 'react';
export default function Home() {

  const [contacts,setContacts] = useState([]);
  const [indexUpdate,setIndexUpdate]=useState(-1);

  const handleDeleteContact = (index:number)=>{
    contacts.splice(index,1);
    setContacts([...contacts]);

  }


  useEffect(()=>{
    console.log(contacts);
  },[contacts]);

  return (
    <main className="h-screen p-10">
   
   <div className="grid grid-cols-2 gap-4">
      <div>
        <FormRegister contacts={contacts} updateContacts={setContacts} updateContact={indexUpdate} />
      </div>
     
      <div>
       <ListRegister key={'listContact'} contacts={contacts} handleDeleteContact={handleDeleteContact} updateIndex={setIndexUpdate} /> 
      </div>
    </div>

    </main>
  )
}
