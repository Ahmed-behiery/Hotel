import React, { Component } from 'react';
import "./memory.css";




class Memory extends Component {


  render(){

  return (

   
        <div className="memory">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="text">
                                  <p className="headp">A MEMORABLE HOLLIDA</p>
                                  <h2>A great stay in a </h2>
                                  <h2>lovely hotel.</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                     Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales,
                                     vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.</p>
                                  <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                                  <button>make a reservation</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="image">
                                        <img src="/img/about/about-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="image">
                                          <img src="/img/about/about-2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="image">
                                          <img src="/img/about/about-3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="image">
                                           <img src="/img/about/about-4.jpg" alt="" />
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

export default Memory;
