import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "../navbar/navbar.css";
import "./footer.css";



class Footer extends Component {


  render(){

  return (

    <div className="footer Navbar">
                 <div className="container">
                    <div className="row"><div className="col-lg-7"></div>
                    <div className="col-lg-5"><nav className="navbar navbar-expand-lg navbar-light boxx">
                    
                    <div className="collapse navbar-collapse list" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mr-5">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item mr-5">
                    <NavLink className="nav-link" to="/">About</NavLink>
                    </li>
                    <li className="nav-item mr-5">
                    <NavLink className="nav-link" to="/">Rooms</NavLink>
                    </li>
                    <li className="nav-item dropdown mr-5">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Facilities
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/">About US</NavLink>
                    <NavLink className="dropdown-item" to="/">Services</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/">FAQ</NavLink>
                    </div>
                    </li>
                    <li className="nav-item mr-5">
                    <NavLink className="nav-link" to="/">News</NavLink>
                    </li>
                    <li className="nav-item mr-5">
                    <NavLink className="nav-link" to="/">Contact</NavLink>
                    </li>
                    </ul>
                    
                    </div>
                    </nav></div></div>
             </div>

            <p>Copyright &copy;2020 All rights reserved | This template is made with <i className="fas fa-heart"></i> by Colorlib</p>

    </div>
                
    
  );
  }
}

export default Footer;
