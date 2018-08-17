import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMember } from '../actions';
import Card from '../components/Card';
import fire from '../config/Fire';
import ApolloClient from './apolloClient';

class Home extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      name: ''
    };
  }
  addOneMember(event) {
    event.preventDefault();
    const { name } = this.state;
    this.props.addMember(name);
  }
  renderMembers() {
    const { members }  = this.props;
    return(
      <ul className="list-group col-sm-8 mt-2">
        {
          members.map((member, i) => {
            return (
              <li key={i} className="list-group-item">
                <div className="list-item">
                  <Card member={ member }></Card>
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }
  logOut() {
    const {
      history
    } = this.props;
    fire.auth().signOut().then(function () {
      history.push('/');
    })
    .catch(error => {
      this.setState({error: error});
    });
  }
  render() {
    const { members }  = this.props;
    return (
      <div className="App">
        <div className="title">Add Salad Bar Members
          <div className="form-inline">
            <div className="count-inline">
              <span>count:</span> &nbsp;
              <em>{members.length}</em> &nbsp;
            </div>
            <div className="form-group mr-2">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="userName"
                  onChange={(event) => this.setState({name: event.target.value})}
                />&nbsp;
                 <button
                  type="button"
                  className="btn btn-success"
                  onClick={ (event) => this.addOneMember(event) }
                >Add</button>
              </form>
            </div>
          </div>
        </div>
        &nbsp;{ this.renderMembers() }
        &nbsp;<button onClick={this.logOut}>LogOut</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    members: state
  }
}


export default connect(mapStateToProps, { addMember })(Home);
