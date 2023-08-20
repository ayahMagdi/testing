import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faPrint } from "@fortawesome/free-solid-svg-icons"

const TableSupplierbills = ({filteredItems , isSearched , bills ,title ,name}) => {

    const [noItems ,setNoItems] = useState(false)

    useEffect(() => {

        const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)
    
     }, [filteredItems])

     const handleShow = (e) => {
      console.log(e)
     }

  return (
    <div className='my-5'>
    <h2 className='text-center text-4xl font-bold mb-10 text-main'>{title}</h2>
    <div className={`my-10 mx-auto w-full h-auto max-h-[27rem] border shadow overflow-y-auto ${noItems ? 'hidden' : 'visible' }`}>
    <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
        <thead className="sticky top-0 bg-white border-b">
            <tr className='border-b border-slate-300'>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">رقم الفاتورة</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">التاريخ</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">{name}</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اجمالي الفاتورة</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">تنزيل</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">باقي الحساب</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">عرض</th>
                <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">طباعة</th>
            </tr>
        </thead>
        <tbody>
            {isSearched ? filteredItems?.map((e , i) => (
              <tr className='border-b border-slate-300 odd:bg-tablerow' key={i}>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.invoice}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.date}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.supplierName}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.totalwd}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                 <td className="px-6 py-3 cursor-pointer" style={{border: '1px solid #00000024'}} onClick={() => handleShow(e.invoice)}>
                    <FontAwesomeIcon icon={faEye} />
                 </td>
                 <td className="px-6 py-3 cursor-pointer" style={{border: '1px solid #00000024'}}>
                    <FontAwesomeIcon icon={faPrint} />
                 </td>
              </tr>
            ))
            : bills?.map((e , i) => (
                <tr className='border-b border-slate-300 odd:bg-tablerow' key={i}>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.invoice}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.date}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.supplierName}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.totalwd}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                 <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                 <td className="px-6 py-3 cursor-pointer" style={{border: '1px solid #00000024'}} onClick={() => handleShow(e.invoice)}>
                    <FontAwesomeIcon icon={faEye} />
                 </td>
                 <td className="px-6 py-3 cursor-pointer" style={{border: '1px solid #00000024'}}>
                    <FontAwesomeIcon icon={faPrint} />
                 </td>
              </tr>
            ))}
        </tbody>
    </table>
    </div>
</div>
  )
}

export default TableSupplierbills