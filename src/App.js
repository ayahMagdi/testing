import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
