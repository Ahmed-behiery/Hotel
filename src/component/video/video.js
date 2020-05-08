import React, { Component } from 'react';
import "./video.css"





class Video extends Component {

   
  render(){
     

  return (

    <div className="video-box">
            <div className="img">
                <img src="/img/video-bg.jpg" alt="" />
            </div>
            <div className="video"> 
                <video src="/img/video.mp4"  autoPlay muted loop /> 
            </div>

    </div>
    
  );
  }
}

export default Video;
