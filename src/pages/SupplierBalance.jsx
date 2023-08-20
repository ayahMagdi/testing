import React from 'react'
import Navbar from '../components/Navbar'
import TableBalance from '../components/tablemodels/TableBalance'
import { useStateValue } from '../context/stateProvider'

const SupplierBalance = ({user ,search , searchItem}) => {

    const {supplierBalance} = useStateValue()

    const handleSearch = supplierBalance?.filter(item =>
        item.code.includes(search) 
     )

  return (
    <div className='container mx-auto px-4 max-h-screen'>
      <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} />
      <TableBalance 
        title='رصيد الموردين'
        nameText='اسم المورد'
        codeText='كود المورد'
        supplierList={supplierBalance} 
        isSearched={handleSearch.length && search.length} 
        filteredItems={handleSearch} 
     />
    </div>
  )
}

export default SupplierBalance