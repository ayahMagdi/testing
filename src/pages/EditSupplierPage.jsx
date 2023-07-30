import EditSupplier from "../components/handlesuppliers/EditSupplier"

const EditSupplierPage = ({supplier , isEdited}) => {
  return (
    <div className='container mx-auto px-4'>
       <EditSupplier supplier={supplier} isEdited={isEdited} />
    </div>
  )
}

export default EditSupplierPage