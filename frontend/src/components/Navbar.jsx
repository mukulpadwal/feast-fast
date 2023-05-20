import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand fs-1 fst-italic" to='/'>Feast Fast</Link>
                    <div className="collapse navbar-collapse me-auto mb-2" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
                            </li>

                            {
                                (localStorage.getItem("authToken"))
                                    ? <li className="nav-item">
                                        <Link className="nav-link active fs-5" aria-current="page" to='/'>
                                            My Cart
                                            <Badge pill bg='danger' className='m-1 '> 2 </Badge>
                                        </Link>
                                    </li>
                                    : ""
                            }
                        </ul>

                        {
                            (!localStorage.getItem("authToken")) ?
                                <div className='d-flex'>
                                    <Link className="nav-link btn bg-white text-success mx-1" to='/login'>Login</Link>
                                    <Link className="nav-link btn bg-white text-success mx-1" to='/createuser'>Sign Up</Link>
                                </div> :
                                <div>
                                    <div className='btn bg-white text-danger' onClick={handleLogout}>Logout</div>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
