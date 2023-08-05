import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider'
import ModelBtns from '../ModelBtns'
import FormInvoicesModel from '../formmodels/FormInvoicesModel'
import TableInvoices from '../tablemodels/TableInvoices'
import FormInvoiceModel from '../formmodels/FormInvoiceModel'
import { useNavigate } from 'react-router-dom';

const Purchases = () => {

  const {purchases , addPurchases , deletePurchases , suppliers , store , addToStore , editPurchases} = useStateValue()

  const currentDate = new Date().toLocaleDateString();
  const navigate = useNavigate();

  const [purchasesInfo , setPurchasesInfo] = useState(
    { 
      purchas: '' ,
      date: '',
      supplierCode: '',
      supplierName: '',
      itemCode: '',
      itemName: '',
      unit: '' ,
      qty: '' ,
      price: ''
    }
  )
  
  const [targetCode ,setTargetCode] = useState()
  const [supplierErr ,setSupplierErr] = useState(false)
  const [itemErr ,setItemErr] = useState(false)
  const [edit ,setEdit] = useState(false)
  const [record ,setRecord] = useState()

  function handleChange(event){
    if (!isNaN(event.target.value)) {
      setPurchasesInfo(prevData => {
        return {
            ...prevData, 
            [event.target.name] : event.target.value
        }
      })
      setCalcPurchas(prevData => {
        return {
          ...prevData,
          [event.target.name]: event.target.value
        }
     })
    }
  }

  const getCode = (code) => {
    setTargetCode(code)
  }
  const getRecord = (record) => {
    setRecord(record)
  }

  const handleEdit = (e) => {
    setEdit(true)
    setPurchasesInfo({
          purchas: e?.purchas,
          date: e?.date,
          supplierCode: e?.supplierCode,
          supplierName: e?.supplierName,
          itemCode: e?.itemCode,
          itemName: e?.itemName,
          unit: e?.unit,
          qty: e?.qty,
          price: e?.price
    }
    )
  }
 
  const {purchas ,date , supplierName , supplierCode ,itemCode , itemName , unit , qty , price} = purchasesInfo
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!edit){
      addPurchases(purchas ,date , supplierName , supplierCode ,itemCode , itemName , unit , qty , price)
    }else{
      const editedPurchases = purchasesInfo
      editPurchases(record.itemCode , editedPurchases)
      setEdit(false)
    }
    addToStore(purchasesInfo)
    emptyForm()
  }

  const emptyForm = () => {
    setEdit(false)
    setPurchasesInfo({
       purchas: '' ,
       date: '',
       supplierCode: '',
       supplierName: '',
       itemCode: '',
       itemName: '',
       unit: '' ,
       qty: '' ,
       price: ''})
  }

  const filteredSuppliers = purchasesInfo.supplierCode &&
    suppliers.filter(e => e.code === purchasesInfo.supplierCode)

  const filteredStors = purchasesInfo.itemCode &&
    store.filter(e => e.code === purchasesInfo.itemCode)

  useEffect(() => {
     const handleSupplierErrs = filteredSuppliers?.length === 0 && purchasesInfo?.supplierCode && !edit
              ? setSupplierErr(true) : setSupplierErr(false)
     const handleItemErrs = filteredStors?.length === 0 && purchasesInfo?.itemCode && !edit 
              ? setItemErr(true) : setItemErr(false)
  } , [filteredSuppliers , purchasesInfo ,filteredStors ,edit])


  const getTotal = purchases.reduce((acc , cur) => {
    return parseInt(acc) + (parseInt(cur.price) * parseInt(cur.qty))
  } , 0)

  const [calcPurchas , setCalcPurchas] = useState(
    {total: getTotal ,discount: '',totalwd: '' ,reduction: '',remaining: '',items:''}
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
       if(!edit){
        setPurchasesInfo(prevData => {
          return {
              ...prevData, 
              itemName: filteredStors[0]?.name,
              date: currentDate,
              supplierName: filteredSuppliers[0]?.name,
              purchas: purchases?.length,
              unit: filteredStors[0]?.unit,
              price: filteredStors[0]?.income,
          }
       })
       }
       setCalcPurchas(prev => {
        return {
          ...prev,
          total: getTotal,
          totalwd: getTotal - ((getTotal * calcPurchas.discount) / 100),
          remaining: calcPurchas.totalwd - calcPurchas.reduction,
          items: purchases.length,
        }
       })
    }, 300); 

    return () => clearTimeout(timeoutId);
    
  },);

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      setCalcPurchas(prevData => {
        return {
          ...prevData,
          [event.target.name] : event.target.value.slice(0, -1),
        }
      })
      event.preventDefault();
    }
  };

  const handleDelete = (e) =>{
    deletePurchases(e)
  }

  return (
    <div className='py-3 max-h-screen'>
        <FormInvoicesModel 
            title='فاتورة المشتريات' 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            itemCodeVal={purchasesInfo.itemCode}
            itemNameVal={!edit ? !itemErr && purchasesInfo.itemCode ? purchasesInfo.itemName : '' : purchasesInfo.itemName}
            unitVal={!edit ?!itemErr && purchasesInfo.itemCode ? purchasesInfo.unit : '' : purchasesInfo.unit}
            qtyVal={purchasesInfo.qty}
            priceVal={!edit ? !itemErr && purchasesInfo.itemCode ? purchasesInfo.price : '' : purchasesInfo.price}
            purchasVal={!edit ? !supplierErr && purchasesInfo.supplierCode ? purchasesInfo.purchas : '' : purchasesInfo.purchas}
            dateVal={!edit ? !supplierErr && purchasesInfo.supplierCode ? purchasesInfo.date : '' : purchasesInfo.date}
            supplierCodeVal={purchasesInfo.supplierCode}
            supplierNameVal={!edit ? !supplierErr && purchasesInfo.supplierCode ? purchasesInfo.supplierName : '' : purchasesInfo.supplierName} 
            totalVal={qty && qty * price} 
            edit={edit}
            supplierErr={supplierErr}
            itemErr={itemErr}
        />
        <ModelBtns title={edit ? 'تعديل' : 'اضافة'} cancelTitle='تفريغ الحقول' handlecancel={emptyForm} btnStyle={'w-40 py-2'} margin={'mt-5'} />
        <TableInvoices 
              purchases={purchases} 
              getRecord={setRecord}
              deletCode={getCode} 
              handleDelete={() => handleDelete(targetCode)} 
              handleEdit={handleEdit}
        />
        <FormInvoiceModel 
             totalVal={calcPurchas.total}
             handleInputChange={handleKeyDown}
             handleChange={handleChange} 
             discountVal={calcPurchas.discount} 
             totalwdVal={calcPurchas.totalwd}
             reductionVal={calcPurchas.reduction}
             remainingVal={calcPurchas.remaining}
             itemsVal={calcPurchas.items}
        />
        <ModelBtns title='تسجيل' cancelTitle='الغاء' btnStyle={'w-40 py-2'} margin={'mt-5'} handlecancel={() => navigate('/homepage')} />
    </div>
  )
}

export default Purchases