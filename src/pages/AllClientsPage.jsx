import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import TableClientsContent from '../components/tablemodels/TableClientsContent'

const AllClientsPage = ({user , getClient , editedClients}) => {
  return (
    <div className="container mx-auto">
        <Navbar user={user} />
        <Buttons
             title='اضافة عميل جديد' 
             urlBack={'/homepage'} 
             urlAdd={'/addClient'} />
        <TableClientsContent editedClients ={editedClients} getClient={getClient}/>
    </div>
  )
}

export default AllClientsPage