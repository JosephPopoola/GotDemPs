import React from 'react'
import PropTypes from 'prop-types'
import MansPList from './MansPList'
import update from 'immutability-helper';

class DisplayUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: this.props.User,
      MansPs: this.props.User.mansPs
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  let newState = update(this.state, {
    User: { 
      [name]: {$set: value}
    }
  })

  this.setState(newState);
}

onSubmit(e){
  e.preventDefault();
  this.props.SaveUser(this.state.User);
}

render (){
  return(
    <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <input 
          type="text" 
          name="name" 
          placeholder="User Name" 
          value={this.state.User.name} 
          onChange={this.handleInputChange} />
        <MansPList mansPs={this.state.MansPs} />  
        <button type="submit">SAVE</button>
      </form>
    </div>
  )
}

static propTypes = {
    User: PropTypes.shape({
        name: PropTypes.string.isRequired,
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
      }).isRequired,
    SaveUser: PropTypes.func.isRequired
  }
}
export default DisplayUser;