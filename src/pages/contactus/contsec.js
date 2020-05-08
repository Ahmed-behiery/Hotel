import React, { Component } from 'react';
import "./contactus.css";





class Consec extends Component {


  render(){

  return (

   
        <div className="con">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 col-12">
                            <div className="form">
                                <p className="heading">A MEMORABLE HOLLIDAY</p>
                                <h2>Located in the center of </h2>
                                <h2>Los Angeles</h2>
                                <form>
                                    <input type="text" placeholder="your name" />
                                    <input type="email" placeholder="your email" />
                                    <input type="text" placeholder="subject" />
                                    <textarea placeholder="message"></textarea>
                                    <button>send message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12">
                            <div className="info">
                                <button>Get Directions</button>
                                <div className="info-box">
                                    <img src="/img/contact-logo.png" alt="" />
                                    <ul className="list-unstyled">
                                            <li>1525 Madison Lane, Los Angeles, CA</li>
                                            <li>+1 (603)535-4592</li>
                                            <li>hello@youremail.com</li>
                                            <li>Everyday: 06:00 -22:00</li>
                                    </ul>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-youtube"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
               
            </div>
   
  );
  }
}

export default Consec;
