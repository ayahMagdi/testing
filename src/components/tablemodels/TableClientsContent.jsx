import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStateValue } from '../../context/stateProvider';

const TableClientsContent = ({getClient , filteredItems , isSearched , isDeleted}) => {

    const {clients,deleteClient} = useStateValue();
    const [show , setShow] = useState(false)
    const [code ,setCode] = useState(null)
    const [input ,setInput] = useState(null)
    const [err ,setErr] = useState(false)
    const navigate = useNavigate();

    const handlePopup = (e) => {
        setShow(true)
        setCode(e)
    }
    const handleDelete = (e) => {
        deleteClient(e)
        setShow(false)
        isDeleted(true)
    }
    const handleEdit = (e) => {
        getClient(e)
        navigate('/editClient')
    }

  return (
    <div>
        <table className="table-auto w-full text-center">
            <thead>
                <tr className='border-b border-slate-300'>
                    <th scope="col" className="px-6 py-3">كود العميل</th>
                    <th scope="col" className="px-6 py-3">اسم العميل</th>
                    <th scope="col" className="px-6 py-3">رقم الموبايل</th>
                    <th scope="col" className="px-6 py-3">العنوان</th>
                    <th scope="col" className="px-6 py-3">تعديل</th>
                    <th scope="col" className="px-6 py-3">حذف</th>
                </tr>
            </thead>
            <tbody>
                {isSearched ? filteredItems?.map(e => (
                    <tr className='border-b border-slate-300 odd:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3">{e.code}</td>
                        <td className="px-6 py-3">{e.name}</td>
                        <td className="px-6 py-3">{e.phone}</td>
                        <td className="px-6 py-3">{e.address}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handleEdit(e)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.code)} >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))
                : clients?.map(e => (
                    <tr className='border-b border-slate-300 odd:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3">{e.code}</td>
                        <td className="px-6 py-3">{e.name}</td>
                        <td className="px-6 py-3">{e.phone}</td>
                        <td className="px-6 py-3">{e.address}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handleEdit(e)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.code)} >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {show && <div className='bg-popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg'>
                <h3 className='text-lg'>ادخل كود العميل ليتم حذفه</h3>
                <div className='pt-6 items-center'>
                    <input 
                        type='text' 
                        name='code' 
                        placeholder='كود العميل' 
                        className={`border border-main rounded-md p-3 focus:outline-none ${err && 'border-red-500'}`} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {err && <h4 className='text-red-500 text-sm mt-2 text-right'>الكود غلط</h4>}
                    <div className='flex justify-center items-center mt-2 gap-4'>
                        <button 
                            className='bg-main rounded-md text-white py-3 px-6 w-2/4'
                            onClick={code === input ? () => handleDelete(code) : () => setErr(true)}>
                            تأكيد
                        </button>
                        <button 
                            className='rounded-md text-red-500 border w-2/4 border-red-500 py-3 px-6'
                            onClick={() => setShow(false)}
                        >
                            الغاء
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default TableClientsContent