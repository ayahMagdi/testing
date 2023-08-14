import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormClientsModel from '../formmodels/FormClientsModel';

const AddClient = ({isAdded}) => {


    const {addClient , clients} = useStateValue()
    const [clientInfo , setClientInfo] = useState(
        {code: parseInt(clients.length) + 1,name: '',phone: '' ,address: ''}
     )

 const [show ,setShow] = useState(false)
 const [checkPhone ,setCheckPhone] = useState(false)
 const navigate = useNavigate();

 function handleChange(event){
    if (event.target.name === 'phone') {
        if(!isNaN(event.target.value)){
              setClientInfo(prevData => {
                  return {
                      ...prevData,
                      [event.target.name] : event.target.value
                  }
              })
        }
     }else{
      setClientInfo(prevData => {
          return {
              ...prevData,
              code: parseInt(clients.length) + 1,
              [event.target.name] : event.target.value
          }
      })
     }
 }

 useEffect(() => {

    const checkPrice = clientInfo.phone && !clientInfo.phone.startsWith('01') ? 
          setCheckPhone(true) : setCheckPhone(false)

 } , [clientInfo.phone])

 const {code , name , phone , address} = clientInfo

 const handleSubmit = (e) => {
    e.preventDefault()
    if(checkPhone === false){
        addClient(code , name , phone ,address)
        isAdded(true)
        navigate('/allclients')
    }
 }

 const cancelAdd = () => {
    isAdded(false)
    navigate('/allclients')
}


  return (
    <div className='mt-8'>
       <FormClientsModel 
          title="اضافة عميل جديد" 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          codeVal={clientInfo.code}
          nameVal={clientInfo.name}
          phoneVal={clientInfo.phone}
          addressVal={clientInfo.address}
          checkPhone={checkPhone}
        />
       <ModelBtns handlecancel={() => setShow(true)} form='my-form' title="تسجيل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
       {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={cancelAdd} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddClient