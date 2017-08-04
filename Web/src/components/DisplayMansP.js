import React from 'react'
import ExpenditureList from './ExpenditureList'

class DisplayMansP extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.MansP
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.state = Object.assign([{}], nextProps.MansP)
    console.log(this.state)
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
              expenditures={this.state.expenditures}
              mansP={this.state}
              AddExpenditure={this.props.AddExpenditure}/>
            <h3> {this.state.disposableIncome} </h3> {/* This probs should be its own entity?*/}
          </div>
      )
  };
}

export default DisplayMansP;