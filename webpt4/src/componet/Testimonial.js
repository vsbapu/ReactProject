import React from "react";

function Testimonial() {
    return (
        <>
            <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="text-center">
                        <h6 class="text-primary text-uppercase">// Testimonial //</h6>
                        <h1 class="mb-5">Our Clients Say!</h1>
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide  testimonial-carousel position-relative" >
                        <div class="carousel-item active">
                            <div class="carousel-item testimonial-item text-center ">
                                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: '80px', height: '80px' }} />
                                    <h5 class="mb-0">Client Name</h5>
                                    <p>Profession</p>
                                    <div class="testimonial-text bg-light text-center p-4">
                                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                            </div>
                            <div class="3  testimonial-item text-center carousel-item active">
                                <div class="testimonial-item text-center carousel-item active">
                                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: '80px', height: '80px' }} />
                                    <h5 class="mb-0">Client Name</h5>
                                    <p>Profession</p>
                                    <div class="testimonial-text bg-light text-center p-4">
                                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial-item text-center">
                                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: '80px', height: '80px' }} />
                                    <h5 class="mb-0">Client Name</h5>
                                    <p>Profession</p>
                                    <div class="testimonial-text bg-light text-center  p-4">
                                        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-item text-center">
                                <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: '80px', height: '80px' }} />
                                <h5 class="mb-0">Client Name</h5>
                                <p>Profession</p>
                                <div class="testimonial-text bg-light text-center p-4">
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ color: 'black' }} >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
} export default Testimonial;
