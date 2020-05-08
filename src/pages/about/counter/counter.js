import React, { Component } from 'react';
import CountUp from 'react-countup';
import "./counter.css";




class Counter extends Component {


  render(){

  return (

   
        <div className="counter">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-12">
                <div className="media">
                    <CountUp className="mr-3 count animated fadeInUp"  start={0} end={25} duration={5} />
                    <div className="media-body">
                        <h5 className="mt-0">Luxury Suites</h5>
                        <p>FROM $399</p>
                    </div>
                </div>

                </div>
                <div className="col-lg-4 col-sm-12 col-12">
                <div className="media">
                <CountUp className="mr-3 count animated fadeInUp"  start={0} end={35} duration={5} /><span>K</span>
                    <div className="media-body">
                        <h5 className="mt-0">Happy Clients</h5>
                        <p>ALL YEAR LONG</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-12">
                <div className="media">
                <CountUp className="mr-3 count animated fadeInUp"  start={0} end={365} duration={4.5} />
                    <div className="media-body">
                        <h5 className="mt-0">Days/ Year</h5>
                        <p>FROM $399</p>
                    </div>
                </div>
                </div>
            </div>
         </div>
        </div>
   
  );
  }
}

export default Counter;
