import Navbar from '../components/Navbar'
import Purchases from '../components/handlepurchases/Purchases';

const PurchasesPage = ({user , searchItem}) => {

  const handleSearch = () => {
    return;
  }

  return (
    <div className='container mx-auto px-4'>
       <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} />
       <Purchases />
    </div>
  )
}

export default PurchasesPage