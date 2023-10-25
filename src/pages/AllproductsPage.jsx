import { useEffect, useState } from "react"
import Buttons from "../components/Buttons"
import Navbar from "../components/Navbar"
import TableContent from "../components/tablemodels/TableContent"
import { useStateValue } from "../context/stateProvider"
import SuccessMsg from "../components/SuccessMsg"
import Search from "../components/Search"
import SignOut from "../components/SignOut"
import Sidebar from "../components/Sidebar"

const AllproductsPage = ({editedProduct , getRecord , searchItem , search , addMsg ,editMsg}) => {

  const {items} = useStateValue()
  const [deletedMsg , setDeletedMsg] = useState(false)

  const handleSearch = items.filter(item => 
     item.code.includes(search)
  )

  const isDeleted = (deletedMsg) => {
    setDeletedMsg(deletedMsg)
  }

  useEffect(() => {
    setTimeout(() => {
      deletedMsg && setDeletedMsg(false)
    } , 3000)
  })

  return (
    // <div className="container mx-auto px-4">
    //     {addMsg ? <SuccessMsg title='تمت اضافة المنتج' /> 
    //       : deletedMsg ? <SuccessMsg title='تم حذف المنتج' /> 
    //       : editMsg ? <SuccessMsg title='تم تعديل المنتج' /> 
    //       : ''
    //     }
    //     <Navbar handleSearch={() => handleSearch} searchItem={searchItem} />
    //     <Buttons 
    //          title='اضافة منتج جديد' 
    //          urlAdd={'/homepage/storepage/allproducts/addProduct'} />
    //     <TableContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedProduct={editedProduct} getRecord={getRecord} isDeleted={isDeleted} />
    // </div>
    <div>
      <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
           <Sidebar />
        </div>
        <div className="w-4/5 pl-8">
          {addMsg ? <SuccessMsg title='تمت اضافة المنتج' /> 
             : deletedMsg ? <SuccessMsg title='تم حذف المنتج' /> 
             : editMsg ? <SuccessMsg title='تم تعديل المنتج' /> 
             : ''
           }
           <Navbar handleSearch={() => handleSearch}  searchItem={searchItem} />
          <Buttons 
              title='اضافة منتج جديد' 
              urlAdd={'/homepage/storepage/allproducts/addProduct'} />
          <TableContent isSearched={handleSearch.length && search.length} filteredItems={handleSearch} editedProduct={editedProduct} getRecord={getRecord} isDeleted={isDeleted} />
        </div>
      </div>
    </div>
  )
}

export default AllproductsPage