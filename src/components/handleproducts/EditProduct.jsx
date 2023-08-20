import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import ModelBtns from '../ModelBtns';
import FormItemsModel from '../formmodels/FormItemsModel';

const EditProduct = ({record , isEdited}) => {

    const {editItem} = useStateValue()
    const options = [
        {value: 'قطع' , label: 'قطع'},
        {value: 'علبة' , label: 'علبه'},
        {value: 'كرتونه' , label: 'كرتونه'}
     ]
    const [show ,setShow] = useState(false)
    const [invalidPrice ,setInvalidPrice] = useState(false)

    const getUnit = options.filter(e => e.value === record.unit)

    const [newArr ,setNewArr] = useState(
        {
            code: record.code,
            name: record.name,
            unit: getUnit[0],
            income: record.income,
            outcome: record.outcome
        })
        console.log(getUnit[0])
        console.log(newArr.unit)
    
    const navigate = useNavigate();

    const  {code , name , unit , income , outcome} = newArr

    const editedItems = newArr

    function handleChange(event){
        if (event.target.name === 'income' || event.target.name === 'outcome') {
          if(!isNaN(event.target.value)){
                setNewArr(prevData => {
                    return {
                        ...prevData,
                        [event.target.name] : event.target.value
                    }
                })
          }
       }else{
        setNewArr(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
       }
    }

    function handleSelectChange(selectedOption){
        setNewArr(prevData => {
            return {
                ...prevData,
                unit: selectedOption.value
            }
        }) 
    }

    useEffect(() => {

        const checkPrice = newArr.outcome && parseInt(newArr.income) > parseInt(newArr.outcome) ? 
                 setInvalidPrice(true) : setInvalidPrice(false)
 
     } , [newArr.income , newArr.outcome])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(invalidPrice === false){
            setInvalidPrice(false)
            editItem(record.code , editedItems)
            isEdited(true)
            navigate('/AllProducts')
        }
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
                unitVal={newArr.unit.label}
                incomeVal={newArr.income}
                outcomeVal={newArr.outcome}
                invalidPrice={invalidPrice}
                options={options}
                handleSelectChange={handleSelectChange}
        />
        <ModelBtns handlecancel={() => setShow(true)} form='my-form' title="تعديل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
        {show && <ConfirmationButton title='هل تريد الغاء التعديل؟' confirm={cancelEdit} cancel={() => setShow(false)} />}
    </div>
  )
}

export default EditProduct