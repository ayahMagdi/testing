import Goback from '../components/Goback'
import Navbar from '../components/Navbar'
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
  //   <div className='container mx-auto px-4 max-h-screen'>
  //   <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
  //   <TableBalance 
  //     title='رصيد العملاء'
  //     nameText='اسم العميل'
  //     codeText='كود العميل'
  //     supplierList={clientBalance} 
  //     isSearched={handleSearch.length && search.length} 
  //     filteredItems={handleSearch} 
  //     totalbalance={totalbalance}
  //     url='/clientreduction'
  //     getRecordReduction={getRecordReduction}
  //  />
  //  <Goback />
  //   </div>
   <div>
     <div className="flex justify-start items-start w-full gap-10">
       <div className="w-1/5">
          <Sidebar />
       </div>
       <div className="w-4/5 pl-8">
       <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
       <TableBalance 
          title='رصيد العملاء'
          nameText='اسم العميل'
          codeText='كود العميل'
          supplierList={clientBalance} 
          isSearched={handleSearch.length && search.length} 
          filteredItems={handleSearch} 
          totalbalance={totalbalance}
          url='/clientreduction'
          getRecordReduction={getRecordReduction}
      />
      <Goback />
       </div>
     </div>
   </div>
  )
}

export default ClientBalance