import { useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormSuppliersModel from '../formmodels/FormSuppliersModel'

const EditSupplier = ({supplier,isEdited}) => {

    const {editSupplier} = useStateValue()
    const [success ,setSuccess] = useState(false)
    const [show ,setShow] = useState(false)
    const [newArr ,setNewArr] = useState(
        {
            code: supplier.code,
            name: supplier.name,
            phone: supplier.phone,
        })
    const navigate = useNavigate();

    const  {code , name , phone} = newArr

    const editedSuppliers = newArr

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
        editSupplier(supplier.code , editedSuppliers)
        isEdited(true)
        navigate('/allSuppliers')
    }

    const cancelEdit = () => {
        isEdited(false)
        navigate('/allSuppliers')
    }

  return (
    <div className='mt-8'>
    <FormSuppliersModel 
            title="تعديل المورد"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            codeVal={newArr.code}
            nameVal={newArr.name}
            phoneVal={newArr.phone}
    />
    <ModelBtns handlecancel={() => setShow(true)} form='my-form' title="تعديل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
    {show && <ConfirmationButton title='هل تريد الغاء التعديل؟' confirm={cancelEdit} cancel={() => setShow(false)} />}
</div>
  )
}

export default EditSupplier