import { useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormClientsModel from '../formmodels/FormClientsModel';

const AddClient = ({isAdded}) => {


    const [clientInfo , setClientInfo] = useState(
        {code: '',name: '',phone: '' ,address: ''}
     )
 const {addClient} = useStateValue()
 const [success ,setSuccess] = useState(false)
 const [show ,setShow] = useState(false)
 const navigate = useNavigate();

 function handleChange(event){
    setClientInfo(prevData => {
         return {
             ...prevData, 
             [event.target.name] : event.target.value
         }
     })
 }

 const {code , name , phone , address} = clientInfo

 const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    addClient(code , name , phone ,address)
    isAdded(true)
    navigate('/allclients')
 }


  return (
    <div className='mt-8'>
       <FormClientsModel title="اضافة عميل جديد" handleSubmit={handleSubmit} handleChange={handleChange} />
       <ModelBtns handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' />
       {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={() => navigate('/allsuppliers')} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddClient