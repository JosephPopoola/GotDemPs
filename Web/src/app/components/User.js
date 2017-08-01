//this will do all the redux stuff and pass down the necessary functions to the display layers below
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
            disposableIncome: -554
        }],
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    User: fakeState.User
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SaveUser: () => {
      dispatch(actions.setUserName('Reggie'))
    }
  }
}

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUser)

export default User