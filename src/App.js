import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import AddPage from "./pages/AddPage";

function App() {

  const [user , setUser] = useState('')

  let getUser = (name) => {
     setUser(name)
  }

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Login getUser={getUser} />} />
         <Route path="/homepage" element={<Homepage user={user} />} />
         <Route path="/addproduct" element={<AddPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;