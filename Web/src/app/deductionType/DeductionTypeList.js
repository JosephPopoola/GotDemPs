import React, { Component, PropTypes } from 'react';

import styles from './DeductionTypeList.css';
import DeductionTypeListItem from './DeductionTypeListItem';

export default class DeductionTypeList extends Component {
  static propTypes = {
    deductionTypes: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.DeductionTypeList}>
        {
          mapValues(this.props.deductionTypes, (deductionType) => {
            return (<DeductionTypeListItem
              name={deductionType.name}
              percentage={deductionType.percentage}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}