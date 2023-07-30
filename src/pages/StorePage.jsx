import Navbar from '../components/Navbar'
import TableStore from '../components/tablemodels/TableStore';

const StorePage = ({user , searchItem}) => {

  const handleSearch = () => {
    return;
  }

  return (
    <div className='container mx-auto px-4'>
      <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} />
      <TableStore />
    </div>
  )
}

export default StorePage