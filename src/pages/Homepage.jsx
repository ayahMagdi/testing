import { useEffect, useState } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import SuccessMsg from "../components/SuccessMsg"
import { useStateValue } from "../context/stateProvider"
import axios from "axios"

const Homepage = ({searchItem , search}) => {

  const [show , setShow] = useState(true)

  const showMsg = localStorage.getItem('success')
  
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
      localStorage.removeItem('success')
    } , 2000)
    
  } , [])

  const {categorys} = useStateValue()

  const handleSearch = categorys.filter(category => 
    category.title.includes(search)
  )


  return (
    <div className="container mx-auto px-4">
        {showMsg && <SuccessMsg title='تم تسجيل الدخول بنجاح' />}
        <Navbar handleSearch={() => handleSearch}  searchItem={searchItem} />
        <Content isSearched={handleSearch.length && search.length} filteredItems={handleSearch}  />
    </div>
  )
}

export default Homepage