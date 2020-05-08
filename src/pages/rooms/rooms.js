import React, { Component } from 'react';
import Head from "../../component/head/head";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import axios from "axios";
import SliderCaro from "./carousel";
import "./rooms.css";





class Rooms extends Component {

    state={
      rooms: []
    }

    componentDidMount(){
      axios.get("/js/data.json").then( res => {
        this.setState({ rooms: res.data.rooms })
        
      })
    }

  render(){
    const rooms = this.state.rooms;
    const roomList = rooms.map(item => {
      return (

        <div key={item.id} className="sort">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 slider-box-sort">

                <div className="slider-box">
                  <SliderCaro className="boxi"  img1={item.img1} img2={item.img2} img3={item.img3} />
                </div>
            
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-box-sort">
                <div className="text-box">
                  <p className="heading">{item.title}</p> 
                  <h2>{item.head}</h2>
                  <p>{item.body}</p>
                  <div className="icons">
                  <div className="icon">
                             <i className="fas fa-tv fa-2x"></i>
                             <p>Smart TV</p>
                       </div>
                  <div className="icon">
                            <i className="fas fa-wifi fa-2x"></i>
                            <p>High Wi-fii</p>
                       </div>
                       <div className="icon">
                            <i className="fas fa-air-freshener fa-2x"></i>
                            <p>AC</p>
                       </div>
                       <div className="icon">
                            <i className="fas fa-parking fa-2x"></i>
                            <p>Parking</p>
                       </div>
                       <div className="icon">
                            <i className="fas fa-swimming-pool fa-2x"></i>
                            <p>Pool</p>
                       </div>
                  </div>
                  <div className="button">
                           <button>make a reservation</button>
                   </div>
                </div>
            </div>
        </div>

      )
    })

  return (

   
        <div className="rooms">

                  <Head />

                <div className="row">
                 { roomList }
                </div>

                <Contact />
                <Footer />

            </div>
   
  );
  }
}

export default Rooms;
