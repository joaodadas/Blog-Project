import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Registro" element={<Registro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
