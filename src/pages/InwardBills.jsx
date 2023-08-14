import { useState ,useMemo } from 'react'
import TableInwardbills from '../components/tablemodels/TableInwardbills'
import FilterInvoices from '../components/handleinvoices/FilterInvoices'
import { useStateValue } from '../context/stateProvider'
import isEqual from 'lodash/isEqual';

const InwardBills = () => {

  const {inwardBills} = useStateValue()

  const setinvoices = [];
  inwardBills?.forEach((data) => {setinvoices.push({value: data.invoice, label: data.invoice})})
  let mapinvoices = new Map();
  for (let invoice of setinvoices) {mapinvoices.set(invoice["value"], invoice)}
  let iteratorinvoices = mapinvoices.values();
  let getinvoices = [...iteratorinvoices];

  const setdates = [];
  inwardBills?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
  let mapdates = new Map();
  for (let dates of setdates) {mapdates.set(dates["value"], dates)}
  let iteratordates = mapdates.values();
  let getdates = [...iteratordates];

  const setsuppliers = [];
  inwardBills?.forEach((data) => {setsuppliers.push({value: data.supplierName, label: data.supplierName})})
  let mapsuppliers = new Map();
  for (let supplier of setsuppliers) {mapsuppliers.set(supplier["value"], supplier)}
  let iteratorsuppliers = mapsuppliers.values();
  let getsuppliers = [...iteratorsuppliers];

  const setitems = [];
  inwardBills?.forEach((data) => {setitems.push({value: data.itemName, label: data.itemName})})
  let mapitems = new Map();
  for (let item of setitems) {mapitems.set(item["value"], item)}
  let iteratoritems = mapitems.values();
  let getitems = [...iteratoritems];

const [filterinvoices , setFilterInvoices] = useState([])
const [filterDates , setFilterDates] = useState([])
const [filterSuppliers , setFilterSuppliers] = useState([])
const [filterItems , setFilterItems] = useState([])


const handleChangeInvoices = (selectedOption) => {setFilterInvoices(selectedOption)}
const handleChangeDates = (selectedOption) => {setFilterDates(selectedOption)}
const handleChangeSuppliers = (selectedOption) => {setFilterSuppliers(selectedOption)}
const handleChangeItems = (selectedOption) => {setFilterItems(selectedOption)}

const searchInvoices = filterinvoices?.map((e => inwardBills?.filter(inward => inward.invoice === e.value)))
const searchDates = filterDates?.map((e => inwardBills?.filter(inward => inward.date === e.value)))
const searchSuppliers = filterSuppliers?.map((e => inwardBills?.filter(inward => inward.supplierName === e.value)))
const searchItems = filterItems?.map((e => inwardBills?.filter(inward => inward.itemName === e.value)))

let searchResults = []

 const handleSearch = searchInvoices?.map((e) => searchResults.push(...e)) &&
                      searchDates?.map((e) => searchResults.push(...e)) &&
                      searchSuppliers?.map((e) => searchResults.push(...e)) &&
                      searchItems?.map((e) => searchResults.push(...e)) 

 const [filter , setFilter] = useState(false)

  const uniqueDataSearch = useMemo(() => {
    const unique = [];

    searchResults.forEach(item => {
      let exists = false;
      
      unique.forEach(u => {
        if(isEqual(u, item)) {
          exists = true;
        }
      });

      if(!exists) {
        unique.push(item);
      }
    });

    return unique;
  }, [searchResults]);

  const newDataSets = [];
  if(!filter || searchResults.length === 0){
  inwardBills?.forEach((data) => {
    newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
  })
  }else{
    uniqueDataSearch?.forEach((data) => {
      newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
    })
  }

  const countCategories = !filter || searchResults.length === 0 ? inwardBills?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} )
                       : uniqueDataSearch?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} );

const distinctCategories = [];

Object.keys(countCategories).forEach((data) => {
    distinctCategories?.push({title: newDataSets[newDataSets.findIndex(x => x.invoice?.title === data)].invoice?.title});
    (newDataSets[newDataSets.findIndex(x => x.invoice.title === data)]).invoice.rowSpan = countCategories[data]
})
const [emptyForm , setEmptyForm] = useState([
  {invoiceval: filterinvoices,dateval: filterDates,suppliername: filterSuppliers,itemname: filterItems}
])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchResults.length > 0){
      setFilter(true)
    }
  }

  const handlecancel = () => {
    searchResults= []
    setFilter(false)
    setEmptyForm({invoiceval: null , dateval: null ,suppliername: null , itemname: null})
  }

  return (
    <div className='container mx-auto px-4'>
        <FilterInvoices title='فواتير الداخل' 
          handlecancel={handlecancel} 
          getinvoices={getinvoices}
          handleChangeInvoices={handleChangeInvoices}
          handleChangeDates={handleChangeDates}
          handleChangeSuppliers={handleChangeSuppliers}
          handleChangeItems={handleChangeItems}
          getdates={getdates}
          getsuppliers={getsuppliers}
          getitems={getitems}
          handleSubmit={handleSubmit}
          invoiceval={emptyForm.invoiceval}
          dateval={emptyForm.dateval}
          suppliername={emptyForm.suppliername}
          itemname={emptyForm.itemname}
          name='اسم المورد'
        />
        <TableInwardbills invoicesList={newDataSets} />
    </div>
  )
}

export default InwardBills