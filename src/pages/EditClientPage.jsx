import Sidebar from "../components/Sidebar"
import EditClient from "../components/handleclients/EditClient"

const EditClientPage = ({client,isEdited}) => {

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
            <EditClient client={client} isEdited={isEdited} />
          </div>
      </div>
    </div>
  )
}

export default EditClientPage