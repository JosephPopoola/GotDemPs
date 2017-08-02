import React from 'react'
import PropTypes from 'prop-types'

class DisplayExpenditure extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.Expenditure
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
      [name]: value
  });
}

  render(){
      return(
          <div>
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={this.state.name} 
            onChange={this.handleInputChange} 
            />
            <input 
            type="number" 
            name="value" 
            placeholder="Expenditure Value" 
            value={this.state.value} 
            onChange={this.handleInputChange} 
            />
          </div>
      )
  };

  static propTypes = {
    Expenditure: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  }
}

export default DisplayExpenditure;