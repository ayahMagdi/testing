import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStateValue } from '../../context/stateProvider';
import ConfirmDelete from '../ConfirmDelete';

const TableClientsContent = ({getClient , filteredItems , isSearched , isDeleted}) => {

    const {clients,deleteClient} = useStateValue();
    const [show , setShow] = useState(false)
    const [code ,setCode] = useState(null)
    const [input ,setInput] = useState(null)
    const [err ,setErr] = useState(false)
    const [noItems ,setNoItems] = useState(false)
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

    useEffect(() => {

        const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)
 
     }, [filteredItems])

  return (
    <div className={`my-10 mx-auto w-11/12 h-auto max-h-96 border shadow overflow-y-auto ${noItems ? 'hidden' : 'visible' }`}>
        <table className="table-auto w-full text-center" style={{borderCollapse: 'collapse'}}>
            <thead className="sticky top-0 bg-main text-white border-b">
                <tr className='border-b border-slate-300'>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>كود العميل</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>اسم العميل</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>رقم الموبايل</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>العنوان</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>تعديل</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>حذف</th>
                </tr>
            </thead>
            <tbody>
                {isSearched ? filteredItems?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.phone}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.address}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handleEdit(e)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.code)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))
                : clients?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.phone}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.address}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handleEdit(e)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.code)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {show && <ConfirmDelete  
           err={err}
           handleChange={(e) => setInput(e.target.value)}
           checkDelete={parseInt(input) === parseInt(100100) ? () => handleDelete(code) : () => setErr(true)}
           cancelDelete={() => setShow(false)}
         />}
    </div>
  )
}

export default TableClientsContent