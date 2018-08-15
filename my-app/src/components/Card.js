import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMember } from '../actions';

class Card extends Component{
    render() {
        return (
            <div>   
                <div>{ this.props.member.name }</div>
                <div><em>time</em></div>
                <button
                    type="button" 
                    className="btn btn-danger"
                    onClick={ () => this.props.deleteMember(this.props.member.name) }
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

export default connect(mapStateToProps, { deleteMember })(Card);
