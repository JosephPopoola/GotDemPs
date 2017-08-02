import React from 'react'
import PropTypes from 'prop-types'
import DisplayExpenditure from './DisplayExpenditure'

//needs to know which mansP it is under to get the corresponding Expenditures
//will maybe need to pass it down from the diplaymansP component?
//not sure need to research

class ExpenditureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Expenditure: this.props.expenditures
    }
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      Expenditure: Object.assign([{}], nextProps.expenditures)
    }
  }
  
  render(){
      return(
          <div>
            {
              this.state.Expenditure.map(function(expenditure){
                return (<DisplayExpenditure
                  key={expenditure.name}
                  Expenditure={expenditure}
                  />);
              }, this)
            }
            {/*<button onClick={this.props.AddExpenditure}>Add New Expenditure</button>*/}
          </div>
      )
  };

  static propTypes = {
      expenditures: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
          }).isRequired)
  }
}

export default ExpenditureList;