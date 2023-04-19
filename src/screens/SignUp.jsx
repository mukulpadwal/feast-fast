import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <div className='container'>
            <form onSubmit={handleOnSubmit} >
                <div className="form-group mb-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3">
                    <label for="inputUserName">User Name</label>
                    <input type="text" className="form-control" id="inputUserName" placeholder="Username" />
                </div>
                <div className="form-group mb-3">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                </div>
                <div className="form-group mb-3">
                    <label for="inputAddress">Address</label>
                    <textarea type="text" className="form-control" id="inputAddress" placeholder="Your Address" />
                </div>
                <div className="form-group mb-3">
                    <label for="inputDate">Date</label>
                    <input type="date" className="form-control" id="inputDate" />
                </div>
                <button type="submit" className="btn btn-success m-3">Create Account</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
            </form>
        </div>
    )
}

export default SignUp;