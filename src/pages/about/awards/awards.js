import React, { Component } from 'react';
import axios from "axios";
import "./awards.css";





class Awards extends Component {

        state={
            awards: []
        }


        componentDidMount() {
            axios.get("/js/data.json").then( res => {
                this.setState({ awards: res.data.awards })
                console.log(this.state.awards);
                
            })
        }
  render(){

    const awards = this.state.awards;
    const awardsList =  awards.map(item => {
        return (
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="awards-box">
                    <div className="image">
                        <img src={item.img}  alt="" />
                    </div>
                    <span className="text-center">{item.year}</span>
                    <h3 className="text-center">{item.heading}</h3>
                    <p className="heading text-center">{item.title}</p>
                    <p className="text-center">{item.body}</p>
                </div>
            </div>
        )
    })

  return (

   
        <div className="awards">
                <div className="container">
                    <h2>Our Awards</h2>
                    <div className="row">
                        {awardsList}
                    </div>
                </div>

            </div>
   
  );
  }
}

export default Awards;
