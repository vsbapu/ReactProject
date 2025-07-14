
import React,{useState} from "react";
import Footer from "./Footer";

function Contact() {

    let [data,setData]=useState({
        name:'',
        Email:'',
        Subject:'',
        Message:'',
    });
    let [errors,setErrors]=useState({
        name:'',
        Email:'',
        Subject:'',
        Message:'',   
    });

    let handelInputChange=(e)=>{
        let {name,value}=e.target;
        setData((preData)=>({
            ...preData,data,
            [name]:value
        }));
    };

    let validate=()=>{
        let dataErrors=([]);
        let isvlaid=true;

        if (!data.name) {
            dataErrors.name="Name is Requted";
            isvlaid=false; 
        }
        if (!data.Email) {
            dataErrors.Email="Email is Requted";
            isvlaid=false; 
        }
        if (!data.Subject) {
            dataErrors.Subject="Subject is Requted";
            isvlaid=false; 
        }
        if (!data.Message) {
            dataErrors.Message="Message is Requted";
            isvlaid=false; 
        }
    
        setErrors(dataErrors);
        return isvlaid;
    };

    let handelSubmited=(e)=>{
        e.preventDefault();
        JSON.stringify(data)
        if (validate()) {
            alert("your Data is Submited");
        }
        else{
            alert("Please Check the Error and  Sole error");
        }
        setData([]);
        setData({name:'',Email:'',Message:'',Subject:''});
    };


    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-primary text-uppercase">// Contact Us //</h6>
                        <h1 class="mb-5">Contact For Any Query</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="row gy-4">
                                <div class="col-md-4">
                                    <div class="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 class="text-uppercase">// Booking //</h5>
                                        <p class="m-0"><i class="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 class="text-uppercase">// General //</h5>
                                        <p class="m-0"><i class="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 class="text-uppercase">// Technical //</h5>
                                        <p class="m-0"><i class="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe class="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" style={{
                                    minHeight: '350px', border: '0', allowFullscreen: "", ariaHidden: 'false'
                                    , tabindex: '0'
                                }}></iframe>
                        </div>
                        <div class="col-md-6">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name" name="name" value={data.name} onChange={handelInputChange} />
                                                <label for="name">Your Name</label>
                                                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email" name="Email" value={data.Email} onChange={handelInputChange} />
                                                <label for="email">Your Email</label>
                                                {errors.Email && <p style={{color:'red'}}>{errors.Email}</p>}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="subject" placeholder="Subject" name="Subject" value={data.Subject} onChange={handelInputChange} />
                                                <label for="subject">Subject</label>
                                                {errors.Subject && <p style={{color:'red'}}>{errors.Subject}</p>}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }} name="Message" value={data.Message} onChange={handelInputChange}></textarea>
                                                <label for="message">Message</label>
                                                {errors.Message && <p style={{color:'red'}}>{errors.Message}</p>}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit" onClick={handelSubmited}>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

} export default Contact;