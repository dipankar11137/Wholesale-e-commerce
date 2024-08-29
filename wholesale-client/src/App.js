import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import About from "./Components/Pages/About/About";
import AllProducts from "./Components/Pages/Dashboard/All Product/AllProducts";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyProducts from "./Components/Pages/Dashboard/My Product/MyProducts";
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
      {/* <div className="fixed top-0 z-50 duration-1000 w-full"> */}
      <Navbar />
      {/* </div> */}

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

        {/* Dashboard Start */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProducts />} />
          <Route path="allProduct" element={<AllProducts />} />
          {/*<Route path="manageDoctor" element={<ManageDoctors />} />
        <Route path="editDoctor/:id" element={<EditDoctor />} />
        <Route path="manageContact" element={<ManageContacts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addDonner" element={<AddDonner />} />
        <Route path="showDonner" element={<ShowDonners />} />
        <Route path="manageVaccine" element={<ManageVaccine />} /> */}
        </Route>
        {/* Dashboard End */}
        {/* <Footer /> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
