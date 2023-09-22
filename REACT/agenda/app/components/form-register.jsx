'use client'
import { XCircleIcon,PaperAirplaneIcon  } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react';

export const FormRegister = ({contacts,updateContacts}) => {
    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const inputNameRef = useRef(null);
    const btn = 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    
    const handelCancel=()=>{
        setName('');
        setEmail('');
        setLastName('');
        setPhone('');
        inputNameRef.current.focus();
    }

    const handelSubmit =()=>{
        let contact = [{
            name,
            lastName,
            email,
            phone
        }];

        updateContacts([...contacts,...contact]);
        handelCancel();

    }

    return (
        <>
        {name} {lastName} {email} {phone}
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                value={name}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                                type="text"
                                name="first-name"
                                id="first-name" 
                                ref={inputNameRef}
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                value={lastName}
                                onChange={(e)=>{
                                    setLastName(e.target.value)
                                }}
                                type="text"
                                name="last-name"
                                id="last-name" 
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                id="email"
                                name="email"  
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone
                        </label>
                        <div className="mt-2">
                            <input
                                value={phone}
                                onChange={(e)=>{
                                    setPhone(e.target.value)
                                }}
                                id="phone"
                                name="phone" 
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>









                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={handelCancel} type="button" className="hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-semibold bg-white text-gray-900">
                  <XCircleIcon className='h-4 w-4' />  Cancel
                </button>
                <button
                    type="button"
                    className={btn}
                    onClick={handelSubmit}
                >
                    <PaperAirplaneIcon  className='h-4 w-4' />
                    Save
                </button>
            </div>
        </>
    );

}