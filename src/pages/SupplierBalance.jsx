import Goback from '../components/Goback'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import TableBalance from '../components/tablemodels/TableBalance'
import { useStateValue } from '../context/stateProvider'

const SupplierBalance = ({search , searchItem ,getRecordReduction}) => {

    const {supplierBalance} = useStateValue()

    const handleSearch = supplierBalance?.filter(item =>
        item.code.includes(search) 
     )

     const totalbalance = supplierBalance.map((e) => parseInt(e.remaining)).reduce((a, b)=> a+b, 0);

  return (
   <div>
    <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 pl-8 h-screen max-h-screen">
        {/* <Navbar handleSearch={() => handleSearch} searchItem={searchItem} /> */}
        <h2 className='text-center text-4xl font-bold my-5 text-main'>رصيد الموردين</h2>
        <Search handleSearch={() => handleSearch} searchItem={searchItem} />
        <TableBalance 
            nameText='اسم المورد'
            codeText='كود المورد'
            supplierList={supplierBalance} 
            isSearched={handleSearch.length && search.length} 
            filteredItems={handleSearch} 
            totalbalance={totalbalance}
            url='/supplierreduction'
            getRecordReduction={getRecordReduction}
        />
        <Goback />
        </div>
    </div>
   </div>
  )
}

export default SupplierBalance