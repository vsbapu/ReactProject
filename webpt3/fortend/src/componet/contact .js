import React, { useState } from "react";

import Info from "./info";
import Footer from "./footer";


function Contact() {

    let [data,setData]=useState({
        name:'',
        email:'',
        number:'',
        message:'',
        image:"",
    });
    let [errors,setErrors]=useState({
        name:"",
        email:'',
        number:'',
        message:'',
        image:"",
    });


    let handelInputChange=(e)=>{
        let {name,value}=e.target;
        setData((prevdata)=>({
              ...prevdata,data,
              [name]:value,
        }));
    };

    let validform=()=>{
       let dataErrors=([]);
        let isvalid=true;

        if (!data.name) {
            dataErrors.name='name is Requted';
            isvalid=false;
        }
        if (!data.email) {
            dataErrors.email='Email is Requted';
            isvalid=false;
        }
        if (!data.number) {
            dataErrors.number='Number is Requted';
            isvalid=false;           
        }
        if (!data.message) {
            dataErrors.message="Message is Requted";
            isvalid=false;
        }
        if (!data.image) {
            dataErrors.image="Image is Requted";
            isvalid=false;
        }
        
        setErrors(dataErrors);
        return isvalid;
        
    }

    let handelSubmited=async(e)=>{
        e.preventDefault(); 
        
        if (validform()) {
             alert("Data has Submited");   

        }
        else{
            alert("Please sole the error");
        }   
    
    }
    return (
        <>
            <section class="contact_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="form_container">
                                <form action="" onSubmit={handelSubmited}>
                                    <div>
                                        <input type="text" name="name" value={data.name} onChange={handelInputChange} placeholder="Your Name" />
                                        {errors.name  && <p style={{color:'red'}}>{errors.name}</p> }
                                    </div>
                                    <div>
                                        <input type="email"name="email" value={data.email} onChange={handelInputChange} placeholder="Your Email" />
                                        {errors.email  && <p style={{color:'red'}}>{errors.email}</p> }
                                    </div>
                                    <div>
                                        <input type="Number" name="number" value={data.number} onChange={handelInputChange}  placeholder="Your Phone" />
                                        {errors.number  && <p style={{color:'red'}}>{errors.number}</p> }
                                    </div>
                                    <div>
                                        <input type="text" class="message-box" name="message" value={data.Message} onChange={handelInputChange} placeholder="Message" />
                                        {errors.message  && <p style={{color:'red'}}>{errors.message}</p> }
                                    </div>
                                   
                                    <div class="btn_box ">
                                        <button type="" >
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Info/>
            <Footer/>
        </>
    );
};
export default Contact;




