import { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider'
import ModelBtns from '../ModelBtns'
import FormInvoicesModel from '../formmodels/FormInvoicesModel'
import TableInvoices from '../tablemodels/TableInvoices'
import FormInvoiceModel from '../formmodels/FormInvoiceModel'

const Purchases = () => {

  const {purchases , addPurchases , deletePurchases , suppliers , store , editStore} = useStateValue()

  const currentDate = new Date().toLocaleDateString();

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
  
  const [success ,setSuccess] = useState(false)
  const [targetCode ,setTargetCode] = useState()
  const [record ,setRecord] = useState()
  const [supplierErr ,setSupplierErr] = useState(false)
  const [itemErr ,setItemErr] = useState(false)

  function handleChange(event){
    setPurchasesInfo(prevData => {
      return {
          ...prevData, 
          itemName: filteredStors[0]?.name,
          date: currentDate,
          supplierName: filteredSuppliers[0]?.name,
          purchas: purchases?.length,
          unit: filteredStors[0]?.unit,
          price: filteredStors[0]?.income,
          [event.target.name] : event.target.value
      }
  })
  }

  const getRecord = (record) => {
    setRecord(record)
  }

  const getCode = (code) => {
    setTargetCode(code)
  }
 
  const {itemCode , itemName , unit , qty , price} = purchasesInfo
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    addPurchases(itemCode , itemName , unit , qty , price)
    editStore(purchasesInfo)
    emptyForm()
  }

  const emptyForm = () => {
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
     const handleSupplierErrs = filteredSuppliers.length === 0 && purchasesInfo.supplierCode 
              ? setSupplierErr(true) : setSupplierErr(false)
     const handleItemErrs = filteredStors.length === 0 && purchasesInfo.itemCode 
              ? setItemErr(true) : setItemErr(false)
  } , [filteredSuppliers , purchasesInfo ,filteredStors])

  const handleDelete = (e) =>{
    deletePurchases(e)
  }

  const handleEdit = (e) => {
   console.log(e)
  }

  return (
    <div className='pb-14'>
        <FormInvoicesModel 
            title='فاتورة المشتريات' 
            totalVal={price && qty * price} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            itemCodeVal={purchasesInfo.itemCode}
            itemNameVal={filteredStors[0]?.name || purchasesInfo.itemName}
            unitVal={filteredStors[0]?.unit || purchasesInfo.unit}
            qtyVal={purchasesInfo.qty}
            priceVal={filteredStors[0]?.income || purchasesInfo.price}
            purchasVal={purchasesInfo.purchas}
            dateVal={purchasesInfo.date}
            supplierCodeVal={purchasesInfo.supplierCode}
            supplierNameVal={filteredSuppliers[0]?.name || purchasesInfo.supplierName}
        />
        <ModelBtns title='اضافة' cancelTitle='تفريغ الحقول' handlecancel={emptyForm} />
        <TableInvoices 
              purchases={purchases} 
              getRecord={getRecord} 
              deletCode={getCode} 
              handleDelete={() => handleDelete(targetCode)} 
              handleEdit={() => handleEdit(record)}
        />
        <FormInvoiceModel />
        <ModelBtns title='تسجيل' cancelTitle='الغاء' />
    </div>
  )
}

export default Purchases