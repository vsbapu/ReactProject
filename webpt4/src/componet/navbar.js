import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
         {/* <!-- Navbar Start --> */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <Link to='/' style={{color:'black',marginTop:'22px',fontSize:'18px', marginLeft:'15px' }}>Home</Link> 
                <Link to='/About' style={{color:'black',marginTop:'22px',fontSize:'18px' ,marginLeft:'15px' }}>About</Link>  
                <Link to='/Service' style={{color:'black',marginTop:'22px',fontSize:'18px',marginLeft:'15px' }}>Service</Link>

                <div class="nav-item dropdown">
                    {/* <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a> */}
                    <Link to='/pages' style={{color:'black',marginLeft:'15px' }} class="nav-link dropdown-toggle" data-bs-toggle="dropdown">pages</Link> 
                    <div class="dropdown-menu fade-up m-0">
                        <Link to='/Booking' class="dropdown-item">Booking</Link>
                        <Link to='/Technicians' class="dropdown-item">Technicians</Link>
                        <Link to='/Testimonial' class="dropdown-item">Testimonial</Link>
                        <Link to='/pages404' class="dropdown-item">pages404</Link>
                        
                        {/* <a href="booking.html" class="dropdown-item">Booking</a>
                        <a href="team.html" class="dropdown-item">Technicians</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a> */}
                    </div>
                </div>
                <Link to='/Contact' style={{color:'black',marginTop:'22px',fontSize:'18px',marginRight:'45px'   }}>Contact</Link> 
                {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
                 
            </div>
            <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}

        </>
    );
}export default Navbar;