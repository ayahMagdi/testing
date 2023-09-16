import Goback from '../components/Goback'
import Navbar from '../components/Navbar'
import TableBalance from '../components/tablemodels/TableBalance'
import { useStateValue } from '../context/stateProvider'

const ClientBalance = ({search , searchItem ,getRecordReduction}) => {

    const {clientBalance} = useStateValue()

    const handleSearch = clientBalance?.filter(item =>
        item.code.includes(search) 
     )

     const totalbalance = clientBalance.map((e) => parseInt(e.remaining)).reduce((a, b)=> a+b, 0);


  return (
    <div className='container mx-auto px-4 max-h-screen'>
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
  )
}

export default ClientBalance