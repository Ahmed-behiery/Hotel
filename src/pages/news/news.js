import React, { Component } from 'react';
import Head from "../../component/head/head";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import Newssec from "./news-sec/news-sec";








class News extends Component {


  render(){

  return (

   
        <div className="news">
    
                <Head />
                <Newssec />
                <Contact />
                <Footer />

            </div>
   
  );
  }
}

export default News;
