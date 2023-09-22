'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const ListRegister = ({ contacts }) => {

    return (<>
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
                    contacts.map((contact, index) => (
                        <>
                            <tr key={index} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-3">{contact.name}</td>
                                <td className="px-6 py-3">{contact.lastName}</td>
                                <td className="px-6 py-3">{contact.email}</td>
                                <td className="px-6 py-3">{contact.phone}</td>
                                <td className="px-6 py-3">
                                    <button className="m-1 hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-semibold bg-white text-gray-900">
                                        <FontAwesomeIcon icon={faPencilAlt} className='h-6 w-6' />
                                    </button>
                                    <button className='m-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
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