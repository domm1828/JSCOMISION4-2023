'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

export const ListRegister = ({ contacts, handleDeleteContact, updateIndex }) => {

    const [search, setSearch] = useState('');
    const [listContact,setListContact] = useState(contacts);

    const filterContact = () =>{
        let filter = search.trim().toLowerCase();//a
        let filterData = contacts.filter((contact)=>{
            return contact.name.toLowerCase().includes(filter) ||
                   contact.lastName.toLowerCase().includes(filter) ||
                   contact.email.toLowerCase().includes(filter)
        });
        console.log(filterData);
        setListContact(filterData);
    };
    
    const handleClickActions = (email,action)=>{
    
        // -1 si no esta y las position si esta
       let index = contacts.findIndex((contact)=>{
            return contact.email.toLowerCase() == email.toLowerCase();
        });
        if(action =='edit'){
            updateIndex(index);
        }
        if(action=='delete'){
            handleDeleteContact(index)
        }
    }

    useEffect(()=>{
        setListContact(contacts);
        filterContact();
    },[contacts]);

    return (<>

        <div className="my-2">
            <input
                value={search}
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
                onKeyUp={filterContact}
                type='text'
                placeholder='Filter by Full name and Email'
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">First Name</th>
                    <th className="px-6 py-3">Last Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    listContact.map((contact, index) => (
                        <>
                            <tr key={index} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-3">{contact.name}</td>
                                <td className="px-6 py-3">{contact.lastName}</td>
                                <td className="px-6 py-3">{contact.email}</td>
                                <td className="px-6 py-3">{contact.phone}</td>
                                <td className="px-6 py-3">
                                    <button onClick={() => { handleClickActions(contact.email,'edit') }} className="m-1 hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-semibold bg-white text-gray-900">
                                        <FontAwesomeIcon icon={faPencilAlt} className='h-6 w-6' />
                                    </button>
                                    <button onClick={() => { handleClickActions(contact.email,'delete') }} className='m-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                        <FontAwesomeIcon icon={faTrashAlt} className='h-6 w-6' />
                                    </button>
                                </td>
                            </tr>

                        </>
                    ))
                }


            </tbody>
        </table>
    </>);

}