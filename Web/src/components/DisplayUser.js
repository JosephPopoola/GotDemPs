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
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.state = {
      User: Object.assign({}, nextProps.User)
    }
    console.log(this.state)
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

  handleSaveClick(e){
    this.props.SaveMansP(this.state.User);
  }

  render (){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="User Name" 
            value={this.state.User.name} 
            onChange={this.handleInputChange} />
            <button type="submit">SAVE USERNAME</button>
            </form>
          <MansPContainer /> 
          <button onClick={this.handleSaveClick}>SAVE whole shit</button> 
        
      </div>
      )
    }
}
export default DisplayUser;