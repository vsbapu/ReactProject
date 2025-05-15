import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from "./Componet/Header";
import Service from "./Componet/service";
import Featuredcars from "./Componet/featured-cars ";
import Newcars from "./Componet/new-cars ";
import Brand from "./Componet/brand";
import Contact from "./Componet/contact";

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Featuredcars' element={<Featuredcars/>}/>
      <Route path="/Newcars" element={<Newcars/>}/>
      <Route path="/Brand" element={<Brand/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </>
  );
}export default App;
