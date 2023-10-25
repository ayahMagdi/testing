import React, { useEffect, useState } from 'react'
import FormReduction from '../components/formmodels/FormReduction'
import ModelBtns from '../components/ModelBtns';
import { useStateValue } from '../context/stateProvider';
import TableReduction from '../components/tablemodels/TableReduction';
import ConfirmationButton from '../components/ConfirmationButton';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SupplierReduction = ({recordReduction}) => {

  const currentDate = new Date().toLocaleDateString();
  const [checkTotal,setCheckTotal] = useState(false)
  const [checkValue,setCheckValue] = useState(false)

  const {addTotalReduction ,totalReduction ,editSupplierBalance} = useStateValue()
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
           addTotalReduction(code , name , date , reduction)
           editSupplierBalance(code , false , true , reduction)
           reset()
       }
   }

   const uniqueDataInvoice = totalReduction.filter(e => e.code === recordReduction.code)

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
      navigate('/supplierbalance')
   }

  return (
    // <div className='container mx-auto px-4 max-h-screen'>
      //  <FormReduction 
      //     codeText='كود المورد'
      //     nameText='اسم المورد'
      //     codeval={reductionInfo.code}
      //     nameval={reductionInfo.name}
      //     dateval={reductionInfo.date}
      //     reductionval={reductionInfo.reduction}
      //     handleChange={handleChange}
      //     handleSubmit={handleSubmit}
      //     checkTotal={checkTotal}
      //     checkValue={checkValue}
      //  />
      //  <ModelBtns form='my-form' handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-9'} />
      //  <TableReduction listReduction={uniqueDataInvoice} />
      //  {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={cancelAdd} cancel={() => setShow(false)} />}
    // </div>
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
          <FormReduction 
          codeText='كود المورد'
          nameText='اسم المورد'
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
      </div>
   </div>
  )
}

export default SupplierReduction