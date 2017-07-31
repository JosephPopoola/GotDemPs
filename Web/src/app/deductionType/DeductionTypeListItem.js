import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './DeductionTypeListItem.css';

export default class DeductionTypeListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number,
    addDeductionType: PropTypes.func.isRequired,
    removeDeductionType: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.DeductionTypeListItem}>
        <div className={styles.deductionType}>
          <div><span>{this.props.name}</span></div>
          <div><span>{this.props.percentage}</span></div>
        </div>
        <div className={styles.deductionType}>
          <button onClick={() => this.props.removeDeductionType(this.props.name)}>
            DELETE
          </button>
        </div>
      </li>
    );
  }

}