import React, { useState } from 'react'
import FormInventory from '../components/formmodels/FormInventory'
import Buttons from '../components/Buttons'
import { useStateValue } from '../context/stateProvider'
import moment from 'moment'
import TableExpenses from '../components/tablemodels/TableExpenses'
import Sidebar from '../components/Sidebar'

const ExpensesPage = () => {

  const {expenses} = useStateValue()

  const setdates = [];
  expenses?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
  let mapindates = new Map();
  for (let date of setdates) {mapindates.set(date["value"], date)}
  let iteratorinvoices = mapindates.values();
  let getdates = [...iteratorinvoices];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter , setFilter] = useState(false)

  let getItemsTotal = []

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

  const getTotal = expenses?.filter(expens => {
    const filtered = datesBetween?.filter(date => expens.date === date);
    if (filtered && filtered.length > 0) {
      return true;
    }
    return false;
  });

  getItemsTotal = getTotal || [];

  const calcExpenses = getItemsTotal.map((e) => parseInt(e.total)).reduce((a, b)=> a+b, 0);

  return (
  //   <div className='container mx-auto px-4 my-5'>
        // <h2 className='text-center text-3xl font-bold text-main'>المصاريف</h2>
        // <Buttons
        //      title='اضافة' 
        //      urlAdd={'/homepage/expensespage/addexpenses'} 
        // />
        // <FormInventory 
        //     dateoptions={getdates} 
        //     startDateval={startDate}
        //     endDateval={endDate}
        //     totalVal={calcExpenses || ''}
        //     handleChangeStartDate={(selectedOption) => setStartDate(selectedOption)}
        //     handleChangeEndDate={(selectedOption) => setEndDate(selectedOption)}
        // />
        // <TableExpenses expensesList={getItemsTotal.length > 0 ? getItemsTotal : expenses} />
  //  </div>
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
            <h2 className='text-center text-3xl font-bold text-main'>المصاريف</h2>
            <Buttons
                title='اضافة' 
                urlAdd={'/homepage/expensespage/addexpenses'} 
            />
            <FormInventory 
                dateoptions={getdates} 
                startDateval={startDate}
                endDateval={endDate}
                totalVal={calcExpenses || ''}
                handleChangeStartDate={(selectedOption) => setStartDate(selectedOption)}
                handleChangeEndDate={(selectedOption) => setEndDate(selectedOption)}
            />
            <TableExpenses expensesList={getItemsTotal.length > 0 ? getItemsTotal : expenses} />
          </div>
      </div>
    </div>
  )
}

export default ExpensesPage