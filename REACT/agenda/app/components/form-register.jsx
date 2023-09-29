'use client'
import { XCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useRef, useState, useEffect } from 'react';

export const FormRegister = ({ contacts, updateContacts, updateContact }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const inputNameRef = useRef(null);
    const [edit, setEdit] = useState(false);
    const [showAlert, setShowAlert] = useState('hidden');
    const [message, setMessage] = useState('');
    const btn = 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

    const handelCancel = () => {
        setName('');
        setEmail('');
        setLastName('');
        setPhone('');
        setEdit(false);
        inputNameRef.current.focus();
    }

    const validateDataEmail = (email) => {
        // -1 si no esta y las position si esta
        return contacts.findIndex((contact) => {
            return contact.email.toLowerCase() == email.toLowerCase();
        })
    }
    const validateDataPhone = (phone) => {
        // -1 si no esta y las position si esta
        return contacts.findIndex((contact) => {
            return contact.phone.toLowerCase() == phone.toLowerCase();
        })
    }

    const handelSubmit = () => {

        if (edit == false) {
            if (validateDataPhone(phone) == -1 && validateDataEmail(email) == -1) {
                let contact = [{
                    name,
                    lastName,
                    email,
                    phone
                }];
                updateContacts([...contacts, ...contact]);

                setMessage('Data save');
                setShowAlert('');
                handelCancel();
            }
            else {

                setMessage('Email and Phone Repeat');
                setShowAlert('');
            }
        }
        else {
            if ((validateDataPhone(phone) == -1 || validateDataPhone(phone) == updateContact ) 
                && (validateDataEmail(email) == -1 || validateDataEmail(email) == updateContact ) ) {
                contacts[updateContact].name = name;
                contacts[updateContact].lastName = lastName;
                contacts[updateContact].email = email;
                contacts[updateContact].phone = phone;
                updateContacts([...contacts]);
                setMessage('Data save');
                setShowAlert('');
                handelCancel();
            }
            else {

                setMessage('Email and Phone Repeat');
                setShowAlert('');
            }
        }

    }

    useEffect(() => {
        if (updateContact > -1) {
            setName(contacts[updateContact].name)
            setLastName(contacts[updateContact].lastName)
            setEmail(contacts[updateContact].email)
            setPhone(contacts[updateContact].phone)
            setEdit(true);
        }
        console.log(updateContact);
    }, [updateContact])

    useEffect(() => {
        if (showAlert != 'hidden') {
            const timer = setTimeout(() => {
                setShowAlert('hidden');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert])

    return (
        <>

            <div className="border-b border-gray-900/10 pb-12">



                <div className={showAlert + " flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"} role="alert">
                    <div className="ml-3 text-sm font-medium"> {message}
                    </div>
                    <button onClick={() => { setShowAlert('hidden') }} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700">
                        <span class="sr-only">Close</span>
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>

                <h2 className="text-base font-semibold leading-7 text-gray-900">{edit ? 'Edit ' : ''}Personal Information</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                value={name}
                                onChange={(e) => {
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
                                onChange={(e) => {
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
                                onChange={(e) => {
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
                                onChange={(e) => {
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
                    <PaperAirplaneIcon className='h-4 w-4' />
                    Save
                </button>
            </div>
        </>
    );

}