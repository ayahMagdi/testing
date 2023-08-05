import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormSuppliersModel from '../formmodels/FormSuppliersModel';

const AddSupplier = ({isAdded}) => {
 
  const {addSupplier ,suppliers} = useStateValue()
  const [supplierInfo , setSupplierInfo] = useState(
        {code: parseInt(suppliers.length) + 1,name: '',phone: ''}
  )

 const [show ,setShow] = useState(false)
 const [checkPhone ,setCheckPhone] = useState(false)
 const navigate = useNavigate();


 function handleChange(event){
    if (event.target.name === 'phone') {
        if(!isNaN(event.target.value)){
              setSupplierInfo(prevData => {
                  return {
                      ...prevData,
                      [event.target.name] : event.target.value
                  }
              })
        }
     }else{
      setSupplierInfo(prevData => {
          return {
              ...prevData,
              code: parseInt(suppliers.length) + 1,
              [event.target.name] : event.target.value
          }
      })
     }
 }

 useEffect(() => {

    const checkPrice = supplierInfo.phone && !supplierInfo.phone.startsWith('01') ? 
          setCheckPhone(true) : setCheckPhone(false)

 } , [supplierInfo.phone])

 const {code , name , phone} = supplierInfo

 const handleSubmit = (e) => {
    e.preventDefault()
    if(checkPhone === false){
        addSupplier(code , name , phone)
        isAdded(true)
        navigate('/allsuppliers')
    }
 }

 const cancelAdd = () => {
    isAdded(false)
    navigate('/allsuppliers')
}

  return (
    <div className='mt-8'>
       <FormSuppliersModel 
           title="اضافة مورد جديد" 
           handleSubmit={handleSubmit} 
           handleChange={handleChange} 
           codeVal={supplierInfo.code}
           nameVal={supplierInfo.name}
           phoneVal={supplierInfo.phone}
           checkPhone={checkPhone}
       />
       <ModelBtns handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
       {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={cancelAdd} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddSupplier