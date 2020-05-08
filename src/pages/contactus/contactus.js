import React, { Component } from 'react';
import Head from "../../component/head/head";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import Consec from "./contsec";
import Map from "./map";





class Contactus extends Component {


  render(){

  return (

   
        <div className="contactus">
    
                <Head />
                <Consec />
                <Map />
                <Contact />
                <Footer />
            </div>
   
  );
  }
}

export default Contactus;
