import React from 'react'
import DisplayMansP from './DisplayMansP'

class MansPList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MansPs: Object.assign([{}], this.props.User.mansPs)
    }
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      MansPs: Object.assign([{}], nextProps.User.mansPs)
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
          </div>
      )
  };
}

export default MansPList;