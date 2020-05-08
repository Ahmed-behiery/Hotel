import React, { Component } from 'react';
import "./show.css";





class Show extends Component {


  render(){

  return (

    <div className="show">
        <div className="container">

            <div className="show-box">
                <p className="heading"> a memorable hollidy </p>
                <h2>A great stay in a</h2>
                <h2>lovely hotel.</h2>
                <div className="row text">
                    <div className="col-lg-6 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                           Risus commodo viverra maecenas. Donec in sodales dui,a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio,
                            porttitor vitae efficitur non, ultricies volutpat tellus.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                            <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                               Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                               <button>Make a Reservation</button>
                    </div>
    
                </div>
            </div>

        </div>           
    </div>
    
  );
  }
}

export default Show;
