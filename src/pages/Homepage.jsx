import Content from "../components/Content"
import Navbar from "../components/Navbar"
import SuccessMsg from "../components/SuccessMsg"

const Homepage = ({user}) => {

  return (
    <div className="container mx-auto">
        <SuccessMsg />
        <Navbar user={user} />
        <Content />
    </div>
  )
}

export default Homepage