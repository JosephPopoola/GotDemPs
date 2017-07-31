import React, { Component, PropTypes } from 'react';

import MansPListItem from './MansPListItem';

export default class MansPList extends Component {
  static propTypes = {
    mansPs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  static currentMansPs = this.props.mansPs;

  render () {
    return (
      <ul>
        {
          currentMansPs.forEach(function(mansP) {
            return (<MansPListItem
              name={mansP.name}
              annualAmount={mansP.annualAmount}
              monthlyAmount={mansP.monthlyAmount}
              expenditures={mansP.expenditures}
              disposableIncome={mansP.disposableIncome}
              {...this.props.actions} />);
          }, this);
        }
      </ul>
    );
  }

}