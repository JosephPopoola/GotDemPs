// handles all logic to get data and passes it to DisplayMansPlist
import { connect } from 'react-redux'
import * as actions from '../actions'
import MansPList  from '../components/MansPList'

const mapStateToProps = (state, ownProps) => {
  return {
    User: Object.assign({}, state.user)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    AddMansP: () => {
      dispatch(actions.addMansP())
    }
  }
}

const MansPContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MansPList)

export default MansPContainer