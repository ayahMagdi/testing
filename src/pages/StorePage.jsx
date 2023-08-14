import Navbar from '../components/Navbar'
import TableStore from '../components/tablemodels/TableStore';
import { useStateValue } from '../context/stateProvider';

const StorePage = ({user ,search , searchItem}) => {

  const {stores} = useStateValue()

  const handleSearch = stores.filter(item => 
     item.code.includes(search)
  )

  return (
    <div className='container mx-auto px-4 max-h-screen'>
      <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} />
      <TableStore isSearched={handleSearch.length && search.length} filteredItems={handleSearch} />
    </div>
  )
}

export default StorePage