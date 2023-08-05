import Purchases from '../components/handleinvoices/Purchases';

const PurchasesPage = ({user , searchItem}) => {

  return (
    <div className='container mx-auto px-4 h-screen'>
       {/* <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} /> */}
       <Purchases />
    </div>
  )
}

export default PurchasesPage