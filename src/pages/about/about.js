import React, { Component } from 'react';
import Head from "../../component/head/head";
import Counter from "./counter/counter";
import Awards from "./awards/awards";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import Memory from "./memory/memory";
import Book from "./book/book";






class About extends Component {


  render(){

  return (

   
        <div className="about">
                <Head />
                <Memory />
                <Counter className="animated fadeInUp" />
                <Awards />
                <Book />
                <Contact />
                <Footer />
                
            </div>
   
  );
  }
}

export default About;
