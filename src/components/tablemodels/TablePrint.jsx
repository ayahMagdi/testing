const TablePrint = ({billPrint}) => {
  return (
     <div>
        <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
               <thead className="sticky top-0 bg-black text-white border-b">
                     <tr className='border-b border-slate-300'>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-5 py-2">كود المنتج</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-5 py-2">اسم المنتج</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-5 py-2">الكمية</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-5 py-2">الوحدة</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-5 py-2">السعر</th>
                        <th scope="col" style={{border: '1px solid #00000024'}} className="px-5 py-2">الاجمالي</th>
                     </tr>
               </thead>
               <tbody>
                     {billPrint?.map((e , i) => (
                        <tr className='border-b border-slate-300 even:bg-neutral-100' key={i}>
                        <td className="px-5 py-1" style={{border: '1px solid #00000024'}}>{e.itemCode}</td>
                        <td className="px-5 py-1" style={{border: '1px solid #00000024'}}>{e.itemName}</td>
                        <td className="px-5 py-1" style={{border: '1px solid #00000024'}}>{e.qty}</td>
                        <td className="px-5 py-1" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                        <td className="px-5 py-1" style={{border: '1px solid #00000024'}}>{e.price}</td>
                        <td className="px-5 py-1" style={{border: '1px solid #00000024'}}>{e.total}</td>
                     </tr>
                     ))}
               </tbody>
        </table>
      </div>
  )
}

export default TablePrint