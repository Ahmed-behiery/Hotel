import React, { Component, Fragment } from 'react';
import Head from "../../component/head/head";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import axios from "axios";
import "./services.css";






class Services extends Component {

  state= {
    services: []
  }

  componentDidMount(){
    axios.get("/js/data.json").then( res => {
      this.setState({ services: res.data.services })
      console.log(this.state.services);
      
    })
  }

  render(){
    const services = this.state.services;
    const serveList = services.map( item => {
      return (
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="serv-box">
                <div className="image">
                  <img src={item.img1} alt="" />
                </div>
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.head}</h2>
                <p>{item.body}</p>
              </div>
          </div>
      )
    })

  return (

      <Fragment>
        <Head />
      
        <div className="services">
      
      
              <div className="container">
                  <div className="row">
                      {serveList}
                  </div>

              </div>

            <div className="child">

              <div className="row">
                 <div className="col-lg-6 col-sm-12 col-12 slider-box-sort">
                    <div className="pic-box">
                       <img src="/img/services/kid-img.png" alt="" />
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-12 text-box-sort">
                    <div className="text-box">
                        <p className="heading">A MEMORABLE HOLLIDAY</p> 
                        <h2>Activities for Children</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                           Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.</p>
                           <button>Make a Reservation</button>  
                   </div>
                </div>

              </div>     

            </div>


        </div>
      <Contact />
      <Footer />
      </Fragment>
   
  );
  }
}

export default Services;
