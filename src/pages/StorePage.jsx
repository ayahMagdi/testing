import Goback from '../components/Goback';
import Navbar from '../components/Navbar'
import TableStore from '../components/tablemodels/TableStore';
import { useStateValue } from '../context/stateProvider';

const StorePage = ({search , searchItem}) => {

  const {stores} = useStateValue()

  const handleSearch = stores.filter(item => 
     item.code.includes(search)
  )

  return (
    <div className='container mx-auto px-4 max-h-screen'>
      <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
      <TableStore isSearched={handleSearch.length && search.length} filteredItems={handleSearch} />
      <Goback />
    </div>
  )
}

export default StorePage