import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import ConfirmDelete from "../ConfirmDelete";

const TableInvoices = ({purchases , handleDelete ,deletCode , getRecord ,handleEdit}) => {

    const [show , setShow] = useState(false)
    const [code ,setCode] = useState(null)
    const [input ,setInput] = useState(null)
    const [err ,setErr] = useState(false)

    const handlePopup = (e) => {
        setShow(true)
        setCode(e)
        deletCode(e)
    }

    const checkDelete = () => {
        handleDelete()
        setShow(false)
    }

    const checkEdit = (e) => {
        getRecord(e)
        handleEdit(e)
    }

  return (
    <div className="mt-4 h-auto max-h-48 border shadow overflow-y-auto">
        <table className="table-auto w-full text-center border h-fit" style={{borderCollapse: 'collapse'}}>
            <thead className="sticky top-0 bg-main text-white border-b">
                <tr className='border-b border-slate-300'>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>كود المنتج</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>اسم المنتج</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>الوحدة</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>الكمية</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>السعر</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>الاجمالي</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>تعديل</th>
                    <th scope="col" className="px-5 py-2" style={{border: '1px solid #00000024'}}>حذف</th>
                </tr>
            </thead>
            <tbody>
                {purchases?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.itemCode}>
                        <td className="px-5 py-2" style={{border: '1px solid #00000024'}}>{e.itemCode}</td>
                        <td className="px-5 py-2" style={{border: '1px solid #00000024'}}>{e.itemName}</td>
                        <td className="px-5 py-2" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                        <td className="px-5 py-2" style={{border: '1px solid #00000024'}}>{e.qty}</td>
                        <td className="px-5 py-2" style={{border: '1px solid #00000024'}}>{e.price}</td>
                        <td className="px-5 py-2" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-5 py-2 cursor-pointer" onClick={() => checkEdit(e)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-5 py-2 cursor-pointer" onClick={() => handlePopup(e.itemCode)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {show && <ConfirmDelete  
           err={err}
           handleChange={(e) => setInput(e.target.value)}
           checkDelete={parseInt(input) === parseInt(100100) ? () => checkDelete(code) : () => setErr(true)}
           cancelDelete={() => setShow(false)}
         />}
    </div>
  )
}

export default TableInvoices