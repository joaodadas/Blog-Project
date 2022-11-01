import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Utilities/PrivateRoute"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/*Rotas Privadas*/}
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Profile" element={<Profile />}/>
        </Route>
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro/>} />
        <Route path="*" element={<div>404!</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
