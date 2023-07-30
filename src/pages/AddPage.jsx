import AddProduct from "../components/handleproducts/AddProduct"

const AddPage = ({user,isAdded}) => {
  return (
    <div className='container mx-auto px-4'>
        <AddProduct isAdded={isAdded} />
    </div>
  )
}

export default AddPage