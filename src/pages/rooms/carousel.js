import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';





class SliderCaro extends Component {

    

  render(){
    

  return (

   
        <div className="slider">
    
              <Carousel className={this.props.className} showThumbs={false} showStatus={false} showArrows={false} >
                {/* <div className="boxi"> */}
                    <img src={this.props.img1}  alt="" />
                {/* </div> */}
                {/* <div className="boxi"> */}
                    <img src={this.props.img2} alt="" />
                {/* </div> */}
                {/* <div className="boxi"> */}
                    <img src={this.props.img3} alt=""  />
                {/* </div> */}
            </Carousel>

       </div>
   
  );
  }
}

export default SliderCaro;
