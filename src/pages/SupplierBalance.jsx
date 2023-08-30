import Navbar from '../components/Navbar'
import TableBalance from '../components/tablemodels/TableBalance'
import { useStateValue } from '../context/stateProvider'

const SupplierBalance = ({search , searchItem ,getRecordReduction}) => {

    const {supplierBalance} = useStateValue()

    const handleSearch = supplierBalance?.filter(item =>
        item.code.includes(search) 
     )

     const totalbalance = supplierBalance.map((e) => parseInt(e.remaining)).reduce((a, b)=> a+b, 0);

  return (
    <div className='container mx-auto px-4 max-h-screen'>
      <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
      <TableBalance 
        title='رصيد الموردين'
        nameText='اسم المورد'
        codeText='كود المورد'
        supplierList={supplierBalance} 
        isSearched={handleSearch.length && search.length} 
        filteredItems={handleSearch} 
        totalbalance={totalbalance}
        url='/supplierreduction'
        getRecordReduction={getRecordReduction}
     />
    </div>
  )
}

export default SupplierBalance