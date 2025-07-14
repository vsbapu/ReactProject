import React, { useState, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import Spinner from "./componet/loder";
import Topbar from "./componet/topbar";
import Navbar from "./componet/navbar";
import Home from "./componet/home";
import About from "./componet/About";
import Service from "./componet/Service";
import Pages from "./componet/pages";
import Booking from "./componet/Booking";
import Technicians from "./componet/Technicians";
import Testimonial from "./componet/Testimonial";
import Pages404 from "./componet/pages404";
import Contact from "./componet/Contact";
import Footer from "./componet/Footer";
import LoginPage from "./componet/Login";
import ProtectedRoute from "./componet/protect";



function App() {

  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [loding, setLoding]=useState(true);
    useEffect(()=>{
      setTimeout(() => {
        setLoding(false);
      },2000 );
    },[])
    
    if (loding) {
      return <Spinner/>;
    };
    return (
    <>
    
    <Topbar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/LoginPage" element={<LoginPage SetAuthenticated={setIsAuthenticated} />} />
      <Route path="/About" element={<ProtectedRoute isAuthenticated={isAuthenticated}><About /></ProtectedRoute >}></Route>
      <Route path="/Service" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Service /></ProtectedRoute>}></Route>
      <Route path="/Pages" element={<Pages />}></Route>
      <Route path="/Booking" element={<Booking />}>Booking</Route>
      <Route path="/Technicians" element={<Technicians />}>Technicians</Route>
      <Route path="/Testimonial" element={<Testimonial />}>Testimonial</Route>
      <Route path="/Pages404" element={<Pages404 />}>Pages404</Route>
      <Route path="Contact" element={<Contact />}>Contact</Route>
      <Route path="/Footer" element={<Footer />}>Footer</Route>
    </Routes>
  </>
);
}


export default App;
