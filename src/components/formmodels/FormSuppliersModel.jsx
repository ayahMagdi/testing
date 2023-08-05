import React from 'react'

const FormSuppliersModel = ({handleSubmit ,title ,handleChange ,codeVal ,nameVal ,phoneVal ,checkPhone}) => {
  return (
    <div>
         <div className='mt-8'>
            <h2 className='text-center text-3xl font-bold text-main'>{title}</h2>
            <form className='mt-10' onSubmit={handleSubmit} id='my-form'>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <label className='mb-4 block'>كود المورد</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='code'
                            disabled
                            onChange={handleChange}
                            placeholder='مثال (123456789112288)'
                            value={codeVal}
                        />
                    </div>
                    <div>
                        <label className='mb-4 block'>اسم المورد</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='name'
                            minLength='3'
                            maxLength='20'
                            required
                            autoComplete='off'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            onChange={handleChange}
                            placeholder='مثال (اسم المنتج)'
                            value={nameVal}
                        />
                    </div> 
                    <div>
                        <label className='mb-4 block'>رقم الهاتف</label>
                        <input
                            type='tel'
                            minLength="11" 
                            maxLength="11"
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='phone'
                            autoComplete='off'
                            placeholder='01123456789'
                            onChange={handleChange}
                            value={phoneVal}
                        />
                        {checkPhone && <p className='text-red-500 mt-3'> رقم الهاتف يبدأ ب (01) </p>}
                    </div>
                </div>   
            </form>
        </div>
    </div>
  )
}

export default FormSuppliersModel