import { faFileInvoice, faMoneyCheckDollar, faUsers } from "@fortawesome/free-solid-svg-icons"
import Category from "../components/Category"
import Navbar from "../components/Navbar"
import { useState } from "react"
import Goback from "../components/Goback"

const Suppliers = ({searchItem , search}) => {

    const [categorys , setCategorys] = useState([
      {icon: faUsers , title: 'اضافة مورد' ,url: '/homepage/suppliers/allsuppliers' },
      {icon: faFileInvoice , title: 'طباعة فواتير الموردين' ,url: '/supplierbills' },
      {icon: faMoneyCheckDollar , title: 'كشف حساب' ,url: '/supplierbalance' }
    ])

    const handleSearch = categorys.filter(category => 
      category.title.includes(search)
    )

  return (
    <div className="container mx-auto px-4">
        <Navbar handleSearch={() => handleSearch}  searchItem={searchItem} />
        <div className='bg-white grid grid-cols-5 gap-5 justify-between items-center mt-4 cursor-pointer'>
            {handleSearch.length && search.length ? handleSearch?.map((e , i) => (
               <Category icon={e.icon} title={e.title} url={e.url} key={i} />
            ))
            :categorys?.map((e , i) => (
              <Category icon={e.icon} title={e.title} url={e.url} key={i} />
            ))}
        </div>
        <Goback />
    </div>
  )
}

export default Suppliers