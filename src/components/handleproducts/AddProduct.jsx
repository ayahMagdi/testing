import { useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import FormItemsModel from '../formmodels/FormItemsModel';
import ModelBtns from '../ModelBtns';


const AddProduct = ({isAdded}) => {
  
    const [productInfo , setProductInfo] = useState(
           {code: '' ,barcode: '',name: '',unit: 'قطعة',income: '',outcome: ''}
        )
    const {addItem} = useStateValue()
    const [success ,setSuccess] = useState(false) 
    const [show ,setShow] = useState(false)
    const navigate = useNavigate();

    function handleChange(event){
        setProductInfo(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    const {code , barcode , name , unit , income , outcome} = productInfo

    const handleSubmit = (e) => {
       e.preventDefault()
       setSuccess(true)
       addItem(code , barcode , name , unit , income , outcome)
       isAdded(true)
       navigate('/AllProducts')
    }

  return (
    <div className='mt-8'>
        <FormItemsModel title="اضافة منتج جديد" codeVal={productInfo.code} handleSubmit={handleSubmit} handleChange={handleChange} />
        <ModelBtns handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' />
        {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={() => navigate('/AllProducts')} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddProduct