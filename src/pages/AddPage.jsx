import AddProduct from '../components/AddProduct'
import Navbar from '../components/Navbar'

const AddPage = ({user}) => {
  return (
    <div className='container mx-auto'>
        <Navbar user={user} />
        <AddProduct />
    </div>
  )
}

export default AddPage