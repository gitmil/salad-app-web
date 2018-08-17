import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMember } from '../actions';

class Card extends Component{
	render() {
		return (
			<div>   
				<div>{ this.props.member.username }</div>
				<div><em>time</em></div>
				<button
					type="button" 
					className="btn btn-danger"
					onClick={ () => this.props.deleteMember(this.props.member.username) }
				>
					Remove
				</button>
			</div>
		)
	}
}

export default connect(null, { deleteMember })(Card);
