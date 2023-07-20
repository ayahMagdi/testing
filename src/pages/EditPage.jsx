import EditProduct from '../components/EditProduct'

const EditPage = ({record}) => {
  return (
    <div className='container mx-auto'>
        <EditProduct record={record} />
    </div>
  )
}

export default EditPage