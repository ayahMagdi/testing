import React, { useMemo, useState } from 'react'
import { useStateValue } from '../context/stateProvider';
import TableInwardbills from '../components/tablemodels/TableInwardbills';
import FormInventory from '../components/formmodels/FormInventory';
import moment from 'moment';
import isEqual from 'lodash/isEqual';
import Sidebar from '../components/Sidebar';

const InventoryOutcome = () => {

    const {outwardBills} = useStateValue()

    const setdates = [];
    outwardBills?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
    let mapindates = new Map();
    for (let date of setdates) {mapindates.set(date["value"], date)}
    let iteratorinvoices = mapindates.values();
    let getdates = [...iteratorinvoices];

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const newDataSets = [];
    outwardBills?.forEach((data) => {
        newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
    })
  
    const countCategories = outwardBills?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} )
   
    const distinctCategories = [];
  
  Object.keys(countCategories).forEach((data) => {
      distinctCategories?.push({title: newDataSets[newDataSets.findIndex(x => x.invoice?.title === data)].invoice?.title});
      (newDataSets[newDataSets.findIndex(x => x.invoice.title === data)]).invoice.rowSpan = countCategories[data]
  })

  function getDates(startDate, endDate) {
    const dateArray = [];
    let currentDate = moment(startDate, 'M/DD/YYYY').startOf('day');
    const formattedEndDate = moment(endDate, 'M/DD/YYYY').startOf('day');
  
    while (currentDate <= formattedEndDate) {
      dateArray.push(new Date(currentDate).toLocaleDateString());
      currentDate = moment(currentDate).add(1, 'days');
    }
  
    return dateArray;
  }

  const datesBetween = getDates(startDate?.value, endDate?.value);

  const getItemsTotal = []

  const getTotal = outwardBills?.filter((outward => datesBetween?.map(date => outward.date == date && getItemsTotal.push(outward))))
  
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
  
  const inventory =  uniqueDataInvoice.map((e) => e.totalwd).reduce((a, b)=> a+b, 0);

  return (
  <div>
    <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 pl-8 h-screen flex flex-col">
            <FormInventory 
            title='بيانات جرد الداخل'
            dateoptions={getdates} 
            startDateval={startDate}
            endDateval={endDate}
            totalVal={inventory || ''}
            handleChangeStartDate={(selectedOption) => setStartDate(selectedOption)}
            handleChangeEndDate={(selectedOption) => setEndDate(selectedOption)}
        />
        <TableInwardbills invoicesList={newDataSets} code='كود العميل' name='اسم العميل' />
        </div>
    </div>
  </div>
  )
}

export default InventoryOutcome