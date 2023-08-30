import ModelBtns from "../ModelBtns"
import FormFilter from "../formmodels/FormFilter"

const FilterInvoices = ({title,handlecancel,invoiceval,dateval,name,nameplaceholder,suppliername,itemname,getinvoices,handleChangeInvoices,handleChangeDates,handleChangeSuppliers,handleChangeItems,getdates,getsuppliers,getitems,handleSubmit}) => {

//     const {inwardBills} = useStateValue()

//     const setinvoices = [];
//     inwardBills?.forEach((data) => {setinvoices.push({value: data.invoice, label: data.invoice})})
//     let mapinvoices = new Map();
//     for (let invoice of setinvoices) {mapinvoices.set(invoice["value"], invoice)}
//     let iteratorinvoices = mapinvoices.values();
//     let getinvoices = [...iteratorinvoices];

//     const setdates = [];
//     inwardBills?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
//     let mapdates = new Map();
//     for (let dates of setdates) {mapdates.set(dates["value"], dates)}
//     let iteratordates = mapdates.values();
//     let getdates = [...iteratordates];

//     const setsuppliers = [];
//     inwardBills?.forEach((data) => {setsuppliers.push({value: data.supplierName, label: data.supplierName})})
//     let mapsuppliers = new Map();
//     for (let supplier of setsuppliers) {mapsuppliers.set(supplier["value"], supplier)}
//     let iteratorsuppliers = mapsuppliers.values();
//     let getsuppliers = [...iteratorsuppliers];

//     const setitems = [];
//     inwardBills?.forEach((data) => {setitems.push({value: data.itemName, label: data.itemName})})
//     let mapitems = new Map();
//     for (let item of setitems) {mapitems.set(item["value"], item)}
//     let iteratoritems = mapitems.values();
//     let getitems = [...iteratoritems];


// const [filterinvoices , setFilterInvoices] = useState([])
// const [filterDates , setFilterDates] = useState([])
// const [filterSuppliers , setFilterSuppliers] = useState([])
// const [filterItems , setFilterItems] = useState([])

// const handleChangeInvoices = (selectedOption) => {setFilterInvoices(selectedOption)}
// const handleChangeDates = (selectedOption) => {setFilterDates(selectedOption)}
// const handleChangeSuppliers = (selectedOption) => {setFilterSuppliers(selectedOption)}
// const handleChangeItems = (selectedOption) => {setFilterItems(selectedOption)}

// // const [searchList ,setSearchList] = useState(null)
// const searchInvoices = filterinvoices?.map((e => inwardBills?.filter(inward => inward.invoice === e.value)))
// const searchDates = filterDates?.map((e => inwardBills?.filter(inward => inward.date === e.value)))
// const searchSuppliers = filterSuppliers?.map((e => inwardBills?.filter(inward => inward.supplierName === e.value)))
// const searchItems = filterItems?.map((e => inwardBills?.filter(inward => inward.itemName === e.value)))

// const searchResults = []

// const handleSearch = searchInvoices?.map((e) => searchResults.push(...e)) &&
//                       searchDates?.map((e) => searchResults.push(...e)) &&
//                       searchSuppliers?.map((e) => searchResults.push(...e)) &&
//                       searchItems?.map((e) => searchResults.push(...e)) 


// const handleSubmit = (e) => {
//   e.preventDefault()
//   getSearchList(searchResults)
//   searchFunc()
// }

  return (
    <div className='my-5'>
        <h2 className='text-center text-3xl font-bold text-main'>{title}</h2>
        <div className='my-3'>
            <FormFilter 
               invoicesoptions={getinvoices}
               handleChangeInvoices={handleChangeInvoices}
               handleChangeDates={handleChangeDates}
               handleChangeSuppliers={handleChangeSuppliers}
               handleChangeItems={handleChangeItems}
               dateoptions={getdates}
               supplieroptions={getsuppliers}
               itemoptions={getitems}
               handleSubmit={handleSubmit}
               invoiceval={invoiceval}
               dateval={dateval}
               suppliername={suppliername}
               itemname={itemname}
               name={name} 
               nameplaceholder={nameplaceholder}
            />
            <ModelBtns title='بحث' form='my-form' cancelTitle='تفريغ الحقول' handlecancel={handlecancel} btnStyle={'w-40 py-2'} margin={'mt-5'} />
        </div>
    </div>
  )
}

export default FilterInvoices