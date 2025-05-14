import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './componet/header';
import Home from './componet/home';
import About from './componet/about';
import Contact from './componet/contact';
import Footer from './componet/footer';
import Service from './componet/service';

function App() {
    
    return (
        <>
            <Header />
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Service' element={<Service/>}/>
                <Route path='/Contact' element={<Contact />} />
            </Routes >
            <Footer/>
        </>

    );
}
export default App;