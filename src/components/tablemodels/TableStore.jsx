import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider'

const TableStore = ({filteredItems , isSearched}) => {

 const {stores} = useStateValue()
 const [noItems ,setNoItems] = useState(false)

 const calcStore = (q1 , q2) => {
   return q1 - q2
 }

 useEffect(() => {

    const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)

 }, [filteredItems])

  return (
    <div className='my-5'>
        <h2 className='text-center text-4xl font-bold mb-10 text-main'>قائمة الاصناف</h2>
        <div className='my-10 mx-auto w-full h-auto max-h-[27rem] border shadow overflow-y-auto'>
        <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
            <thead className="sticky top-0 bg-main text-white border-b">
                <tr className='border-b border-slate-300'>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">كود المنتج</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اسم المنتج</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الوحدة</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">سعر الداخل</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">سعر الخارج</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الداخل</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الخارج</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">المخزون</th>
                    <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الاجمالي</th>
                </tr>
            </thead>
            <tbody className={noItems ? 'hidden' : 'visible'}>
                {isSearched ? filteredItems?.map(e => (
                  <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.income}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.outcome}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.avlqty}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.soldqty}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty)}</td>
                     <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty) * e.income}</td>
                  </tr>
                ))
                : stores?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.income}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.outcome}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.avlqty}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.soldqty}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty)}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty) * e.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TableStore