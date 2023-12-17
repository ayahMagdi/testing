import { faClipboardList, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Category from '../components/Category'
import Goback from '../components/Goback'
import Search from '../components/Search'

const PurchasesInfo = ({searchItem , search}) => {

    const [categorys , setCategorys] = useState([
        {title: 'فواتير الداخل' , icon: faClipboardList , url: '/homepage/purchasesinfo/inwardbills' , branch: 'purchasesList' },
        {title: 'جرد الداخل' , icon: faMoneyBill1Wave , url: '/homepage/purchasesinfo/inventoryincome' ,  branch: 'purchasesInventory'},
      ])
  
      const handleSearch = categorys.filter(category => 
        category.title.includes(search)
      )

      
  const setBranch = (branch) => {
    localStorage.setItem('branch' , branch)
  }

  return (
    <div>
    <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 pl-8 mt-5">
        <Search handleSearch={() => handleSearch}  searchItem={searchItem} />
        <div className='bg-white grid grid-cols-5 gap-5 justify-between items-center mt-4 cursor-pointer'>
            {handleSearch.length && search.length ? handleSearch?.map((e , i) => (
                <Category icon={e.icon} title={e.title} url={e.url} key={i} handelBranch={() => setBranch(e.branch)} />
              ))
              :categorys?.map((e , i) => (
                <Category icon={e.icon} title={e.title} url={e.url} key={i} handelBranch={() => setBranch(e.branch)} />
              ))}
        </div>
        <Goback />
        </div>
    </div>
  </div>
  )
}

export default PurchasesInfo