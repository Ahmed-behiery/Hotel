import React, { Component } from 'react';
import "./sales.css"





class Sales extends Component {

   
  render(){
     

  return (

    <div className="sales">

        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-12">
                    <h2>“Customers love our </h2>
                    <h2>facilities”</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.
                        Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada.</p>
                    <button>make a reservation</button>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">

                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-6">
                            <div className="image">
                                <img src="/img/home-about-1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-6">
                            <div className="image">
                                <img src="/img/home-about-2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-6">
                            <div className="image">
                                <img src="/img/home-about-3.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-6">
                            <div className="image">
                                <img src="/img/home-about-4.jpg" alt="" />
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

export default Sales;
