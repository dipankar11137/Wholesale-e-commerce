import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Buy from "./Components/Pages/Home/Buy/Buy";
import Home from "./Components/Pages/Home/Home";
import Sales from "./Components/Pages/Home/Sales/Sales";
import Navbar from "./Components/Share/Navbar";
import NotFound from "./Components/Share/NotFound";

function App() {
  return (
    <div >
      {/* <CreateAccount /> */}
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
