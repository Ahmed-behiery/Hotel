import React, { Component } from 'react';
import Axios from 'axios';
import "./news-sec.css";







class Newssec extends Component {
    state={
        news: []
    }

    componentDidMount(){
        Axios.get("/js/data.json").then( res => {
            this.setState({ news: res.data.news })
        })
    }

  render(){
      const news = this.state.news;
      const newsList = news.map((item, index) => {
          return (
              <div key={index} className="news-box">
                  <div className="img">
                      <img src={item.img} alt="" />
                  </div>
                  <span>{item.date}</span>
                  <h2>{item.head}</h2>
                  <p>{item.title}</p>
                  <p>{item.body}</p>
              </div>
          )
      })

  return (

   
        <div className="new">
    
               <div className="container">

                   <div className="row">
                       <div className="col-lg-8 col-sm-12 col-12">

                           {newsList}
                           
                       </div>
                       <div className="col-lg-4 col-sm-12 col-12 data">
                            <form>
                                <input type="search" />
                                <button>Search</button>
                            </form>
                            <h3>Categories</h3>
                            <ul className="list-unstyled">
                                <li>Holliday (22)</li>
                                <li>Fun Facts (28)</li>
                                <li>Planning a Trip (18)</li>
                                <li>Uncategorized (19)</li>
                            </ul>
                            <h3>Archive</h3>
                            <ul className="list-unstyled">
                                <li>April 2019</li>
                                <li>March 2019</li>
                                <li>February 2019</li>
                                <li>January 2019</li>
                                <li>December 2018</li>
                            </ul>
                            <div className="reserve">
                                <h3>Book Your Next Vacation</h3>
                                <button>Make a Reservation</button>
                            </div>
                        </div>
    
                   </div>

               </div>

            </div>
   
  );
  }
}

export default Newssec;
