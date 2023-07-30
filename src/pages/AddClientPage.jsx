import AddClient from "../components/handleclients/AddClient"

const AddClientPage = ({isAdded}) => {
  return (
    <div className='container mx-auto px-4'>
       <AddClient isAdded={isAdded} />
    </div>
  )
}

export default AddClientPage