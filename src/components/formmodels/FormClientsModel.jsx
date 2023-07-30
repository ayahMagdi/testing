const FormClientsModel = ({handleSubmit ,title ,handleChange ,codeVal ,nameVal ,phoneVal ,addressVal}) => {
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
                        className='w-full border p-4 rounded-md shadow-md focus:outline-none focus:empty:border-main focus:invalid:border-red-500'
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
                    <label className='mb-3 block'>اسم المورد</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-md shadow-md focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
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
                    <label className='mb-3 block'>رقم الهاتف</label>
                    <input
                        type='tel'
                        pattern="[0-9]{11}" 
                        minlength="11" 
                        maxlength="11"
                        className='w-full border p-4 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                        name='phone'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='01202020202'
                        onChange={handleChange}
                        value={phoneVal}
                    />
                </div>
                <div>
                    <label className='mb-3 block'>العنوان</label>
                    <input
                        type='text'
                        className='w-full border p-4 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                        name='address'
                        required
                        autoComplete='off'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مصر محافظة الشرقية'
                        onChange={handleChange}
                        value={addressVal}
                    />
                </div>
            </div>   
        </form>
        </div> 
    </div>
  )
}

export default FormClientsModel