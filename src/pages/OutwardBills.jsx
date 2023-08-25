import { useState } from 'react'
import TableInwardbills from '../components/tablemodels/TableInwardbills'
import FilterInvoices from '../components/handleinvoices/FilterInvoices'
import { useStateValue } from '../context/stateProvider'
import isEqual from 'lodash/isEqual';

const OutwardBills = () => {

    const {outwardBills} = useStateValue()

    const setinvoices = [];
    outwardBills?.forEach((data) => {setinvoices.push({value: data.invoice, label: data.invoice})})
    let mapinvoices = new Map();
    for (let invoice of setinvoices) {mapinvoices.set(invoice["value"], invoice)}
    let iteratorinvoices = mapinvoices.values();
    let getinvoices = [...iteratorinvoices];
  
    const setdates = [];
    outwardBills?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
    let mapdates = new Map();
    for (let dates of setdates) {mapdates.set(dates["value"], dates)}
    let iteratordates = mapdates.values();
    let getdates = [...iteratordates];
  
    const setsuppliers = [];
    outwardBills?.forEach((data) => {setsuppliers.push({value: data.supplierName, label: data.supplierName})})
    let mapsuppliers = new Map();
    for (let supplier of setsuppliers) {mapsuppliers.set(supplier["value"], supplier)}
    let iteratorsuppliers = mapsuppliers.values();
    let getsuppliers = [...iteratorsuppliers];
  
    const setitems = [];
    outwardBills?.forEach((data) => {setitems.push({value: data.itemName, label: data.itemName})})
    let mapitems = new Map();
    for (let item of setitems) {mapitems.set(item["value"], item)}
    let iteratoritems = mapitems.values();
    let getitems = [...iteratoritems];
  
    const [selectedValues , setSelectedValues] = useState(
      {
        filterinvoices: [],
        filterdates: [],
        filtersuppliers: [],
        filteritems: []
      }
    )
    
    const handleSelectChange = (value, name) => {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    };
    
    const [filtrationArry , setFiltrationArry] = useState()
    
    const filterData = () => {
      const filteredArray = outwardBills.filter((item) => {
        return (
          (selectedValues.filterinvoices.length === 0 || selectedValues.filterinvoices.some((value) => isEqual(value.value, item.invoice))) &&
          (selectedValues.filterdates.length === 0 || selectedValues.filterdates.some((value) => isEqual(value.value, item.date))) &&
          (selectedValues.filtersuppliers.length === 0 || selectedValues.filtersuppliers.some((value) => isEqual(value.value, item.supplierName))) &&
          (selectedValues.filteritems.length === 0 || selectedValues.filteritems.some((value) => isEqual(value.value, item.itemName)))
        );
      });
      // console.log(filteredArray);
      setFiltrationArry(filteredArray)
    }
  
    const [filter , setFilter] = useState(false)

    const newDataSets = [];
    if(!filter){
    outwardBills?.forEach((data) => {
      newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
    })
    }else{
      filtrationArry?.forEach((data) => {
        newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
      })
    }
  
    const countCategories = !filter ? outwardBills?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} ) : filtrationArry?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} );
  
  const distinctCategories = [];
  
  Object.keys(countCategories).forEach((data) => {
      distinctCategories?.push({title: newDataSets[newDataSets.findIndex(x => x.invoice?.title === data)].invoice?.title});
      (newDataSets[newDataSets.findIndex(x => x.invoice.title === data)]).invoice.rowSpan = countCategories[data]
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    setFilter(true)
    filterData()
  }

const handlecancel = () => {
  setFilter(false)
  setSelectedValues({
    filterinvoices:[],
    filterdates:[],
    filtersuppliers: [],
    filteritems: []
  })
}

  return (
    <div className='container mx-auto px-4'>
        <FilterInvoices title='فواتير الخارج' 
            handlecancel={handlecancel} 
            getinvoices={getinvoices}
            handleChangeInvoices={(value) => handleSelectChange(value, 'filterinvoices')}
            handleChangeDates={(value) => handleSelectChange(value, 'filterdates')}
            handleChangeSuppliers={(value) => handleSelectChange(value, 'filtersuppliers')}
            handleChangeItems={(value) => handleSelectChange(value, 'filteritems')}
            getdates={getdates}
            getsuppliers={getsuppliers}
            getitems={getitems}
            handleSubmit={handleSubmit}
            invoiceval={selectedValues.filterinvoices}
            dateval={selectedValues.filterdates}
            suppliername={selectedValues.filtersuppliers}
            itemname={selectedValues.filteritems}
            name='اسم العميل'
            nameplaceholder='اختر اسم العميل'
        />
        <TableInwardbills invoicesList={newDataSets} code='كود العميل' name='اسم العميل' height='max-h-[27rem]' />
    </div>
  )
}

export default OutwardBills