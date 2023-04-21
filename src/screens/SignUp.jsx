import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: ""

    })

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const URL = "http://localhost:5000/api/createuser";
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
                setCredentials({
                    name: "",
                    email: "",
                    password: "",
                    geolocation: ""
                });
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
            <h1 className='p-3 text-center'>Sign Up Form</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="inputUserName" className='mb-1'>User Name</label>
                    <input type="text" className="form-control" id="inputUserName" placeholder="Username" name="name" value={credentials.name} onChange={handleOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail" className='mb-1'>Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" name='email' value={credentials.email} onChange={handleOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPassword" className='mb-1'>Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={credentials.password} onChange={handleOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress" className='mb-1'>Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Your Address" name="geolocation" value={credentials.geolocation} onChange={handleOnChange} />
                </div>
                <button type="submit" className="btn btn-success m-3">Create Account</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
            </form>
        </div>
    )
}

export default SignUp;