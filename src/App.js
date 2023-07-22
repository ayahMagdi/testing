import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import AddPage from "./pages/AddPage";
import AllproductsPage from "./pages/AllproductsPage";
import EditPage from "./pages/EditPage";
import AllsuppliersPage from "./pages/AllsuppliersPage";
import AddSupplierPage from "./pages/AddSupplierPage";
import EditSupplierPage from "./pages/EditSupplierPage";
import AllClientsPage from "./pages/AllClientsPage";
import AddClientPage from "./pages/AddClientPage";
import EditClientPage from "./pages/EditClientPage";

function App() {

  const [user , setUser] = useState('')
  const [record , setRecord] = useState('')
  const [supplier , setSupplier] = useState('')
  const [client , setClient] = useState('')

  let getUser = (name) => {
     setUser(name)
  }

  const getRecord = (record) => {
    setRecord(record)
  }
  const getSupplier = (supplier) => {
    setSupplier(supplier)
  }
  const getClient = (client) => {
    setClient(client)
  }

  return (
    <div className="App">
      <Routes>
         <Route exact path="/" element={<Login getUser={getUser} />} />
         <Route path="/homepage" element={<Homepage user={localStorage.getItem("username")} />} />
         <Route path="/allproducts" element={<AllproductsPage user={localStorage.getItem("username")} getRecord={getRecord} />} />
         <Route path="/allsuppliers" element={<AllsuppliersPage user={localStorage.getItem("username")} getSupplier={getSupplier} />} />
         <Route path="/allclients" element={<AllClientsPage user={localStorage.getItem("username")} getClient={getClient} />} />
         <Route path="/addproduct" element={<AddPage user={localStorage.getItem("username")} />} />
         <Route path="/addSupplier" element={<AddSupplierPage user={localStorage.getItem("username")} />} />
         <Route path="/addClient" element={<AddClientPage user={localStorage.getItem("username")} />} />
         <Route path="/editproduct" element={<EditPage user={localStorage.getItem("username")} record={record} />} />
         <Route path="/editSupplier" element={<EditSupplierPage user={localStorage.getItem("username")} supplier={supplier} />} />
         <Route path="/editClient" element={<EditClientPage user={localStorage.getItem("username")} client={client} />} />
      </Routes>
    </div>
  );
}

export default App;
