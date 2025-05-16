import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Info from "./info";
import Service from "./service";
import Pricing from "./Pricing";
import Contact from "./contact ";
import Footer from "./footer";


function Header() {
    return (
        <>
        
        <div class="hero_area">
            {/* <!-- header section strats --> */}
            <header class="header_section">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html">
                            <span>Hostit</span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  ml-auto">
                                <Link to='/' style={{color:'white' , fontSize:'20px', marginTop:'10px',marginLeft:'25px'}} >Home</Link> <t/>
                                <Link to='/About' style={{color:'white' , fontSize:'20px', marginTop:'10px',marginLeft:'25px'}} >About</Link ><t/>
                                <Link to='/Service' style={{color:'white' , fontSize:'20px', marginTop:'10px', marginLeft:'25px'}} >Services</Link><t/>
                                <Link to='/Pricing' style={{color:'white' , fontSize:'20px', marginTop:'10px',marginLeft:'25px'}} >Pricing</Link ><t/>
                                <Link to='/contact' style={{color:'white' , fontSize:'20px', marginTop:'10px',marginLeft:'25px'}} >contact</Link><t/>    
                            </ul>
                            <div class="quote_btn-container">
                                <form class="form-inline">
                                    <button class="btn   nav_search-btn" type="submit" style={{marginTop:'10px',fontSize:'20px'}}>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                                <a href="">
                                    <i class="fa fa-phone" aria-hidden="true" style={{marginTop:'20px', fontSize:'20px'}}></i>
                                    <span  style={{marginTop:'20px', fontSize:'20px'}} >
                                        Call : +01 123455678990
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
              {/* <!-- slider section --> */}
              <section class="slider_section ">
                <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="detail-box">
                                            <h1>
                                                Fast & Secure <br />
                                                Web Hosting
                                            </h1>
                                            <p>
                                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                                            <div class="btn-box">
                                                <a href="" class="btn-1">
                                                    Read More
                                                </a>
                                                <a href="" class="btn-2">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class=" col-lg-10 mx-auto">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="detail-box">
                                            <h1>
                                                Fast & Secure <br />
                                                Web Hosting
                                            </h1>
                                            <p>
                                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                                            <div class="btn-box">
                                                <a href="" class="btn-1">
                                                    Read More
                                                </a>
                                                <a href="" class="btn-2">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class=" col-lg-10 mx-auto">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="detail-box">
                                            <h1>
                                                Fast & Secure <br />
                                                Web Hosting
                                            </h1>
                                            <p>
                                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                                            <div class="btn-box">
                                                <a href="" class="btn-1">
                                                    Read More
                                                </a>
                                                <a href="" class="btn-2">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class=" col-lg-10 mx-auto">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel_btn-box">
                        <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- end slider section --> */}
        </div>   
            // {/* <!-- end header section --> */ }
        
    </>
    );
} export default Header;