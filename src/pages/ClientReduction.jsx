import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import FormReduction from '../components/formmodels/FormReduction';
import ModelBtns from '../components/ModelBtns';
import TableReduction from '../components/tablemodels/TableReduction';
import ConfirmationButton from '../components/ConfirmationButton';

const ClientReduction = ({recordReduction}) => {

    const currentDate = new Date().toLocaleDateString();
    const [checkTotal,setCheckTotal] = useState(false)
    const [checkValue,setCheckValue] = useState(false)
  
    const {addTotalReductionClient ,totalReductionClient ,editClientBalance} = useStateValue()
    const [show ,setShow] = useState(false)
    const navigate = useNavigate();
  
    const [reductionInfo , setReductionInfo] = useState({
      code: recordReduction.code,
      name: recordReduction.name,
      date: currentDate,
      reduction: ''
    })
  
    function handleChange(event){
        if(!isNaN(event.target.value)){
          setReductionInfo(prevData => {
              return {
                  ...prevData,
                  [event.target.name] : event.target.value
              }
          })
        }
     }
  
     useEffect(() => {
  
        const totalErr = reductionInfo.reduction && parseInt(reductionInfo.reduction) > parseInt(recordReduction.remaining) ?
                   setCheckTotal(true) : setCheckTotal(false)
        const valueErr = reductionInfo.reduction && parseInt(reductionInfo.reduction) <= 0 ?
                   setCheckValue(true) : setCheckValue(false)
  
     },[reductionInfo , recordReduction])
  
     const {code , name , date , reduction} = reductionInfo
  
     const handleSubmit = (e) => {
         e.preventDefault()
         if(!checkTotal && !checkValue){
             addTotalReductionClient(code , name , date , reduction)
             editClientBalance(code , false , true , reduction)
             reset()
         }
     }
  
     const uniqueDataInvoice = totalReductionClient.filter(e => e.code === recordReduction.code)
  
     const reset = () => {
        setCheckTotal(false)
        setCheckValue(false)
          setReductionInfo(prevData => {
          return {
              ...prevData,
              reduction: ''
          }
      })
     }
  
     const cancelAdd = (e) => {
        e.preventDefault()
        reset()
        navigate('/clientbalance')
     }

  return (
    <div className='container mx-auto px-4 max-h-screen'>
        <FormReduction
            codeText='كود العميل'
            nameText='اسم العميل'
            codeval={reductionInfo.code}
            nameval={reductionInfo.name}
            dateval={reductionInfo.date}
            reductionval={reductionInfo.reduction}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            checkTotal={checkTotal}
            checkValue={checkValue}
        />
       <ModelBtns form='my-form' handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-9'} />
       <TableReduction listReduction={uniqueDataInvoice} />
       {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={cancelAdd} cancel={() => setShow(false)} />}
   </div>
  )
}

export default ClientReduction