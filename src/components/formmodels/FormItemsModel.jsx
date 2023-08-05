import Barcode from 'react-barcode';

const FormItemsModel = ({handleSubmit ,title ,handleChange ,invalidPrice ,codeVal ,barcodeVal ,nameVal ,unitVal ,incomeVal ,outcomeVal}) => {

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
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='code'
                            disabled
                            onChange={handleChange}
                            placeholder='مثال (123456789112288)'
                            value={codeVal}
                        />
                    </div>
                    <div>
                        <label className='mb-4 block'>الباركود</label>
                        <div className='w-full border px-4 h-14 rounded-2xl shadow-md border-gray-200'>
                           <Barcode value={codeVal && codeVal} displayValue={false} height={35} />
                        </div>
                    </div>
                    <div>
                        <label className='mb-4 block'>اسم المنتج</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='name'
                            required
                            minLength='3'
                            maxLength='20'
                            autoComplete= 'off'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            onChange={handleChange}
                            placeholder='مثال (اسم المنتج)'
                            value={nameVal}
                        />
                    </div> 
                    <div>
                        <label className='mb-4 block' value={unitVal}>الوحدة</label>
                        <select name="unit" onChange={handleChange} className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 appearance-none'>
                            <option value="قطعة">قطعة</option>
                            <option value="كرتونة">كرتونة</option>
                        </select>
                    </div>  
                    <div>
                        <label className='mb-3 block'>سعر الداخل</label>
                        <input
                            type='text'
                            className={`w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 ${invalidPrice && 'border-red-500'}`}
                            name='income'
                            required
                            autoComplete='off'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            placeholder='5000'
                            onChange={handleChange}
                            value={incomeVal}
                        />
                        {invalidPrice && <p className='text-red-500 mt-3'>سعر الداخل اكبر من سعر الخارج!</p>}
                    </div>
                    <div>
                        <label className='mb-3 block'>سعر الخارج</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='outcome'
                            required
                            autoComplete='off'
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