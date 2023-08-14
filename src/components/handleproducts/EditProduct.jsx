import { useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormItemsModel from '../formmodels/FormItemsModel';

const EditProduct = ({record , isEdited}) => {

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
        isEdited(true)
        navigate('/AllProducts')
    }

    const cancelEdit = () => {
        isEdited(false)
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
                unitVal={newArr.unit}
                incomeVal={newArr.income}
                outcomeVal={newArr.outcome}
        />
        <ModelBtns handlecancel={() => setShow(true)} form='my-form' title="تعديل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
        {show && <ConfirmationButton title='هل تريد الغاء التعديل؟' confirm={cancelEdit} cancel={() => setShow(false)} />}
    </div>
  )
}

export default EditProduct