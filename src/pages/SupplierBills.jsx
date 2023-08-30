import { useMemo } from "react"
import Navbar from "../components/Navbar"
import TableSupplierbills from "../components/tablemodels/TableSupplierbills"
import { useStateValue } from "../context/stateProvider"
import isEqual from 'lodash/isEqual';

const SupplierBills = ({searchItem , search}) => {

  const {inwardBills} = useStateValue()

  const uniqueDataInvoice = useMemo(() => {
    const unique = [];

  inwardBills.forEach(item => {
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
 }, [inwardBills]);


  const handleSearch = uniqueDataInvoice.filter(item => 
     item.supplierName.includes(search) || item.invoice.includes(search)
  )

  return (
    <div className='container mx-auto px-4'>
        <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
        <TableSupplierbills 
             isSearched={handleSearch.length && search.length} 
             filteredItems={handleSearch} 
             bills={uniqueDataInvoice}
             title='فواتير الموردين' 
             name='اسم المورد'
             checkInvoice={false}
        />
    </div>
  )
}

export default SupplierBills