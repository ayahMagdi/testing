import { useEffect, useState } from "react"
import Buttons from "../components/Buttons"
import Navbar from "../components/Navbar"
import TableContent from "../components/tablemodels/TableContent"
import { useStateValue } from "../context/stateProvider"
import SuccessMsg from "../components/SuccessMsg"

const AllproductsPage = ({user , editedProduct , getRecord , searchItem , search , addMsg ,editMsg}) => {

  const {items} = useStateValue()
  const [deletedMsg , setDeletedMsg] = useState(false)
  // const [addedMsg , setAddedMsg] = useState(addMsg)
  // const [editedMsg , setEditedMsg] = useState(editMsg)

  const handleSearch = items.filter(item => 
     item.code.includes(search)
  )

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
        {addMsg ? <SuccessMsg title='تمت اضافة المنتج' /> 
          : deletedMsg ? <SuccessMsg title='تم حذف المنتج' /> 
          : editMsg ? <SuccessMsg title='تم تعديل المنتج' /> 
          : ''
        }
        <Navbar user={user} handleSearch={() => handleSearch} searchItem={searchItem} />
        <Buttons 
             title='اضافة منتج جديد' 
             urlBack={'/homepage'} 
             urlAdd={'/addProduct'} />
        <TableContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedProduct={editedProduct} getRecord={getRecord} isDeleted={isDeleted} />
    </div>
  )
}

export default AllproductsPage