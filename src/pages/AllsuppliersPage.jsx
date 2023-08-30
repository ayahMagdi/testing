import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableSuppliersContent from '../components/tablemodels/TableSuppliersContent'
import { useStateValue } from '../context/stateProvider'
import SuccessMsg from '../components/SuccessMsg'

const AllsuppliersPage = ({editedSuppliers , getSupplier , searchItem , search , addMsg ,editMsg}) => {

  const {suppliers} = useStateValue()

  const handleSearch = suppliers.filter(item => 
     item.name.includes(search)
  )
  const [deletedMsg , setDeletedMsg] = useState(false)

  const isDeleted = (deletedMsg) => {
    setDeletedMsg(deletedMsg)
  }

  useEffect(() => {
    setTimeout(() => {
      deletedMsg && setDeletedMsg(false)
    } , 2000)
  })

  return (
    <div className="container mx-auto px-4">
       {addMsg ? <SuccessMsg title='تمت اضافة المورد' /> 
          : deletedMsg ? <SuccessMsg title='تم حذف المورد' /> 
          : editMsg ? <SuccessMsg title='تم تعديل المورد' /> 
          : ''
        }
        <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
        <Buttons 
             title='اضافة مورد جديد' 
             urlAdd={'/homepage/suppliers/allsuppliers/addSupplier'} />
        <TableSuppliersContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedSuppliers={editedSuppliers} getSupplier={getSupplier} isDeleted={isDeleted} />
    </div>
  )
}

export default AllsuppliersPage