import React from 'react'
import PropTypes from 'prop-types'
import DisplayMansP from './DisplayMansP'

class MansPList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MansPs: this.props.User.mansPs
    }
  }

  render(){
      return(
          <div>
            {
              this.state.MansPs.map(function(mansP,index){
                return (<DisplayMansP
                  key={index}
                  MansP={mansP}
                  />);
              }, this)
            }
            <button onClick={this.props.AddMansP}>Add A Muhfuggin P FOR MAN</button>
          </div>
      )
  };
  static propTypes = {
      mansPs: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            annualAmount: PropTypes.number.isRequired,
            monthlyAmount: PropTypes.number.isRequired,
            expenditures: PropTypes.arrayOf(
              PropTypes.shape({
                name: PropTypes.string.isRequired,
                value: PropTypes.number.isRequired
              }).isRequired),
            disposableIncome: PropTypes.number.isRequired
          }).isRequired)
  }
}

export default MansPList;