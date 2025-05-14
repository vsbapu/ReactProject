import React from "react";
import {Link } from "react-router-dom";


function Header() {
    return (
            <div className="hero_area">
                {/* <!-- header section strats --> */}
                <header className="header_section">
                    <div className="header_top">
                        <div className="container-fluid">
                            <div className="contact_nav">
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <span>
                                        Inance
                                    </span>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className=""> </span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav "> 
                                            <li className="nav-item active">
                                            <Link to="/Home" className="nav-link"> Home</Link> < t/>
                                            </li> 
                                            <li className="nav-item">
                                            <Link to="/About" className="nav-link">About</Link> < t/>
                                               
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/Service" className="nav-link">Service</Link> < t/>
                                                
                                            </li>
                                            <li className="nav-item">
                                                <Link to="Contact" className="nav-link" >Contact</Link> < t/>
                                            </li>
                                        </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* <!-- end header section -->
                        <!-- slider section --> */}                
            </div>
    );
}
export default Header;