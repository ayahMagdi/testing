import Buttons from "../components/Buttons"
import Navbar from "../components/Navbar"
import TableContent from "../components/TableContent"

const AllproductsPage = ({user}) => {
  return (
    <div className="container mx-auto">
        <Navbar user={user} />
        <Buttons 
             title='اضافة منتج جديد' 
             urlBack={'/homepage'} 
             urlAdd={'/addProduct'} />
        <TableContent />
    </div>
  )
}

export default AllproductsPage