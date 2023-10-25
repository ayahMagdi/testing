import { useMemo } from "react"
import Navbar from "../components/Navbar"
import TableSupplierbills from "../components/tablemodels/TableSupplierbills"
import { useStateValue } from "../context/stateProvider"
import isEqual from 'lodash/isEqual';
import Goback from "../components/Goback";
import Sidebar from "../components/Sidebar";

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
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
            <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
            <TableSupplierbills 
                isSearched={handleSearch.length && search.length} 
                filteredItems={handleSearch} 
                bills={uniqueDataInvoice}
                title='فواتير الموردين' 
                name='اسم المورد'
                checkInvoice={false}
                allbills={inwardBills}
            />
            <Goback />
          </div>
      </div>
    </div>
  )
}

export default SupplierBills