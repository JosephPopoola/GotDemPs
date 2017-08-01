import React from 'react'
import PropTypes from 'prop-types'

class DisplayExpenditure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Expenditure: this.props.Expenditure
    }
  }

  handleInputChange = this.props.HandleInputChange;

  render(){
      return(
          <div>
            <input 
            type="text" 
            name="expenditureName" 
            placeholder="Name" 
            value={this.state.Expenditure.name} 
            onChange={this.handleInputChange} 
            />
            <input 
            type="number" 
            name="expenditureValue" 
            placeholder="Expenditure Value" 
            value={this.state.Expenditure.value} 
            onChange={this.handleInputChange} 
            />
          </div>
      )
  };

  static propTypes = {
    Expenditure: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired,
    HandleInputChange: PropTypes.func.isRequired
  }
}

export default DisplayExpenditure;