import React, { Component } from 'react';
import axios from "axios";
import "./customers.css";





class Customers extends Component {

    state = {
        guest: []
    }

    componentDidMount(){
        axios.get("/js/data.json").then(res => {
            this.setState({ guest: res.data.guest })

        })
        
    }


  render(){
      const guest = this.state.guest;
      const guestList = guest.map(item => {
          return (
            <div key={item.id} className="col-lg-6 col-12">
              <div  className="guest-box">
                    <p className="heading">{item.date}</p>
                    <h3>{item.head}</h3>
                    <i className={item.icon}></i>
                    <i className={item.icon}></i>
                    <i className={item.icon}></i>
                    <i className={item.icon}></i>
                    <i className={item.icon}></i>

                    <p className="body">{item.desc}</p>

                    <div className="media">
                        <img className="mr-3" src={item.img} alt="Generic placeholder " />
                        <div className="media-body">
                            <h5 className="mt-0">{item.name}</h5>
          <p> {item.statu}</p>
                        </div>
                    </div>


              </div>
          </div>


          )
      })

  return (

    <div className="customers">
        <div className="container">
            <h2>Guestbook</h2>
            <div className="row">
                   
                        {guestList}
                    
            </div>
           
        </div> 
    </div>
    
  );
  }
}

export default Customers;
