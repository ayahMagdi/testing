import Sidebar from '../components/Sidebar';
import Purchases from '../components/handleinvoices/Purchases';

const PurchasesPage = () => {

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8">
            <Purchases />
          </div>
      </div>
    </div>
  )
}

export default PurchasesPage