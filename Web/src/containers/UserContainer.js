import { connect } from 'react-redux'
import * as actions from '../actions'
import DisplayUser  from '../components/DisplayUser'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    User: Object.assign({}, state.user)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SaveUser: (user) => {
      dispatch(actions.setUserName(user.name))
    },
    SaveMansP: (user) => {
      dispatch(actions.saveMansP(user))
    }
  }
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUser)

export default UserContainer