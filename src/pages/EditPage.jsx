import Sidebar from "../components/Sidebar"
import EditProduct from "../components/handleproducts/EditProduct"

const EditPage = ({record , isEdited}) => {

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
            <EditProduct record={record} isEdited={isEdited} />
          </div>
      </div>
    </div>
  )
}

export default EditPage