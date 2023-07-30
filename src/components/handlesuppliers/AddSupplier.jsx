import { useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormSuppliersModel from '../formmodels/FormSuppliersModel';

const AddSupplier = ({isAdded}) => {
 
    const [supplierInfo , setSupplierInfo] = useState(
        {code: '',name: '',phone: ''}
     )
 const {addSupplier} = useStateValue()
 const [success ,setSuccess] = useState(false)
 const [show ,setShow] = useState(false)
 const navigate = useNavigate();

 function handleChange(event){
    setSupplierInfo(prevData => {
         return {
             ...prevData, 
             [event.target.name] : event.target.value
         }
     })
 }

 const {code , name , phone} = supplierInfo

 const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    addSupplier(code , name , phone)
    isAdded(true)
    navigate('/allsuppliers')
 }

  return (
    <div className='mt-8'>
       <FormSuppliersModel title="اضافة مورد جديد" handleSubmit={handleSubmit} handleChange={handleChange} />
       <ModelBtns handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' />
       {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={() => navigate('/allsuppliers')} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddSupplier