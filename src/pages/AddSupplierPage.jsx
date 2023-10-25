import Sidebar from "../components/Sidebar"
import AddSupplier from "../components/handlesuppliers/AddSupplier"

const AddSupplierPage = ({isAdded}) => {

  return (
    <div>
     <div className="flex justify-start items-start w-full gap-10">
       <div className="w-1/5">
          <Sidebar />
       </div>
       <div className="w-4/5 pl-8">
          <AddSupplier isAdded={isAdded} />
       </div>
     </div>
   </div>
  )
}

export default AddSupplierPage