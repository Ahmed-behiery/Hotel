import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
 
class Date extends React.Component {
//   state = {
//     startDate: new Date()
//   };
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };
 
  render() {
    return (
      <DatePicker
        defaultValue="mm / dd / yyyy"	
        className={this.props.className}
        selected={this.props.startDate}
        onChange={this.props.handleChange}
      />
    );
  }
}
export default Date;