import React, { Component, PropTypes } from 'react';

export default class MansPListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    annualAmount: PropTypes.number.isRequired,
    monthlyAmount: PropTypes.number.isRequired,
    expenditures: PropTypes.array.isRequired,
    disposableIncome: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  static mansP = this.props.mansP;

  render () {
    return (
      <div>
        <p>name: {mansP.name}</p>
        <p>annualAmount: {mansP.annualAmount}</p>
        <p>monthlyAmount: {mansP.monthlyAmount}</p>
        <p>expenditures {/* List */}</p>
        <p>disposableIncome: {mansP.disposableIncome}</p> 
      </div>
    );
  }

}