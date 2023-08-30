import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableClientsContent from '../components/tablemodels/TableClientsContent'
import { useStateValue } from '../context/stateProvider'
import { useEffect, useState } from 'react'
import SuccessMsg from '../components/SuccessMsg'

const AllClientsPage = ({getClient , editedClients , searchItem , search , addMsg ,editMsg}) => {

  const {clients} = useStateValue()

  const handleSearch = clients.filter(client => 
    client.name.includes(search)
  )
  const [deletedMsg , setDeletedMsg] = useState(false)
  // const [addedMsg , setAddedMsg] = useState(addMsg)
  // const [editedMsg , setEditedMsg] = useState(editMsg)

  const isDeleted = (deletedMsg) => {
    setDeletedMsg(deletedMsg)
  }
  // const isEdited = (editedMsg) => {
  //   setEditedMsg(editedMsg)
  // }

  useEffect(() => {
    setTimeout(() => {
      // addedMsg && setAddedMsg(false)
      deletedMsg && setDeletedMsg(false)
      // editedMsg && setEditedMsg(false)
    } , 3000)
  })

  return (
    <div className="container mx-auto px-4">
       {addMsg ? <SuccessMsg title='تمت اضافة العميل' /> 
          : deletedMsg ? <SuccessMsg title='تم حذف العميل' /> 
          : editMsg ? <SuccessMsg title='تم تعديل العميل' /> 
          : ''
        }
        <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
        <Buttons
             title='اضافة عميل جديد' 
             urlAdd={'/homepage/clients/allclients/addClient'} />
        <TableClientsContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedClients={editedClients} getClient={getClient} isDeleted={isDeleted} />
    </div>
  )
}

export default AllClientsPage