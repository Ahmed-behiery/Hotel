import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";





class Navbar extends Component {


  render(){

  return (

    <div className="Navbar">
        
                    <nav className="navbar navbar-expand-lg navbar-light boxx d-flex justify-content-between">
                        <div className="logo"><NavLink className="navbar-brand" to="/"><img src="/img/logo.png" alt="" /></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button></div>

                        <div className="collapse navbar-collapse list" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mr-5">
                                <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item mr-5">
                                <NavLink className="nav-link"  to="/about">About</NavLink>
                            </li>
                            <li className="nav-item mr-5">
                                <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
                            </li>
                            <li className="nav-item dropdown mr-5">
                                <div className="dropdown">
                                    <div className="dropbtn ">Services</div>
                                    <div className="dropdown-content animated fadeInUp">
                                        <NavLink className="dd" exact to="/services">Services</NavLink>
                                        <NavLink className="dd" exact to="/about">About Us</NavLink>
                                        <NavLink className="dd" exact to="/">FAQ</NavLink>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item mr-5">
                                <NavLink className="nav-link" to="/news">News</NavLink>
                            </li>
                            <li className="nav-item mr-5">
                                <NavLink className="nav-link" to="/contactus">Contact</NavLink>
                            </li>
                            </ul>
                           
                        </div>
                        <button className="bttn">Make a Reservation</button>
                    </nav>

    </div>
    
  );
  }
}

export default Navbar;
