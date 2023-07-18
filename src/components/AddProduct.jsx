import { useState } from 'react'
import { useStateValue } from '../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from './ConfirmationButton';

const AddProduct = () => {
  
    const [productInfo , setProductInfo] = useState(
           {code: '' ,barcode: '',name: '',unit: '',income: '',outcome: ''}
        )
    const [success ,setSuccess] = useState(false)
    const [show ,setShow] = useState(false)
    const [{product}, dispatch] = useStateValue();
    const navigate = useNavigate();

    function handleChange(event){
        setProductInfo(prevData => {
            return {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        })
    }

    function addProduct(){
        dispatch({
         type: 'ADD_PRODUCT',
         item: {
             code: productInfo.code,
             barcode: productInfo.barcode,
             name: productInfo.name,
             unit: productInfo.unit,
             income: productInfo.income,
             outcome: productInfo.outcome
         }
        })
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       addProduct()
       setSuccess(true)
       navigate('/AllProducts')
    }

  return (
    <div className='mt-6'>
        <h2 className='text-center text-3xl font-bold'>اضافة منتج جديد</h2>
        <form className='mt-10' onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <label className='mb-4 block'>كود المنتج</label>
                    <input
                    type='text'
                    className='w-full border p-3 rounded-md shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='code'
                    required
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    placeholder='مثال (123456789112288)'
                    />
                </div>
                <div>
                    <label className='mb-3 block'>الباركود</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='barcode'
                    required
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    placeholder='123456789987654'
                    />
                </div>
                <div>
                    <label className='mb-3 block'>اسم المنتج</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='name'
                    required
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    placeholder='مثال (اسم المنتج)'
                    />
                </div> 
                <div>
                    <label className='mb-3 block'>الوحدة</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='unit'
                    required
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    placeholder='قطع'
                    />
                </div>  
                <div>
                    <label className='mb-3 block'>سعر الداخل</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='income'
                    required
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    placeholder='5000'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='mb-3 block'>سعر الخارج</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='outcome'
                    required
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    placeholder='6000'
                    onChange={handleChange}
                    />
                </div>
            </div>   
        </form>
        <div className='flex justify-center mt-10 gap-6'>
                <button 
                      className='bg-main text-lg text-white rounded-md w-60 py-4 cursor-pointer'
                      form='my-form' type="submit"
                >
                   تسجيل
                </button>
                <button 
                   className='text-red-500 text-lg border-2 border-red-500 rounded-md w-60 py-4 cursor-pointer'
                   onClick={() => setShow(true)}
                >
                    الغاء
                </button>
        </div>
        {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={() => navigate('/AllProducts')} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddProduct