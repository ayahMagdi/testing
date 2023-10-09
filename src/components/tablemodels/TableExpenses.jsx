const TableExpenses = ({expensesList}) => {

  return (
    <div className="mt-9 h-auto max-h-[23rem] border shadow overflow-y-auto flex justify-center">
        <table className="table-auto w-full text-center border h-fit" style={{borderCollapse: 'collapse'}}>
            <thead className="sticky top-0 bg-main text-white border-b">
                <tr className='border-b border-slate-300'>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>التاريخ</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>قيمة المصروف</th>
                    <th scope="col" className="px-6 py-3" style={{border: '1px solid #00000024'}}>سبب الصرف</th>
                </tr>
            </thead>
            <tbody>
                {expensesList?.map((e , i) => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={i}>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.date}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-6 py-3" style={{border: '1px solid #00000024'}}>{e.reason}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableExpenses