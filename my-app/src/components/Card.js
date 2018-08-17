import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMember } from '../actions';

class Card extends Component {
    render() {
        return (
            <div>
              { this.props.member.username } &nbsp;
              <em>{new Date().toLocaleString()}</em>&nbsp;
              <button
               type="button"
               className="btn btn-danger"
               onClick={ () => this.props.deleteMember(this.props.member.username) }
              >
              X
              </button>
            </div>
        )
    }
}

export default connect(null, { deleteMember })(Card);
