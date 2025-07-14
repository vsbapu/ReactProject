import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";



let LoginPage = ({ SetAuthenticated }) => {
  let [username, setUserName] = useState("");
  let [password, setpassWord] = useState("");
  let navigate = useNavigate();

  let handleLogin = () => {
    // Here you can add logic for actual authentication, for now we just check a simple condition
    if (username === 'vishubha' && password === 'zala@2414') {
      SetAuthenticated(true);
      navigate('/About'); // Redirect to the protected page
    } else {
      alert('Invalid credentials');
    }
  };

  return (

      <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', border: '1px solid green', boxShadow: '10px -10px  5px black', marginTop: '10%', width: '50%', marginLeft: '25%' }}>
        <h1 style={{ marginTop: '2%', fontStyle: 'italic', fontSize: 'bold', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>Login Page</h1>
        <br />
        <br />

        <input type="text" name="name" placeholder="Enter Userid" value={username} onChange={(e) => setUserName(e.target.value)} style={{ width: '80%', paddingLeft: '15px' }} />
        <br />

        <input type="Password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setpassWord(e.target.value)} style={{ width: '80%', paddingLeft: '15px' }} />

        <br />
        <button onClick={handleLogin} style={{ width: '25%', height: '35px', paddingLeft: '15px', backgroundColor: 'black', color: "white", marginBottom: '15px' }}>Login</button>
      </div>

  );
};
export default LoginPage;
