import { useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormClientsModel from '../formmodels/FormClientsModel';

const EditClient = ({client}) => {

    const {editClient} = useStateValue()
    const [success ,setSuccess] = useState(false)
    const [show ,setShow] = useState(false)
    const [newArr ,setNewArr] = useState(
        {
            code: client.code,
            name: client.name,
            phone: client.phone,
            address: client.address,
        })
    const navigate = useNavigate();

    const  {code , name , phone , address} = newArr

    const editedClients = newArr

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
        editClient(client.code , editedClients)
        navigate('/allclients')
    }

  return (
    <div className='mt-8'>
    <FormClientsModel 
            title="تعديل العميل"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            codeVal={newArr.code}
            nameVal={newArr.name}
            phoneVal={newArr.phone}
            addressVal={newArr.address}
    />
    <ModelBtns handlecancel={() => setShow(true)} title="تعديل" />
    {show && <ConfirmationButton title='هل تريد الغاء التعديل؟' confirm={() => navigate('/AllProducts')} cancel={() => setShow(false)} />}
</div>
  )
}

export default EditClient