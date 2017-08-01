import React from 'react'
import PropTypes from 'prop-types'
import DisplayExpenditure from './DisplayExpenditure'

class ExpenditureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Expenditure: this.props.expenditures
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
                  HandleInputChange={this.props.handleInputChange} 
                  />);
              }, this)
            }
          </div>
      )
  };

  static propTypes = {
      expenditures: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
          }).isRequired),
      handleInputChange: PropTypes.func.isRequired
  }
}

export default ExpenditureList;