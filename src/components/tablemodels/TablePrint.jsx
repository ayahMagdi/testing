const TablePrint = ({billPrint}) => {
  return (
    <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
               <thead className="sticky top-0 bg-black text-white border-b">
                     <tr className='border-b border-slate-300'>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">كود المنتج</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">اسم المنتج</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الكمية</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الوحدة</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">السعر</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-6 py-3">الاجمالي</th>
                     </tr>
               </thead>
               <tbody>
                     {billPrint?.map((e , i) => (
                        <tr className='border-b border-slate-300 even:bg-neutral-100' key={i}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.itemCode}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.itemName}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.qty}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.price}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                     </tr>
                     ))}
               </tbody>
             </table>
  )
}

export default TablePrint