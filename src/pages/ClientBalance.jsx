import Goback from '../components/Goback'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import TableBalance from '../components/tablemodels/TableBalance'
import { useStateValue } from '../context/stateProvider'

const ClientBalance = ({search , searchItem ,getRecordReduction}) => {

    const {clientBalance} = useStateValue()

    const handleSearch = clientBalance?.filter(item =>
        item.code.includes(search) 
     )

     const totalbalance = clientBalance.map((e) => parseInt(e.remaining)).reduce((a, b)=> a+b, 0);


  return (
   <div>
     <div className="flex justify-start items-start w-full gap-10">
       <div className="w-1/5">
          <Sidebar />
       </div>
       <div className="w-4/5 pl-8 h-screen flex flex-col">
       <h2 className='text-center text-4xl font-bold my-5 text-main'>رصيد العملاء</h2>
       <Search handleSearch={() => handleSearch} searchItem={searchItem} />
       <TableBalance 
          nameText='اسم العميل'
          codeText='كود العميل'
          supplierList={clientBalance} 
          isSearched={handleSearch.length && search.length} 
          filteredItems={handleSearch} 
          totalbalance={totalbalance}
          url='/clientreduction'
          getRecordReduction={getRecordReduction}
      />
       <div className='text-center mb-5'>
           <h3>اجمالي باقي الحساب</h3>
           <div className='border w-full p-4 rounded-md border-main mt-3 font-bold text-lg'>{totalbalance}</div>
       </div>
      <Goback />
       </div>
     </div>
   </div>
  )
}

export default ClientBalance