import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { faEdit, faStore } from "@fortawesome/free-solid-svg-icons"
import Search from "../components/Search"
import SignOut from "../components/SignOut"
import logoImg from '../assets/Web capture_11-8-2023_151533_.jpeg'
import Statistics from "../components/Statistics"

const Landing = ({searchItem , search}) => {

    const [categorys , setCategorys] = useState([
        {icon: faEdit , title: 'اضافة منتج' ,url: '/homepage/storepage/allproducts' },
        {icon: faStore , title: 'قائمة الاصناف' ,url: '/homepage/storepage/store' }
      ])
  
      const handleSearch = categorys.filter(category => 
        category.title.includes(search)
      )

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
           <Sidebar />
        </div>
        <div className="w-4/5 pl-8">
           <Navbar handleSearch={() => handleSearch}  searchItem={searchItem} />
           <Statistics />
        </div>
      </div>
    </div>
  )
}

export default Landing