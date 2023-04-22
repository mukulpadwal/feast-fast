import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  let navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const URL = "http://localhost:5000/api/loginuser";
      const response = await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(credentials),
      });
      const jsonData = await response.json();

      if (jsonData.status) {
        localStorage.setItem("authToken", jsonData.authToken);
        navigate("/");
      }

      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className='container mt-3'>
      <h1 className='p-3 text-center'>Log In</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="inputEmail" className='mb-1'>Email address</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" name='email' value={credentials.email} onChange={handleOnChange} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputPassword" className='mb-1'>Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={credentials.password} onChange={handleOnChange} />
        </div>
        <button type="submit" className="btn btn-success m-3">Log In</button>
        <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new User</Link>
      </form>
    </div>
  )
}
