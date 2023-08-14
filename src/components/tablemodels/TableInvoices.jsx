import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

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
    <div className="mt-4 h-auto max-h-56 border shadow overflow-y-auto">
        <table className="table-auto w-full text-center border h-fit" style={{borderCollapse: 'collapse'}}>
            <thead className="sticky top-0 bg-white border-b">
                <tr className='border-b border-slate-300'>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>كود المنتج</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>اسم المنتج</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>الوحدة</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>الكمية</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>السعر</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>الاجمالي</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>تعديل</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>حذف</th>
                </tr>
            </thead>
            <tbody>
                {purchases?.map(e => (
                    <tr className='border-b border-slate-300 odd:bg-tablerow' key={e.itemCode}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.itemCode}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.itemName}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.qty}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.price}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => checkEdit(e)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </td>
                        <td className="px-6 py-3 cursor-pointer" onClick={() => handlePopup(e.itemCode)} style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {show && <div className='bg-popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg'>
                <h3 className='text-lg'>ادخل كود المنتج ليتم حذفه</h3>
                <div className='pt-6 items-center'>
                    <input 
                        type='text' 
                        name='code' 
                        placeholder='كود المنتج' 
                        className={`border border-main rounded-md p-3 focus:outline-none ${err && 'border-red-500'}`} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {err && <h4 className='text-red-500 text-sm mt-2 text-right'>الكود غلط</h4>}
                    <div className='flex justify-center items-center mt-2 gap-4'>
                        <button 
                            className='bg-main rounded-md text-white py-3 px-6 w-2/4'
                            onClick={code === input ? checkDelete : () => setErr(true)}>
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

export default TableInvoices