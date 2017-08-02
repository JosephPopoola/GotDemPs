import { connect } from 'react-redux'
import * as actions from '../actions'
import DisplayUser  from '../components/DisplayUser'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log('state in user con')
  return {
    User: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SaveUser: (user) => {
      dispatch(actions.setUserName(user.name))
    }
  }
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUser)

export default UserContainer