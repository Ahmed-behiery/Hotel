import React, { Component } from 'react';
import "./book.css";





class Book extends Component {


  render(){

  return (

   
        <div className="book">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xm-12 col-12">
                            <p>Book your stay with us now!</p>
                    </div>
                    <div className="col-lg-4 col-xm-12 col-12">
                        <button>make a reservation</button>
                    </div>
                </div>
            </div>
         </div>
   
  );
  }
}

export default Book;
