import React from 'react'
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableSuppliersContent from '../components/tablemodels/TableSuppliersContent'

const AllsuppliersPage = ({user, editedSuppliers , getSupplier}) => {
  return (
    <div className="container mx-auto">
        <Navbar user={user} />
        <Buttons 
             title='اضافة مورد جديد' 
             urlBack={'/homepage'} 
             urlAdd={'/addSupplier'} />
        <TableSuppliersContent editedSuppliers ={editedSuppliers} getSupplier={getSupplier}/>
    </div>
  )
}

export default AllsuppliersPage