import React from 'react'
import PropTypes from 'prop-types'

class DisplayMansP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MansP: this.props.MansP
    }
  }

  handleInputChange = this.props.HandleInputChange;

  render(){
      return(
          <div>
            <input 
            type="text" 
            name="manPName" 
            placeholder="Name" 
            value={this.state.MansP.name} 
            onChange={this.handleInputChange} 
            />
            <input 
            type="number" 
            name="annualAmount" 
            placeholder="Annual Amount" 
            value={this.state.MansP.annualAmount} 
            onChange={this.handleInputChange} 
            />
            <input 
            type="number" 
            name="monthlyAmount" 
            placeholder="Monthly Amount" 
            value={this.state.MansP.monthlyAmount} 
            onChange={this.handleInputChange} 
            />
            {/* Expenditure List  */}
            <input 
            type="number" 
            name="disposableIncome" 
            placeholder="Disposable Income" 
            value={this.state.MansP.disposableIncome} 
            onChange={this.handleInputChange} 
            />
          </div>
      )
  };

  static propTypes = {
    MansP: PropTypes.shape({
      name: PropTypes.string.isRequired,
      annualAmount: PropTypes.number.isRequired,
      monthlyAmount: PropTypes.number.isRequired,
      expenditures: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired
        }).isRequired),
      disposableIncome: PropTypes.number.isRequired
    }).isRequired,
    AddMansP: PropTypes.func,
    HandleInputChange: PropTypes.func.isRequired
  }
}

export default DisplayMansP;