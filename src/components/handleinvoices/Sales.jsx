import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider';
import FormInvoicesModel from '../formmodels/FormInvoicesModel';
import ModelBtns from '../ModelBtns';
import TableInvoices from '../tablemodels/TableInvoices';
import FormInvoiceModel from '../formmodels/FormInvoiceModel';
import { useNavigate } from 'react-router-dom';

const Sales = () => {

    const {sales , addSales , deleteSales , clients , store , deleteFromStore ,editSales} = useStateValue()

    const currentDate = new Date().toLocaleDateString();
  
    const [purchasesInfo , setPurchasesInfo] = useState(
      { 
        purchas: '' ,
        date: '',
        supplierName: '',
        supplierCode: '',
        itemCode: '',
        itemName: '',
        unit: '' ,
        qty: '' ,
        price: ''
      }
    )
    const navigate = useNavigate();
    const [targetCode ,setTargetCode] = useState()
    const [record ,setRecord] = useState()
    const [clientErr ,setClientErr] = useState(false)
    const [itemErr ,setItemErr] = useState(false)
    const [edit ,setEdit] = useState(false)
    const [qtyErr ,setQtyErr] = useState(false)
  
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
  
    const getRecord = (record) => {
      setRecord(record)
    }
  
    const getCode = (code) => {
      setTargetCode(code)
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
          if(!qtyErr){
            addSales(purchas ,date , supplierName , supplierCode ,itemCode , itemName , unit , qty , price)
            deleteFromStore(purchasesInfo)
            emptyForm()
          }
        }else{
          const editedSales = purchasesInfo
          editSales(record?.itemCode , editedSales)
          deleteFromStore(purchasesInfo)
          emptyForm()
          setEdit(false)
        }
    }
 
   const getTotal = sales.reduce((acc , cur) => {
     return parseInt(acc) + (parseInt(cur.price) * parseInt(cur.qty))
   } , 0)

    const [calcPurchas , setCalcPurchas] = useState(
      {total: getTotal ,discount: '',totalwd: '' ,reduction: '',remaining: '',items:''}
    )
  
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

    let filteredClients = purchasesInfo.supplierCode &&
         clients.filter(e => e.code === purchasesInfo.supplierCode)
  
    let filteredStors = purchasesInfo.itemCode &&
        store.filter(e => e.code === purchasesInfo.itemCode)

    useEffect(() => {
       const handleSupplierErrs = filteredClients?.length === 0 && purchasesInfo.supplierCode && !edit
                ? setClientErr(true) : setClientErr(false)
       const handleItemErrs = filteredStors?.length === 0 && purchasesInfo.itemCode && !edit
                ? setItemErr(true) : setItemErr(false)
        const checkQty = purchasesInfo.qty && parseInt(filteredStors[0]?.avlqty) < parseInt(purchasesInfo.qty) 
        ? setQtyErr(true) : setQtyErr(false)
    } , [filteredClients , purchasesInfo ,filteredStors ,edit])

    
  useEffect(() => {
    const timeoutId = setTimeout(() => {
       if(!edit){
        setPurchasesInfo(prevData => {
          return {
              ...prevData, 
              itemName: filteredStors[0]?.name,
              date: currentDate,
              supplierName: filteredClients[0]?.name,
              purchas: sales?.length,
              unit: filteredStors[0]?.unit,
              price: filteredStors[0]?.outcome,
          }
       })
       }
       setCalcPurchas(prev => {
        return {
          ...prev,
          total: getTotal,
          totalwd: getTotal - ((getTotal * calcPurchas.discount) / 100),
          remaining: calcPurchas.totalwd - calcPurchas.reduction,
          items: sales.length,
        }
       })
    }, 300); 

    return () => clearTimeout(timeoutId);
    
  },);
  
    const handleDelete = (e) =>{
      deleteSales(e)
    }
  
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

  return (
    <div className='py-3 max-h-screen'>
        <FormInvoicesModel
            title='فاتورة المبيعات' 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            itemCodeVal={purchasesInfo.itemCode}
            itemNameVal={!edit ? !itemErr && purchasesInfo.itemCode ? purchasesInfo.itemName : '' : purchasesInfo.itemName}
            unitVal={!edit ?!itemErr && purchasesInfo.itemCode ? purchasesInfo.unit : '' : purchasesInfo.unit}
            qtyVal={purchasesInfo.qty}
            priceVal={!edit ? !itemErr && purchasesInfo.itemCode ? purchasesInfo.price : '' : purchasesInfo.price}
            purchasVal={!edit ? !clientErr && purchasesInfo.supplierCode ? purchasesInfo.purchas : '' : purchasesInfo.purchas}
            dateVal={!edit ? !clientErr && purchasesInfo.supplierCode ? purchasesInfo.date : '' : purchasesInfo.date}
            supplierCodeVal={purchasesInfo.supplierCode}
            supplierNameVal={!edit ? !clientErr && purchasesInfo.supplierCode ? purchasesInfo.supplierName : '' : purchasesInfo.supplierName} 
            totalVal= {qty && qty * price} 
            edit={edit}
            supplierErr={clientErr}
            itemErr={itemErr}
            qtyErr={qtyErr}
            avlQty={filteredStors[0]?.avlqty}
        />
        <ModelBtns title={edit ? 'تعديل' : 'اضافة'} cancelTitle='تفريغ الحقول' handlecancel={emptyForm} btnStyle={'w-40 py-2'} margin={'mt-5'} />
        <TableInvoices
              purchases={sales} 
              getRecord={getRecord}
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

export default Sales