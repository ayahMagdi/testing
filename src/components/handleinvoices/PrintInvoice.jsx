import React from 'react'
import TablePrint from '../tablemodels/TablePrint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const PrintInvoice = ({handleClose ,printableRef ,handlePrintt ,billPrint,invoice,date,name,totalbill,discount,totalwd,reduction,remaining, show}) => {
  return (
    <div className='bg-popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className='bg-white p-8 rounded-lg w-7/12 relative'>
             <div onClick={handleClose} className="border-2 rounded-full flex justify-center items-center h-7 w-7 cursor-pointer border-white bg-zinc-950 text-white absolute -top-3 -right-3">
               <FontAwesomeIcon icon={faClose} />
             </div>
             <div ref={printableRef} className="p-6">
                {show && <div className='mb-7 text-lg font-bold'>
                    <h2 className='mb-1'>شركة البنا للاستيراد والتصدير</h2>
                    <h3 className='text-sm'>012345678911</h3>
                    <h3 className='text-sm'>012345678911</h3>
                </div>}
                <div className="flex justify-between items-center mb-10">
                <div>
                    <h3 className="font-bold mb-2">رقم الفاتورة: <span className="bg-neutral-100">{invoice}</span></h3>
                    <h3 className="font-bold mb-2"> التاريخ: <span className="bg-neutral-100">{date}</span></h3>
                    <h3 className="font-bold"> اسم المورد: <span className="bg-neutral-100">{name}</span></h3>
                </div>
                <div className=" basis-9/12">
                    <h3 className="font-bold mb-2"> اجمالي الفاتورة: <span className="bg-neutral-100">{totalbill}</span></h3>
                    <h3 className="font-bold mb-2">  نسبة الخصم: <span className="bg-neutral-100">{discount}%</span></h3>
                    <div className="flex justify-start items-start gap-5">
                        <h3 className="font-bold">  الاجمالي بعد الخصم: <span className="bg-neutral-100">{totalwd}</span></h3>
                        <h3 className="font-bold"> تنزيل : <span className="bg-neutral-100">{reduction}</span></h3>
                        <h3 className="font-bold"> باقي الحساب : <span className="bg-neutral-100">{remaining}</span></h3>
                    </div>
                </div>
                </div>
                <TablePrint billPrint={billPrint} />
             </div>
            <button onClick={handlePrintt} className="mx-auto w-40 p-3 block rounded-md bg-zinc-950 text-white">طباعة</button>
        </div>
      </div>
  )
}

export default PrintInvoice