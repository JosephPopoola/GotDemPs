// handles all logic to get data and passes it to DisplayMansPlist
import { connect } from 'react-redux'
import * as actions from '../actions'
import MansPList  from '../components/ExpenditureList'

const mapStateToProps = (state, ownProps) => {
  return {
    Expenditure: Object.assign({}, state.user)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    AddExpenditure: () => {
      dispatch(actions.addExpenditure())
    }
  }
}

const ExpenditureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenditureList)

export default ExpenditureContainer