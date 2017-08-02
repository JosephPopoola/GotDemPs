import React from 'react'
import PropTypes from 'prop-types'
import ExpenditureList from './ExpenditureList'

class DisplayMansP extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.MansP
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
            name="annualAmount" 
            placeholder="Annual Amount" 
            value={this.state.annualAmount} 
            onChange={this.handleInputChange} 
            />
            <input 
            type="number" 
            name="monthlyAmount" 
            placeholder="Monthly Amount" 
            value={this.state.monthlyAmount} 
            onChange={this.handleInputChange} 
            />
            <ExpenditureList 
              expenditures={this.state.expenditures}/>
            <h3> {this.state.disposableIncome} </h3> {/* This probs should be its own entity?*/}
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
    }).isRequired
  }
}

export default DisplayMansP;