import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton';
import FormItemsModel from '../formmodels/FormItemsModel';
import ModelBtns from '../ModelBtns';
import axios from "axios";

const AddProduct = ({isAdded}) => {
  
    const {addItem ,items ,addToStore} = useStateValue()

    const options = [
        {value: 'piece' , label: 'قطع'},
        {value: 'علبة' , label: 'علبه'},
        {value: 'كرتونه' , label: 'كرتونه'}
     ]
     
    const [productInfo , setProductInfo] = useState(
           {code: '',name: '',unit: options[0].value,income: '',outcome: ''}
        )

    const [show ,setShow] = useState(false)
    const [invalidPrice ,setInvalidPrice] = useState(false)
    const [codeExist ,setCodeExist] = useState(false)
    const [nameExist ,setNameExist] = useState(false)
    const navigate = useNavigate();
    const locatin = useLocation()
    const initial_url = locatin.pathname.split('/')

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
                [event.target.name] : event.target.value
            }
        })
       }
    }

    function handleSelectChange(selectedOption){
        setProductInfo(prevData => {
            return {
                ...prevData,
                unit: selectedOption.value
            }
        }) 
    }

    const {code , name , unit , income , outcome} = productInfo

    useEffect(() => {

       const checkPrice = productInfo.outcome && parseInt(productInfo.income) > parseInt(productInfo.outcome) ? 
                setInvalidPrice(true) : setInvalidPrice(false)

       const checkCode = productInfo.code && items.find(e => e.code === productInfo.code) ?
              setCodeExist(true) : setCodeExist(false)
        
       const checkName = productInfo.name && items.find(e => e.name === productInfo.name) ? 
              setNameExist(true) : setNameExist(false)

    } , [productInfo,items])

    const baseURL = 'https://electroninvenotorysystem.000webhostapp.com/api/Product'


    const [post, setPost] = useState(null);

    // https://fakestoreapi.com/products
 
    useEffect(() => {
     const getData = async () => {
       const {data: res} = await axios.get(baseURL)
       setPost(res);
    }
    getData()
    }, []);
  
    // if (!post) return null
 
    console.log(post)

    // const asyncPostCall = async () => {
    //     try {
    //         const response = await fetch(baseURL, {
    //          method: 'POST',
    //          headers: {
    //            'Content-Type': 'application/json'
    //            },
    //            body: JSON.stringify({
    //      // your expected POST request payload goes here
    //      "code": code,
    //      "name": name,
    //      "unit": unit,
    //      "in_price": income,
    //      "out_price": outcome
    //             })
    //          });
    //          const data = await response.json();
    //       // enter you logic when the fetch is successful
    //          console.log(data);
    //        } catch(error) {
    //      // enter your logic for when there is an error (ex. error toast)

    //           console.log(error)
    //          } 
    //     }

    const handleSubmit = (e) => {
       e.preventDefault()
       if(!invalidPrice && !codeExist && !nameExist){
            setInvalidPrice(false)
            addItem(code , name , unit , income , outcome)
            addToStore(code,name,unit,income,outcome, 0,0,0,0)
            isAdded(true)
            navigate(`/${initial_url.slice(1 , -1).join('/')}`)
            localStorage.setItem('branch' , 'itemsList')
            // asyncPostCall()
            axios.post(baseURL, {
                "code": code,
                "name": name,
                "unit": unit,
                "in_price": income,
                "out_price": outcome
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const cancelAdd = () => {
        isAdded(false)
        navigate(`/${initial_url.slice(1 , -1).join('/')}`)
        localStorage.setItem('branch' , 'itemsList')
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
          unitVal={productInfo.unit.label}
          invalidPrice={invalidPrice}
          defaultVal={options[0]?.label}
          options={options}
          codeExist={codeExist}
          nameExist={nameExist}
          isDisabled={false}
          handleSelectChange={handleSelectChange}
        />
        <ModelBtns handlecancel={() => setShow(true)} form='my-form' title="تسجيل" cancelTitle='الغاء' btnStyle={'w-48 py-3 text-lg'} margin={'mt-10'} />
        {show && <ConfirmationButton title='هل تريد الغاء التسجيل؟' confirm={cancelAdd} cancel={() => setShow(false)} />}
    </div>
  )
}

export default AddProduct