import React from 'react';
import Select from 'react-select';
 
const options = [
    { value: 'eg.master suit', label: 'eg.master suit' },
  { value: 'Double Room', label: 'Double Room' },
  { value: 'Single Room', label: 'Single Room' },
  { value: 'Special Room', label: 'Special Room' },
];
 
class Selectt extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder ="eg.master suit"
        className="select"
        menuColor='red'
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'lightgray',
            primary: 'gray',
            primary50: "lightgray",
            neutral20: "transparent",
            neutral80: "grey",
            neutral50: "lightgray",
            neutral30: "lightgray",
          },
        })}
        

        // defaultInputValue="eg.master suit"
      />
    );
  }
}
export default Selectt;