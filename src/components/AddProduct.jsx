import React from 'react'

const AddProduct = () => {
  return (
    <div className='mt-6'>
        <h2 className='text-center text-3xl font-bold'>اضافة منتج جديد</h2>
        <form className='mt-10 grid grid-cols-2 gap-6'>
            <div>
                <label className='mb-3 block'>اسم المنتج</label>
                <input
                   type='text'
                   className='w-full border p-4 rounded-md shadow-md focus:outline-none'
                   name='productName'
                   placeholder='مثال (اسم المنتج)'
                />
            </div>
            <div>
                <label className='mb-4 block'>كود المنتج</label>
                <input
                   type='text'
                   className='w-full border p-3 rounded-md shadow-md focus:outline-none'
                   name='productCode'
                   placeholder='مثال (123456789112288)'
                />
            </div>
            <div>
                <label className='mb-3 block'>الباركود</label>
                <input
                   type='text'
                   className='w-full border p-4 rounded-md shadow-md focus:outline-none'
                   name='productBarcode'
                   placeholder='123456789987654'
                />
            </div>
            <div>
                <label className='mb-3 block'>تاريخ انتهاء الصلاحية</label>
                <input
                   type='date'
                   className='w-full border p-4 rounded-md shadow-md focus:outline-none'
                   name='expiryDate'
                   placeholder='20/09/2025'
                />
            </div>
            <div>
                <label className='mb-3 block'>عدد قطع المنتج</label>
                <input
                   type='number'
                   min= '1'
                   className='w-full border p-3 rounded-md shadow-md focus:outline-none'
                   name='productNum'
                   placeholder='50'
                />
            </div>
        </form>
    </div>
  )
}

export default AddProduct