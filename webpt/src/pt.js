import React, { useState } from "react";


function Contect() {

    let [formdata, setFormData] = useState({
        name: '',
        Email: '',
        Number: '',
    });
    let [errors, setErrors] = useState({
        name: '',
        Email:'',
        Number:'',
    });
    let handelInputChange = (e) => {
        let { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, formdata,
            [name]: value
        }));
    };



    let validate = () => {
        let formErrors = {};
        let isValid = true;

        if (!formdata.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formdata.Email) {
            formErrors.Email = 'Emali is Requited';
            isValid = false;
        }
        if (!formdata.Number) {
            formErrors.Number = 'Number is Requited';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    let handelSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form Data Is Submited');
        }
        else{
            alert("please Fix The Error in Form")
        }
    };

    return (
        <form onSubmit={handelSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={formdata.name} onChange={handelInputChange} />
                {errors.name && <div style={{ color: 'red' }} > {errors.name}</div>}
            </div>
            <div>
                    <label>Emali</label>
                    <input type="Email" name="Email" value={formdata.Email} onChange={handelInputChange}/>
                    {errors.Email && <div style={{color:'red'}} > {errors.Email}</div>}
                </div>
            <div>
                <label>Number</label>
                <input type="Number" name="Number" value={formdata.Number} onChange={handelInputChange} />
                {errors.Number && <div style={{ color: 'red' }}>{errors.Number}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Contect;