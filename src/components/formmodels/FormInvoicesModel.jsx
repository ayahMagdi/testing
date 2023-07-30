import { useEffect, useRef } from "react"

const FormInvoicesModel = (
     {title,handleSubmit,handleChange,purchasVal,dateVal,supplierCodeVal,supplierNameVal,itemCodeVal,itemNameVal,unitVal,qtyVal,priceVal,totalVal}
 ) => {

    const userRef = useRef()

    useEffect(() => {
        userRef.current.focus()
      } , [])

  return (
    <div className='mt-3'>
        <h2 className='text-center text-3xl font-bold text-main'>{title}</h2>
        <form className='mt-10' onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-4 gap-6 mb-7'>
                <div>
                    <label className='mb-4 block font-bold'>رقم الفاتورة</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:outline-none focus:empty:border-main focus:invalid:border-red-500'
                        name='purchas'
                        placeholder='مثال (123456789)'
                        value={purchasVal}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>التاريخ</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='date'
                        placeholder='20/3/2023'
                        value={dateVal}
                        onChange={handleChange}
                        disabled
                    />
                </div> 
                <div>
                    <label className='mb-3 block font-bold'>كود المورد</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:border-2 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='supplierCode'
                        ref={userRef} 
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (123456789123)'
                        onChange={handleChange}
                        value={supplierCodeVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>اسم المورد</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='supplierName'
                        placeholder='مثال (محمد احمد)'
                        value={supplierNameVal}
                        onChange={handleChange}
                        disabled
                    />
                </div>
            </div>  
            <div className='grid grid-cols-6 gap-6'>
                <div>
                    <label className='mb-4 block font-bold'>كود المنتج</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:outline-none focus:empty:border-main focus:invalid:border-red-500'
                        name='itemCode'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        onChange={handleChange}
                        placeholder='مثال (123456789)'
                        value={itemCodeVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>اسم المنتج</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='itemName'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        onChange={handleChange}
                        placeholder='مثال (لابتوب)'
                        value={itemNameVal}
                    />
                </div> 
                <div>
                    <label className='mb-3 block font-bold'>الوحدة</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='unit'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (قطع)'
                        onChange={handleChange}
                        value={unitVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>الكمية</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='qty'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (50)'
                        onChange={handleChange}
                        value={qtyVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>السعر</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='price'
                        pattern="^\d+(\.\d{1,3})?$"
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='2000'
                        onChange={handleChange}
                        value={priceVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>الاجمالي</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='total'
                        autoComplete='off'
                        placeholder='5000'
                        onChange={handleChange}
                        value={totalVal}
                    />
                </div>
            </div>  
        </form>
    </div> 
  )
}

export default FormInvoicesModel