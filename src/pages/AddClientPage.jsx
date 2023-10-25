import Sidebar from "../components/Sidebar"
import AddClient from "../components/handleclients/AddClient"

const AddClientPage = ({isAdded}) => {

  return (
    // <div className='container mx-auto px-4'>
    //    <AddClient isAdded={isAdded} />
    // </div>
    <div>
    <div className="flex justify-start items-start w-full gap-10">
      <div className="w-1/5">
         <Sidebar />
      </div>
      <div className="w-4/5 pl-8">
         <AddClient isAdded={isAdded} />
      </div>
    </div>
  </div>
  )
}

export default AddClientPage