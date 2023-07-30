import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableSuppliersContent from '../components/tablemodels/TableSuppliersContent'
import { useStateValue } from '../context/stateProvider'
import SuccessMsg from '../components/SuccessMsg'

const AllsuppliersPage = ({user, editedSuppliers , getSupplier , searchItem , search , addMsg ,editMsg}) => {

  const {suppliers} = useStateValue()

  const handleSearch = suppliers.filter(item => 
     item.name.includes(search)
  )
  const [deletedMsg , setDeletedMsg] = useState(false)
  const [addedMsg , setAddedMsg] = useState(addMsg)
  const [editedMsg , setEditedMsg] = useState(editMsg)

  const isDeleted = (deletedMsg) => {
    setDeletedMsg(deletedMsg)
  }
  const isEdited = (editedMsg) => {
    setEditedMsg(editedMsg)
  }

  useEffect(() => {
    setTimeout(() => {
      addedMsg && setAddedMsg(false)
      deletedMsg && setDeletedMsg(false)
      editedMsg && setEditedMsg(false)
    } , 3000)
  })

  return (
    <div className="container mx-auto px-4">
       {addedMsg ? <SuccessMsg title='تمت اضافة المورد' /> 
          : deletedMsg ? <SuccessMsg title='تم حذف المورد' /> 
          : editedMsg ? <SuccessMsg title='تم تعديل المورد' /> 
          : ''
        }
        <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} />
        <Buttons 
             title='اضافة مورد جديد' 
             urlBack={'/homepage'} 
             urlAdd={'/addSupplier'} />
        <TableSuppliersContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedSuppliers={editedSuppliers} getSupplier={getSupplier} isDeleted={isDeleted} />
    </div>
  )
}

export default AllsuppliersPage