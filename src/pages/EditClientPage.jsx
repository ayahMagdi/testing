import EditClient from "../components/handleclients/EditClient"

const EditClientPage = ({client,isEdited}) => {
  return (
    <div className='container mx-auto px-4'>
        <EditClient client={client} isEdited={isEdited} />
    </div>
  )
}

export default EditClientPage