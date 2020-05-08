import React, { Component } from 'react';
// import Date from "./date";
import Selectt from "./select";
import "./header.css";






class Header extends Component {

    state={
        countAd: 0,
        countCh: 0,
        countR: 0
    }

    Increase = (id) => {
      if (id === 1) {
        this.setState({ countAd: this.state.countAd + 1 })
      }
      else if (id === 2) {
        this.setState({ countCh: this.state.countCh + 1 })
      } else {
        this.setState({ countR: this.state.countR + 1 })
      }
    }

    Decrease = (id) => {
      if (id === 1) {
              if(this.state.countAd < 1) {
                return false;
            }
            else  this.setState({ countAd: this.state.countAd - 1 })  
    
      }
      else if (id === 2) {
              if(this.state.countCh < 1) {
                return false;
            }
            else  this.setState({ countCh: this.state.countCh - 1 }) 
      } else {
            if(this.state.countR < 1) {
              return false;
          }
          else  this.setState({ countR: this.state.countR - 1 }) 
        
      }
    }

    
   
    
  render(){

  return (

    <div className="header">

            <h1>A Luxury Stay</h1>
            <div className="check">
                <h5>Check Availability</h5>
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <div className="from">
                                <p>from</p>
                                <input  type="date"  />
                                {/* <Date     selected={this.state.startDate} onChange={this.handleChange} /> */}
                                <img src="/img/calendar.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-12">
                         <div className="to">
                                <p>to</p>
                                <input type="date"  />
                                {/* <Date className="dataPicker"    selected={this.state.startDate} onChange={this.handleChange} /> */}
                                <img src="/img/calendar.png" alt="" />
                         </div>
                    </div>
                    <div className="col-lg-4 col-12">
                         <div className="family">
                             <div className="data">
                                 <p>Adult</p>
                                 <span onClick={() => {this.Decrease(1)}} className="decre">-</span>
                                 <input type="text"  value={this.state.countAd} name="one" />
                                 <span onClick={() => {this.Increase(1)}} className="incre">+</span>

                             </div>
                             <div className="data">
                                 <p>Children</p>
                                 <span onClick={() => {this.Decrease(2)}} className="decre">-</span>
                                 <input type="text" value={this.state.countCh} />
                                 <span onClick={() => {this.Increase(2)}} className="incre">+</span>
                             </div>
                             <div className="data">
                                 <p>Rooms</p>
                                 <span onClick={() => {this.Decrease(3)}} className="decre">-</span>
                                 <input type="text" value={this.state.countR} />
                                 <span onClick={() => {this.Increase(3)}} className="incre">+</span>
                             </div>
                         </div>
                    </div>
                    <div className="col-lg-3 col-12">
                         <div className="room">
                                <p>Room</p>
                                <Selectt />
                                
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

export default Header;
