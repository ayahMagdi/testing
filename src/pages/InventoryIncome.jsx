import { useEffect, useMemo, useState } from 'react'
import { useStateValue } from '../context/stateProvider';
import TableInwardbills from '../components/tablemodels/TableInwardbills';
import FormInventory from '../components/formmodels/FormInventory';
import moment from 'moment';
import isEqual from 'lodash/isEqual';

const InventoryIncome = () => {

    const {inwardBills} = useStateValue()

    const setdates = [];
    inwardBills?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
    let mapindates = new Map();
    for (let date of setdates) {mapindates.set(date["value"], date)}
    let iteratorinvoices = mapindates.values();
    let getdates = [...iteratorinvoices];

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [filter , setFilter] = useState(false)
    const [filtrationArry , setFiltrationArry] = useState()

    let getItemsTotal = []

    function getDates(startDate, endDate) {
      const dateArray = [];
      let currentDate = moment(startDate, 'M/DD/YYYY').startOf('day');
      const formattedEndDate = moment(endDate, 'M/DD/YYYY').startOf('day');
    
      while (currentDate <= formattedEndDate) {
        dateArray.push(moment(currentDate).format('M/DD/YYYY'));
        currentDate = moment(currentDate).add(1, 'days');
      }
    
      return dateArray;
    }
  
    const datesBetween = getDates(startDate?.value, endDate?.value);

    const getTotal = inwardBills?.filter(inward => {
      const filtered = datesBetween?.filter(date => inward.date === date);
      if (filtered && filtered.length > 0) {
        return true;
      }
      return false;
    });
    
    getItemsTotal = getTotal || [];

    const newDataSets = [];
    if(!filter){
      inwardBills?.forEach((data) => {
        newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
      })
    }else{
      console.log(getItemsTotal)
      getItemsTotal?.forEach((data) => {
        newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
      })
    }
  
    const countCategories = !filter ? inwardBills?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} ) : getItemsTotal?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} )
   
    const distinctCategories = [];
  
  Object.keys(countCategories).forEach((data) => {
      distinctCategories?.push({title: newDataSets[newDataSets.findIndex(x => x.invoice?.title === data)].invoice?.title});
      (newDataSets[newDataSets.findIndex(x => x.invoice.title === data)]).invoice.rowSpan = countCategories[data]
  })

  // const getTotal = inwardBills?.filter((inward => datesBetween?.map(date => inward.date == date && getItemsTotal.push(inward))))
  
  const uniqueDataInvoice = useMemo(() => {
    const unique = [];

  getItemsTotal.forEach(item => {
    let exists = false;
    
    unique.forEach(u => {
      if(isEqual(u.invoice, item.invoice)) {
        exists = true;
      }
    });

    if(!exists) {
      unique.push(item);
    }
  });

  return unique;
  }, [getItemsTotal]);

  useEffect(() => {

    const handleFilter = startDate !== null && endDate !== null && getItemsTotal?.length > 0 ?
                setFilter(true) : setFilter(false)

  } , [startDate , endDate , getItemsTotal])

  
  const inventory =  uniqueDataInvoice.map((e) => parseInt(e.totalwd)).reduce((a, b)=> a+b, 0);

  return (
    <div className='container mx-auto px-4 my-5'>
        <FormInventory 
            title='بيانات جرد الداخل'
            dateoptions={getdates} 
            startDateval={startDate}
            endDateval={endDate}
            totalVal={inventory || ''}
            handleChangeStartDate={(selectedOption) => setStartDate(selectedOption)}
            handleChangeEndDate={(selectedOption) => setEndDate(selectedOption)}
        />
        <TableInwardbills invoicesList={newDataSets} code='كود المورد' name='اسم المورد' height='max-h-[31rem]' />
    </div>
  )
}

export default InventoryIncome