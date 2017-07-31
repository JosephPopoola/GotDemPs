import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { addDeduction, addMansPsToUser, addExpenditure } from '../actions'
import {connect} from 'react-redux';
//import { bindActionCreators } from 'redux';  

let deduction = {
  name: 'text test',
  percentage: 0.77
};

let manP = {
    name: 'null',
    annualAmount: 100000,
    monthlyAmount: 3000,
    expenditures: [],
    disposableIncome: 0
};

const expenditure = {
    name: null,
    value: 0,
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Got Mans Ps</h2>
        </div>
        <div className="income-box">
          <input placeholder="Income per Month" type="number" min="0"></input>
          <button type="submit">submit</button>
        </div>
        <button type="button" onClick={() => this.props.addDeductionClick(deduction)}>Add a new deduction Type</button>
        <button type="button" onClick={() => this.props.addManPClick(manP)}>Add man P</button>
        <button type="button" onClick={() => this.props.addExpenditureClick(expenditure)}>Add expenditure</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  deductionTypes: state.deductionTypes
});

const mapDispatchToProps = dispatch => {
  return{
    addDeductionClick : deduction => {
      dispatch(addDeduction(deduction));
    },
    addManPClick : manP => {
      dispatch(addMansPsToUser(manP));
    },   
    addExpenditureClick : expenditure => {
      dispatch(addExpenditure(expenditure));
    },   
  }
};

export default connect(
                  mapStateToProps,
                  mapDispatchToProps
                )(App);
