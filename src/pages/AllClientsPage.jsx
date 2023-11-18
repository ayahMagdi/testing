import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableClientsContent from '../components/tablemodels/TableClientsContent'
import { useStateValue } from '../context/stateProvider'
import { useEffect, useState } from 'react'
import SuccessMsg from '../components/SuccessMsg'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

const AllClientsPage = ({getClient , editedClients , searchItem , search , addMsg ,editMsg}) => {

  const {clients} = useStateValue()

  const handleSearch = clients.filter(client => 
    client.name.includes(search)
  )
  const [deletedMsg , setDeletedMsg] = useState(false)
  const [branch , setBranch] = useState('addClient')

  const isDeleted = (deletedMsg) => {
    setDeletedMsg(deletedMsg)
  }

  useEffect(() => {
    setTimeout(() => {
      deletedMsg && setDeletedMsg(false)
    } , 3000)
  })

  return (
    <div>
       <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8 h-screen max-h-screen">
          {addMsg ? <SuccessMsg title='تمت اضافة العميل' /> 
              : deletedMsg ? <SuccessMsg title='تم حذف العميل' /> 
              : editMsg ? <SuccessMsg title='تم تعديل العميل' /> 
              : ''
            }
            <Buttons
                branch={branch}
                title='اضافة عميل جديد' 
                urlAdd={'/homepage/clients/allclients/addClient'} />
            <Search handleSearch={() => handleSearch}  searchItem={searchItem} />
            <TableClientsContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedClients={editedClients} getClient={getClient} isDeleted={isDeleted} />
          </div>
        </div>
    </div>
  )
}

export default AllClientsPage