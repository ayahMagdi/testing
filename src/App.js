import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import AddPage from "./pages/AddPage";
import AllproductsPage from "./pages/AllproductsPage";
import EditPage from "./pages/EditPage";

function App() {

  const [user , setUser] = useState('')
  const [record , setRecord] = useState('')

  let getUser = (name) => {
     setUser(name)
  }

  const getRecord = (record) => {
    setRecord(record)
  }

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Login getUser={getUser} />} />
         <Route path="/homepage" element={<Homepage user={localStorage.getItem("username")} />} />
         <Route path="/allproducts" element={<AllproductsPage user={localStorage.getItem("username")} getRecord={getRecord} />} />
         <Route path="/addproduct" element={<AddPage user={localStorage.getItem("username")} />} />
         <Route path="/editproduct" element={<EditPage user={localStorage.getItem("username")} record={record} />} />
      </Routes>
    </div>
  );
}

export default App;
