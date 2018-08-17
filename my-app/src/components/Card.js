import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMember } from '../actions';

class Card extends Component{
    render() {
        return (
            <div>
                { this.props.member.name } &nbsp;
                <em>{new Date().toLocaleString()}</em>&nbsp;
                <button
                 type="button"
                 className="btn btn-danger"
                 onClick={ () => this.props.deleteMember(this.props.member.name) }
                >
                X
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("state----" + state)
    return {
      reminders: state
    }
}

export default connect(mapStateToProps, { deleteMember })(Card);
