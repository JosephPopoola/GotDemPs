import React from 'react'
import PropTypes from 'prop-types'
import DisplayExpenditure from './DisplayExpenditure'

class ExpenditureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Expenditures: this.props.expenditures
    }
    this.handleNexExpenditureClick = this.handleNexExpenditureClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      Expenditures: Object.assign([{}], nextProps.expenditures)
    }
  }
  
  handleNexExpenditureClick(e){
    e.preventDefault();
    this.props.AddExpenditure(this.props.mansP);
  }

  render(){
      return(
          <div>
            {
              this.state.Expenditures.map(function(expenditure, index){
                return (<DisplayExpenditure
                  key={index}
                  Expenditure={expenditure}
                  />);
              }, this)
            }
            <button onClick={this.handleNexExpenditureClick}>Add New Expenditure</button>
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