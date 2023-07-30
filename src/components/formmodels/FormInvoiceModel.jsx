import React from 'react'

const FormInvoiceModel = ({handleSubmit , handleChange , totalVal ,discountVal,totalwdVal , reductionVal , remainingVal , itemsVal}) => {
  return (
    <div>
        <form className='my-14' onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-6 gap-6'>
                <div>
                    <label className='mb-4 block font-bold'>اجمالي الفاتورة</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:outline-none focus:empty:border-main focus:invalid:border-red-500'
                        name='total'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        onChange={handleChange}
                        placeholder='مثال (123456789)'
                        value={totalVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>نسبة الخصم</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='discount'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        onChange={handleChange}
                        placeholder='مثال (35%)'
                        value={discountVal}
                    />
                </div> 
                <div>
                    <label className='mb-3 block font-bold'>الاجمالي بعد الخصم</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='totalwd'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='5000'
                        onChange={handleChange}
                        value={totalwdVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>تنزيل</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='reduction'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (50)'
                        onChange={handleChange}
                        value={reductionVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>باقي الحساب</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='remaining'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='2000'
                        onChange={handleChange}
                        value={remainingVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block font-bold'>عدد الاصناف</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-lg border-gray-500 focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                        name='items'
                        autoComplete='off'
                        placeholder='5000'
                        onChange={handleChange}
                        value={itemsVal}
                    />
                </div>
            </div>  
        </form>
    </div>
  )
}

export default FormInvoiceModel