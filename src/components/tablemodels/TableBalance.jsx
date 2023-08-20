import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const TableBalance = ({supplierList ,title,codeText ,nameText ,filteredItems , isSearched}) => {

    const [noItems ,setNoItems] = useState(false)
   
    useEffect(() => {
   
       const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)
   
    }, [filteredItems])

  return (
    <div className='my-5'>
        <h2 className='text-center text-4xl font-bold mb-10 text-main'>{title}</h2>
        <div className={`my-10 mx-auto w-full h-auto max-h-[27rem] border shadow overflow-y-auto ${noItems ? 'hidden' : 'visible' }`}>
            <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
                <thead className="sticky top-0 bg-white border-b">
                    <tr className='border-b border-slate-300'>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">{codeText}</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">{nameText}</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اجمالي الفواتير</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اجمالي التنزيل</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">باقي الحساب</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">تنزيل الحساب</th>
                    </tr>
                </thead>
                <tbody>
                    {isSearched ? filteredItems?.map(e => (
                    <tr className='border-b border-slate-300 odd:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faDownload} />
                        </td>
                    </tr>
                    ))
                    : supplierList?.map(e => (
                        <tr className='border-b border-slate-300 odd:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>
                            <FontAwesomeIcon icon={faDownload} />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableBalance