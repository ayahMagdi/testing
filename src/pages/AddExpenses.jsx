import { useState } from 'react'
import FormExpenses from '../components/formmodels/FormExpenses'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/stateProvider';
import ModelBtns from '../components/ModelBtns';

const AddExpenses = () => {

    const {addExpenses} = useStateValue()

    const [expenses , setExpenses] = useState(
        {date: '',total: '',reason: ''}
     )

     const navigate = useNavigate();

    function handleChange(event){
        if (event.target.name === 'total') {
          if(!isNaN(event.target.value)){
            setExpenses(prevData => {
                return {
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            })
          }
       }else{
        setExpenses(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
       }
    }

    const {date,total,reason} = expenses

    const handleSubmit = (e) => {
            e.preventDefault()
             addExpenses(new Date(date).toLocaleDateString(),total,reason)
             navigate(-1)
     }
 
     const cancelAdd = () => {
         setExpenses({date:'' , total: '',reason: ''})
         navigate(-1)
     }

  return (
    <div className='container mx-auto px-4'>
        <FormExpenses
           handleChange={handleChange}
           handleSubmit={handleSubmit}
           totalVal={expenses.total}
           dateVal={expenses.date}
           reasonVal={expenses.reason}
         />
        <ModelBtns handlecancel={cancelAdd} form='my-form' title="تسجيل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
    </div>
  )
}

export default AddExpenses