import Sidebar from "../components/Sidebar"
import EditSupplier from "../components/handlesuppliers/EditSupplier"

const EditSupplierPage = ({supplier , isEdited }) => {

  return (
     <div>
     <div className="flex justify-start items-start w-full gap-10">
         <div className="w-1/5">
           <Sidebar />
         </div>
         <div className="w-4/5 pl-8">
           <EditSupplier supplier={supplier} isEdited={isEdited} />
         </div>
     </div>
     </div>
  )
}

export default EditSupplierPage