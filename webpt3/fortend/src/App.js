// import logo from './logo.svg';
// import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './componet/header';
import About from './componet/About';
import Service from './componet/service';
import Pricing from './componet/Pricing';
import Contact from './componet/contact ';
import Footer from './componet/footer';


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Service' element={<Service/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    
    
    </>    
  );
}

export default App;
