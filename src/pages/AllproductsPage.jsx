import Buttons from "../components/Buttons"
import Navbar from "../components/Navbar"
import TableContent from "../components/tablemodels/TableContent"

const AllproductsPage = ({user , editedProduct , getRecord}) => {
  return (
    <div className="container mx-auto">
        <Navbar user={user} />
        <Buttons 
             title='اضافة منتج جديد' 
             urlBack={'/homepage'} 
             urlAdd={'/addProduct'} />
        <TableContent editedProduct ={editedProduct} getRecord={getRecord}/>
    </div>
  )
}

export default AllproductsPage