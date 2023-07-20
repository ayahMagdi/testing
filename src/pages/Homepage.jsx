import { useEffect, useState } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import SuccessMsg from "../components/SuccessMsg"

const Homepage = ({user}) => {

  const [show , setShow] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {setShow(false)} , 2000)
  } , [])

  return (
    <div className="container mx-auto">
        {show && <SuccessMsg />}
        <Navbar user={user} />
        <Content />
    </div>
  )
}

export default Homepage