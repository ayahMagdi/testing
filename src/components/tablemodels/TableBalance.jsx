import { faPlusMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TableBalance = ({supplierList ,title,codeText ,nameText ,filteredItems ,url , isSearched ,totalbalance ,getRecordReduction}) => {

    const [noItems ,setNoItems] = useState(false)
    const navigate = useNavigate();
   
    useEffect(() => {
   
       const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)
   
    }, [filteredItems])

    const handleReduction = (e) => {
        getRecordReduction(e)
        navigate(url)
    }

  return (
    <div className='my-3'>
        <h2 className='text-center text-4xl font-bold mb-10 text-main'>{title}</h2>
        <div className='my-7 mx-auto w-full h-auto max-h-[22rem] border shadow overflow-y-auto'>
            <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
                <thead className="sticky top-0 bg-main text-white border-b">
                    <tr className='border-b border-slate-300'>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">{codeText}</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">{nameText}</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اجمالي الفواتير</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اجمالي التنزيل</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">باقي الحساب</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">تنزيل الحساب</th>
                    </tr>
                </thead>
                <tbody className={noItems ? 'hidden' : 'visible' }>
                    {isSearched ? filteredItems?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                        <td className="px-6 py-3 cursor-pointer" style={{border: '1px solid #00000024'}} onClick={() =>handleReduction(e)}>
                            <FontAwesomeIcon icon={faPlusMinus} />
                        </td>
                    </tr>
                    ))
                    : supplierList?.map(e => (
                        <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                        <td className="px-6 py-3 cursor-pointer" style={{border: '1px solid #00000024'}} onClick={() =>handleReduction(e)}>
                            <FontAwesomeIcon icon={faPlusMinus} />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='text-center'>
           <h3>اجمالي باقي الحساب</h3>
           <div className='border w-full p-4 rounded-md border-main mt-3 font-bold text-lg'>{totalbalance}</div>
       </div>
    </div>
  )
}

export default TableBalance