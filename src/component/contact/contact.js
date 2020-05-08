import React, { Component } from 'react';
import "./contact.css";





class Contact extends Component {

   
  render(){
     

  return (

    <div className="contac">

        <div className="container">
            <div className="row">
               <div className="col-lg-4 col-sm-12 col-12 log">
                  <img src="/img/logo.png" alt="" />
                  <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>

               <div className="col-lg-5 col-sm-12 col-12">
                  <div className="subscribe">
                    <h2>Newsletter</h2>
                    <form>
                        <input type="email" placeholder="your email here " />
                        <button>Subscribe</button>
                    </form>
                 </div>
               </div>

               <div className="col-lg-3 col-sm-12 col-12">
                  <div className="info">
                    <h2>Contact Info</h2>
                    <div className="media">
                        <i className="mr-3 fas fa-map-marker-alt"></i>
                        <div className="media-body">
                            <p>1525 Boring Lane,</p>
                            <p>Los Angeles, CA</p>
                        </div>
                    </div>
                    <div className="media">
                        <i className="mr-3 fas fa-phone-alt"></i>
                        <div className="media-body">
                            <p>+1 (603)535-4592</p>
                           
                        </div>
                    </div>
                 </div>
               </div>

            </div>

         </div>   
    </div>
    
  );
  }
}

export default Contact;
