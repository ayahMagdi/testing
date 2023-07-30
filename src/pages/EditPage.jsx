import EditProduct from "../components/handleproducts/EditProduct"

const EditPage = ({record , isEdited}) => {
  return (
    <div className='container mx-auto px-4'>
        <EditProduct record={record} isEdited={isEdited} />
    </div>
  )
}

export default EditPage