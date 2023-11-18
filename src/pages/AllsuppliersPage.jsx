import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableSuppliersContent from '../components/tablemodels/TableSuppliersContent'
import { useStateValue } from '../context/stateProvider'
import SuccessMsg from '../components/SuccessMsg'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

const AllsuppliersPage = ({editedSuppliers , getSupplier , searchItem , search , addMsg ,editMsg}) => {

  const {suppliers} = useStateValue()

  const handleSearch = suppliers.filter(item => 
     item.name.includes(search)
  )
  const [deletedMsg , setDeletedMsg] = useState(false)
  // const [state , setState] = useState()
  const [branch , setBranch] = useState('addSupplier')

  const isDeleted = (deletedMsg) => {
    setDeletedMsg(deletedMsg)
  }

  useEffect(() => {
    setTimeout(() => {
      deletedMsg && setDeletedMsg(false)
    } , 2000)
  })

  return (
    <div>
    <div className="flex justify-start items-start w-full gap-10">
      <div className="w-1/5">
         <Sidebar />
      </div>
      <div className="w-4/5 pl-8 h-screen max-h-screen">
         {addMsg ? <SuccessMsg title='تمت اضافة المورد' /> 
             : deletedMsg ? <SuccessMsg title='تم حذف المورد' /> 
             : editMsg ? <SuccessMsg title='تم تعديل المورد' /> 
             : ''
           }
         <Buttons 
              branch={branch}
              title='اضافة مورد جديد' 
              urlAdd={'/homepage/suppliers/allsuppliers/addSupplier'} />
        <Search handleSearch={() => handleSearch} searchItem={searchItem} />
        <TableSuppliersContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedSuppliers={editedSuppliers} getSupplier={getSupplier} isDeleted={isDeleted} />
      </div>
    </div>
  </div>
  )
}

export default AllsuppliersPage