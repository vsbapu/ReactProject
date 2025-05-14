import React, { useState } from "react";
function Contact() {
    let [formData, setFormData] = useState({
        name: '',
        Number: '',
        Email: '',
        Message: '',
    })
    let [error,setError]=useState({
        name: '',
        Number: '',
        Email: '',
        Message: '',        
    });

    
    let handelInputChange = (e) => {
        let {name,value} = e.target;
        setFormData((perData) => ({
            ...perData, formData,
            [name]: value,
        }));    
    };

    let validForm=()=>{
        let formErrors=([]);
        let isvlaid=true;

        if (!formData.name) {
            formErrors.name='name is required';
            isvlaid=false;
            
        }
        if (!formData.Number) {
            formErrors.Number='Number is required';
            isvlaid=false;   
        }
        if (!formData.Email) {
            formErrors.Email='Emali is required';
            isvlaid=false;
        }
        if (!formData.Message) {
            formErrors.Message='message is required';
            isvlaid=false;
        }
        setError(formErrors);
        return isvlaid;
    };

    let handelSubmit=(e)=>{
        e.preventDefault();
        JSON.stringify(formData);
        if (validForm()) {
            alert("Form is submited");
        }
        else{
            alert("please fix the erros in the form ");
        }
        setFormData([]);
        setFormData({name:'' ,Number:'',Emali:'',Message:''});
    };
    

    return (
        <section className="contact_section layout_padding"  >
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Contact Us
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6" >
                        <form  >
                            <div>
                                <input type="text"  name="name" value={formData.name} onChange={handelInputChange}  placeholder="Name"  style={{color:"black"}}/>
                                {error.name && <p  style={{ color: 'red'}}>{error.name}</p>}
                            </div>
                            <div>
                                <input type="Number" name="Number"  value={formData.Number} placeholder="Phone Number"  onChange={handelInputChange} style={{color:"black"}}/>
                                {error.Number && <p style={{ color: 'red' }}>{error.Number}</p>}
                            </div> 
                            <div>
                                <input type="email" name="Email"  value={formData.Email} placeholder="Email" onChange={handelInputChange} style={{color:"black"}} />
                                {error.Email && <p style={{ color: 'red' }}>{error.Email}</p>}
                            </div>
                            <div>
                                <input type="text" className="message-box" name="Message" value={formData.Message} placeholder="Message"  onChange={handelInputChange} style={{color:"black"}}/>
                                {error.Message && <p style={{ color: 'red' }}>{error.Message}</p>}
                            </div>
                            <div className="d-flex ">
                                <button onClick={handelSubmit}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap" style={{ width: "100%", height: "100%" }} >
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024.238086431485!2d-74.005973!3d40.712775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc353dbd189%3A0x4fa533cc29a8c233!2sOld%20City%20Hall%20Station!5e0!3m2!1sen!2sus!4v1739365864116!5m2!1sen!2sus" style={{ width: "100%", height: "400px" }} iframe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;