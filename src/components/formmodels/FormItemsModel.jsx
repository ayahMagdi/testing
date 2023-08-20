import Barcode from 'react-barcode';
import Select from 'react-select'

const FormItemsModel = ({handleSubmit ,title,options,handleChange,handleSelectChange ,invalidPrice ,codeVal ,barcodeVal ,nameVal ,unitVal ,incomeVal ,outcomeVal}) => {
 
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
                            required
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
                        <label className='mb-4 block'>الوحدة</label>
                        <Select 
                            name="unit" 
                            value={unitVal} 
                            onChange={handleSelectChange}
                            options={options}
                            getOptionValue={(option) => option.value}
                            placeholder='قطع'
                            className='w-full rounded-2xl shadow-md'
                            styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: 'rgb(229 231 235)',
                                  borderRadius: '1rem',
                                  height: '3.5rem',
                                  padding: '0 1rem',
                                }),
                              }}
                              theme={theme => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    neutral50: '#a9a9a9',
                                },
                            })}
                        />
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
                        {invalidPrice && <p className='text-red-500 mt-3'>سعر الداخل يجب ان يكون اقل من سعر الخارج</p>}
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