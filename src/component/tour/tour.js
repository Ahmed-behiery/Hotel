import React, { Component } from 'react';
import "./tour.css";





class Tour extends Component {


  render(){

  return (

    <div className="tour">
       <div className="row">
           <div className="col-lg-6 col-sm-12 col-12">
               <div className="tour-box suit">
                <div>
                   <h2>Luxury Suite Room</h2>
                   <p className="heading">FROM $399</p>
                </div>
                   <div className="advan">
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
                       <div className="button">
                           <button>make a reservation</button>
                       </div>

                   </div>
               </div>

           </div>
           <div className="col-lg-6 col-sm-12 col-12">
           <div className="tour-box pool">
                   <h2>Infinity Pool</h2>
                   <p className="heading">for all our guests</p>
                   <div className="advan">
                       <div className="button">
                           <button>make a reservation</button>
                       </div>
                   </div>
               </div>
               
           </div>
       </div>
    </div>
    
  );
  }
}

export default Tour;
