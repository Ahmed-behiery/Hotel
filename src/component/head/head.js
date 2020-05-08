import React, { Component } from 'react';
import "./head.css";





class Head extends Component {


  render(){

  return (

    <div className="header head">

            <div className="check">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <div className="from">
                                <p>from</p>
                                <input type="date"  />
                                <img src="/img/calendar.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-12">
                         <div className="to">
                                <p>to</p>
                                <input type="date"  />
                                <img src="/img/calendar.png" alt="" />
                         </div>
                    </div>
                    <div className="col-lg-4 col-12">
                         <div className="family">
                             <div className="data">
                                 <p>Adult</p>
                                 <span className="decre">-</span>
                                 <input type="text" value="0" />
                                 <span className="incre">+</span>

                             </div>
                             <div className="data">
                                 <p>Children</p>
                                 <span className="decre">-</span>
                                 <input type="text" value="0" />
                                 <span className="incre">+</span>
                             </div>
                             <div className="data">
                                 <p>Rooms</p>
                                 <span className="decre">-</span>
                                 <input type="text" value="0" />
                                 <span className="incre">+</span>
                             </div>
                         </div>
                    </div>
                    <div className="col-lg-3 col-12">
                         <div className="room">
                                <p>Room</p>
                                <input type="text" value="EG. Master Suite" />
                         </div>
                    </div>
                    <div className="col-lg-1 col-12">
                        <button className="btn">Go</button>
                    </div>



                </div>
               
            </div>
                
    </div>
    
  );
  }
}

export default Head;
