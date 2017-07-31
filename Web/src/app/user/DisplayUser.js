import React, { Component } from 'react';
import 'DisplayUser.css';
import * as actions from '../actions';
import { connect } from 'react-redux';

import MansPList from './MansPList';

class DisplayUser extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    static currentUser = this.props.user;

    render() {
        return (
            <div className="user">
                <div className="user-header">
                    <h3>Current User: {currentUser.name}</h3>
                </div>
                <ul>
                    <MansPList mansPs={currentUser.mansPs} {...this.props.actions} />
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(DisplayUser);