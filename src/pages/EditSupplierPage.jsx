import EditSupplier from "../components/handlesuppliers/EditSupplier"

const EditSupplierPage = ({supplier}) => {
  return (
    <div className='container mx-auto'>
       <EditSupplier supplier={supplier} />
    </div>
  )
}

export default EditSupplierPage