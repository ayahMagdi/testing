import Barcode from 'react-barcode';

const FormItemsModel = ({handleSubmit ,title ,handleChange ,codeVal ,barcodeVal ,nameVal ,unitVal ,incomeVal ,outcomeVal}) => {

  return (
    <div>
        <div className='mt-8'>
            <h2 className='text-center text-3xl font-bold text-main'>{title}</h2>
            <form className='mt-10' onSubmit={handleSubmit} id='my-form'>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <label className='mb-4 block'>كود المنتج</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-md shadow-md focus:outline-none focus:border-main'
                            name='code'
                            required
                            autoComplete='off'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            onChange={handleChange}
                            placeholder='مثال (123456789112288)'
                            value={codeVal}
                        />
                    </div>
                    <div>
                        <label className='mb-3 block'>الباركود</label>
                        <div className='w-full border rounded-md shadow-md h-14'>
                           <Barcode value={codeVal} displayValue={false} height={35} />
                        </div>
                        {/* <input
                            type='text'
                            className='w-full border p-4 rounded-md shadow-md focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                            name='barcode'
                            required
                            autoComplete='off'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            onChange={handleChange}
                            placeholder='123456789987654'
                            value={barcodeVal}
                        /> */}
                    </div>
                    <div>
                        <label className='mb-3 block'>اسم المنتج</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-md shadow-md focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                            name='name'
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
                        <label className='mb-3 block' value={unitVal}>الوحدة</label>
                        <select name="unit" onChange={handleChange} className='w-full border px-4 h-14 rounded-md shadow-md focus:outline-none focus:empty:border-main focus:invalid:border-red-500'>
                            <option value="قطعة">قطعة</option>
                            <option value="كرتونة">كرتونة</option>
                        </select>
                    </div>  
                    <div>
                        <label className='mb-3 block'>سعر الداخل</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                            name='income'
                            pattern="^\d+(\.\d{1,3})?$" 
                            required
                            autoComplete='off'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            placeholder='5000'
                            onChange={handleChange}
                            value={incomeVal}
                        />
                    </div>
                    <div>
                        <label className='mb-3 block'>سعر الخارج</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                            name='outcome'
                            required
                            autoComplete='off'
                            pattern="^\d+(\.\d{1,3})?$"
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            placeholder='6000'
                            onChange={handleChange}
                            value={outcomeVal}
                        />
                    </div>
                </div>   
            </form>
        </div>
    </div>
  )
}

export default FormItemsModel