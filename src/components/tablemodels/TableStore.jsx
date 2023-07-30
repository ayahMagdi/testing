import React from 'react'
import { useStateValue } from '../../context/stateProvider'

const TableStore = () => {

 const {store} = useStateValue()

 const calcStore = (q1 , q2) => {
   return q1 - q2
 }

  return (
    <div className="mt-7 mb-16">
        <h2 className='text-center text-4xl font-bold mb-10 text-main'>قائمة الاصناف</h2>
        <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
            <thead>
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
            <tbody>
                {store?.map(e => (
                    <tr className='border-b border-slate-300 odd:bg-tablerow' key={e.code}>
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
  )
}

export default TableStore