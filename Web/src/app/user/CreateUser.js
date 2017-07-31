import React, { Component } from 'react';
import 'CreateUser.css';
import * as actions from '../actions';
import { connect } from 'react-redux';

class CreateUser extends Component {
    render() {
        return (
            <div className="user">
                <div className="user-header">
                    <h3>New User</h3>
                </div>
                <input type="text" placeholder="Add user name here"/>
                <button>Assign Deduction</button>
                <button>Add Mans P</button>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({

});

// mapDispatchToProps = dispatch => {
//     return (

//     );
// }

export default connect(mapStateToProps)(CreateUser);