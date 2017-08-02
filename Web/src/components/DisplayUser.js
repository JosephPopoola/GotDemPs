import React from 'react'
import MansPContainer from '../containers/MansPContainer'
import update from 'immutability-helper';

class DisplayUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: Object.assign({}, this.props.User)
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
          <button type="submit">SAVE USERNAME</button>
          </form>
        <MansPContainer /> 
        <button>SAVE whole shit</button> 
      
    </div>
    )
  }
}
export default DisplayUser;