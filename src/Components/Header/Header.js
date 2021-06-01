import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {

    const cart = props.badge;
    return (
        <div>

            <div className="header">

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Browse</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Career</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"> <FontAwesomeIcon icon={faShoppingCart} />Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Course Enrolled:<span className="badge badge-success">{cart}</span></a>
                                </li>
                            </ul>
                            <form className="d-flex forma ml-auto">
                                <input className="form-control me-2 " type="search" placeholder= "&#x1f50d; What do you want to learn today?" aria-label="Search"></input>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            

                        </div>
                        </div>
                </nav>

            </div>




            </div>
    );
};

export default Header;