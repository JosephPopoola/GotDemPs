import { connect } from 'react-redux'
import * as actions from '../../actions'
import DisplayUser  from './DisplayUser'

const fakeState = {
    User: {
        name: 'George',
        mansPs: [{
            name: 'Ps1',
            annualAmount: 3,
            monthlyAmount: 4,
            expenditures: [{
                name: 'whip',
                value: 100
            }],
            disposableIncome: 12
        }],
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    User: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SaveUser: (user) => {
      dispatch(actions.setUserName(user.name),
      dispatch(actions.addMansPsToUser(fakeState.User.mansPs[0])))
    }
  }
}

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUser)

export default User