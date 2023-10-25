import Goback from '../components/Goback';
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';
import SignOut from '../components/SignOut';
import TableStore from '../components/tablemodels/TableStore';
import { useStateValue } from '../context/stateProvider';

const StorePage = ({search , searchItem}) => {

  const {stores} = useStateValue()

  const handleSearch = stores.filter(item => 
     item.code.includes(search)
  )

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
           <Sidebar />
        </div>
        <div className="w-4/5 pl-8">
          <nav className='bg-white py-6'>
            <div className='h-20'>
              {/* <div>
                  <img src={logoImg} alt='logo' className='h-20' />
              </div> */}
              <div className='shadow-[0px_0px_25px_0px_rgba(0,0,0,.1)] py-3 px-5 rounded-md w-full flex justify-between items-center'>
              <Search handleSearch={handleSearch} searchItem={searchItem} />
              <SignOut />
              </div>
            </div>
          </nav>
          <TableStore isSearched={handleSearch.length && search.length} filteredItems={handleSearch} />
          <Goback />
        </div>
      </div>
    </div>
    
  )
}

export default StorePage