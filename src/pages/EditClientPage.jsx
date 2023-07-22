import EditClient from "../components/handleclients/EditClient"

const EditClientPage = ({client}) => {
  return (
    <div className='container mx-auto'>
        <EditClient client={client} />
    </div>
  )
}

export default EditClientPage