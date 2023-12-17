import Sidebar from '../components/Sidebar';
import Sales from '../components/handleinvoices/Sales';

const SalesPage = () => {

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
             <Sales />
          </div>
      </div>
   </div>
  )
}

export default SalesPage