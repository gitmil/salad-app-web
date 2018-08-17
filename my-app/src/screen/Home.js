import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMember, getMember } from '../actions';
import Card from '../components/Card';
import fire from '../config/Fire';

class Home extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: ''
    };
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    this.props.getMember(() => this.forceUpdate());
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
        { members.length > 0 &&
          members.map((member, i) => {
            return (
              <li key={i} className="list-group-item">
                <div className="list-item">
                  <Card member={member}></Card>
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
        <div className="title">&nbsp; Add Salad Bar Members
          <div className="form-inline">
            <div className="count-inline">
              &nbsp;&nbsp;<span>count:</span> &nbsp;
              <em>{members.length}</em> &nbsp;
            </div>
            <div className="form-group mr-2">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Notes"
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
        &nbsp;&nbsp;<button onClick={this.logOut}>LogOut</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    members: state && state.members ? state.members : [],
  }
}


export default connect(mapStateToProps, { addMember, getMember })(Home);
