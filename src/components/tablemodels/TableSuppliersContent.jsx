import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStateValue } from '../../context/stateProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ConfirmDelete from '../ConfirmDelete';

const TableSuppliersContent = ({getSupplier, filteredItems ,isSearched ,isDeleted}) => {

    const {suppliers} = useStateValue();
    const [show , setShow] = useState(false)
    const [code ,setCode] = useState(null)
    const [input ,setInput] = useState(null)
    const [err ,setErr] = useState(false)
    const [noItems ,setNoItems] = useState(false)
    const navigate = useNavigate();

    const {deleteSupplier} = useStateValue()

    const handlePopup = (e) => {
        setShow(true)
        setCode(e)
    }
    const handleDelete = (e) => {
        deleteSupplier(e)
        setShow(false)
        isDeleted(true)
    }
    const handleEdit = (e) => {
        getSupplier(e)
        navigate('/homepage/suppliers/allsuppliers/editSupplier')
        localStorage.setItem('branch' , 'editSupplier')
    }

    useEffect(() => {

        const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)
 
     }, [filteredItems])

  return (
    <div className={`my-5 mx-auto w-full border shadow overflow-y-auto`}>
        <table className="table-auto w-full text-center" style={{borderCollapse: 'collapse'}}>
            <thead className="sticky top-0 bg-main text-white border-b">
                <tr className='border-b border-slate-300'>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>كود المورد</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>اسم المورد</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>رقم الهاتف</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>تعديل</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>حذف</th>
                </tr>
            </thead>
            <tbody className={noItems ? 'hidden' : 'visible' }>
                {isSearched ? filteredItems?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.phone}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handleEdit(e)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.code)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                )) :
                suppliers?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.phone}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handleEdit(e)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.code)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))
                }
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

export default TableSuppliersContent