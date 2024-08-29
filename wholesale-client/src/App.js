import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import About from "./Components/Pages/About/About";
import Buys from "./Components/Pages/Home/Buy/Buys";
import ProductCategory from "./Components/Pages/Home/Buy/ProductCategory";
import Home from "./Components/Pages/Home/Home";
import Sales from "./Components/Pages/Home/Sales/Sales";
import Navbar from "./Components/Share/Navbar";
import NotFound from "./Components/Share/NotFound";

function App() {
  const [category,setCategory]=useState([])
  return (
    <div>
      {/* <CreateAccount /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home setCategory={setCategory} />}></Route>

        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/buy" element={<Buys />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/products"
          element={<ProductCategory category={category} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
