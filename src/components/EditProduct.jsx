import { useState } from 'react'
import { useStateValue } from '../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from './ConfirmationButton';
import ModelBtns from './ModelBtns';
import FormItemsModel from './FormItemsModel';

const EditProduct = ({record}) => {

    const {editItem} = useStateValue()
    const [success ,setSuccess] = useState(false)
    const [show ,setShow] = useState(false)
    const [newArr ,setNewArr] = useState(
        {
            code: record.code,
            barcode: record.barcode,
            name: record.name,
            unit: record.unit,
            income: record.income,
            outcome: record.outcome
        })
    const navigate = useNavigate();

    const  {code , barcode , name , unit , income , outcome} = newArr

    const editedItems = newArr

    function handleChange(event){
        setNewArr(prevData => {
            return {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(true)
        editItem(record.code , editedItems)
        navigate('/AllProducts')
    }

  return (
    <div className='mt-8'>
        <FormItemsModel 
            title="تعديل المنتج"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            codeVal={newArr.code}
            barcodeVal={newArr.barcode}
            nameVal={newArr.name}
            incomeVal={newArr.income}
            outcomeVal={newArr.outcome}
        />
        {/* <h2 className='text-center text-3xl font-bold text-main'>تعديل المنتج</h2>
        <form className='mt-10' onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <label className='mb-4 block'>كود المنتج</label>
                    <input
                    type='text'
                    className='w-full border p-3 rounded-md shadow-md focus:outline-none focus:empty:border-main focus:invalid:border-red-500'
                    name='code'
                    required
                    value={newArr.code}
                    autoComplete='off'
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='mb-3 block'>الباركود</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                    name='barcode'
                    required
                    value={newArr.barcode}
                    autoComplete='off'
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='mb-3 block'>اسم المنتج</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md shadow-md focus:empty:border-main focus:outline-none focus:invalid:border-red-500'
                    name='name'
                    required
                    value={newArr.name}
                    autoComplete='off'
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    />
                </div> 
                <div>
                    <label className='mb-3 block'>الوحدة</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='unit'
                    required
                    value={newArr.unit}
                    autoComplete='off'
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    />
                </div>  
                <div>
                    <label className='mb-3 block'>سعر الداخل</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='income'
                    required
                    value={newArr.income}
                    autoComplete='off'
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='mb-3 block'>سعر الخارج</label>
                    <input
                    type='text'
                    className='w-full border p-4 rounded-md focus:empty:border-main shadow-md focus:outline-none focus:invalid:border-red-500'
                    name='outcome'
                    required
                    value={newArr.outcome}
                    autoComplete='off'
                    onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                    onInput={F => F.target.setCustomValidity('')}
                    onChange={handleChange}
                    />
                </div>
            </div>   
        </form> */}
        <ModelBtns handlecancel={() => setShow(true)} title="تعديل" />
        {show && <ConfirmationButton title='هل تريد الغاء التعديل؟' confirm={() => navigate('/AllProducts')} cancel={() => setShow(false)} />}
    </div>
  )
}

export default EditProduct