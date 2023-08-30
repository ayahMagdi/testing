import { useMemo } from "react"
import Navbar from "../components/Navbar"
import TableSupplierbills from "../components/tablemodels/TableSupplierbills"
import { useStateValue } from "../context/stateProvider"
import isEqual from 'lodash/isEqual';

const ClientBills = ({searchItem , search}) => {
 
    const {outwardBills} = useStateValue()

    const uniqueDataInvoice = useMemo(() => {
      const unique = [];
  
      outwardBills.forEach(item => {
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
    }, [outwardBills]);
  
  
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
          title='فواتير العملاء'
          name='اسم العميل'
          checkInvoice={true}
          allbills={outwardBills}
       />
    </div>
  )
}

export default ClientBills