import AddSupplier from "../components/handlesuppliers/AddSupplier"

const AddSupplierPage = ({isAdded}) => {
  return (
    <div className='container mx-auto px-4'>
       <AddSupplier isAdded={isAdded} />
    </div>
  )
}

export default AddSupplierPage