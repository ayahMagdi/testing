import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import FormItemsModel from '../formmodels/FormItemsModel';
import ModelBtns from '../ModelBtns';


const AddProduct = ({isAdded}) => {
  
    const {addItem ,items} = useStateValue()
    const [productInfo , setProductInfo] = useState(
           {code: parseInt(items.length) + 1,name: '',unit: 'قطعة',income: '',outcome: ''}
        )
    const [show ,setShow] = useState(false)
    const [invalidPrice ,setInvalidPrice] = useState(false)
    const navigate = useNavigate();

    function handleChange(event){
        if (event.target.name === 'income' || event.target.name === 'outcome') {
          if(!isNaN(event.target.value)){
                setProductInfo(prevData => {
                    return {
                        ...prevData,
                        [event.target.name] : event.target.value
                    }
                })
          }
       }else{
        setProductInfo(prevData => {
            return {
                ...prevData,
                code: parseInt(items.length) + 1,
                [event.target.name] : event.target.value
            }
        })
       }
    }

    const {code , name , unit , income , outcome} = productInfo

    useEffect(() => {

       const checkPrice = productInfo.outcome && parseInt(productInfo.income) > parseInt(productInfo.outcome) ? 
                setInvalidPrice(true) : setInvalidPrice(false)

    } , [productInfo.income , productInfo.outcome])

    const handleSubmit = (e) => {
       e.preventDefault()
       if(invalidPrice === false){
            setInvalidPrice(false)
            addItem(code , name , unit , income , outcome)
            isAdded(true)
            navigate('/AllProducts')
        }
    }

    const cancelAdd = () => {
        isAdded(false)
        navigate('/AllProducts')
    }

  return (
    <div className='mt-8'>
        <FormItemsModel title="اضافة منتج جديد" 
          codeVal={productInfo.code} 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          nameVal={productInfo.name}
          incomeVal={productInfo.income}
          outcomeVal={productInfo.outcome}
          unitVal={productInfo.unit}
          invalidPrice={invalidPrice}
        />
        <ModelBtns handlecancel={() => setShow(true)} title="تسجيل" cancelTitle='الغاء' btnStyle={'w-60 py-3 text-lg'} margin={'mt-10'} />
        {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={cancelAdd} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddProduct