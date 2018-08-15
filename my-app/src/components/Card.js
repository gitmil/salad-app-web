import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReminder } from '../actions';

class Card extends Component{
    render() {
        return (
            <div>   
                <div>{ this.props.member.text }</div>
                <div><em>time</em></div>
                <button
                    type="button" 
                    className="btn btn-danger"
                    onClick={ () => this.props.deleteReminder(this.props.member.text) }
                    >Remove</button>
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

export default connect(mapStateToProps, { deleteReminder })(Card);
