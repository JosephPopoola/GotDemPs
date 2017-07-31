import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddDeductionType.css';

export default class AddDeductionType extends Component {
  static propTypes = {
    addDeductionType: PropTypes.func.isRequired
  }

  render () {
    return (
        <div>
            <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addDeductionType)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange.bind(this)} />
            <input
            type="number"
            className={classnames('form-control', styles.addDeductionType)}
            placeholder="Type the name of a friend"
            value={this.state.percentage}
            onChange={this.handlePercentageChange.bind(this)} />
            <button type="submit" onClick={this.handleSubmit()}>SAVE</button>
        </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      percentage: this.props.percentage || 0
    };
  }

  handleChange (e) {
    this.setState({ 
        name: e.target.value
    });
  }

  handlePercentageChange (e) {
    this.setState({ 
        percentage: e.target.value 
    });
  }

  handleSubmit () {
      this.props.addDeductionType({name: this.state.name, percentage: this.state.percentage});
      this.setState({ name: '', percentage: 0});
  }

}
