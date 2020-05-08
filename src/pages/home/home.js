import React, { Component } from 'react';
import Header from "../../component/header/header";
import Show from "../../component/show/show";
import Tour from "../../component/tour/tour";
import Customers from "../../component/customers/customers";
import Video from "../../component/video/video";
import Sales from "../../component/sales/sales";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import "./home.css";





class Home extends Component {


  render(){

  return (

    <div className="home">

            <Header />
            <Show />
            <Tour />
            <Customers />
            <Video />
            <Sales />
            <Contact />
            <Footer />
                
    </div>
    
  );
  }
}

export default Home;
