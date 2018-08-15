import React, {Component} from 'react';
import fire from '../config/Fire';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    fire.auth().createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({error: error});
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const {
      history,
    } = this.props;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <div>
        <div  className="main-form">
            <div className="form-group">
                <h3>Salad Bar SignUp</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <input
          className="form-control"
          value={username}
          onChange={event => this.setState({username: event.target.value})}
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={email}
          onChange={event => this.setState({email: event.target.value})}
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={passwordOne}
          onChange={event => this.setState({passwordOne: event.target.value})}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={passwordTwo}
          onChange={event => this.setState({passwordTwo: event.target.value})}
          type="password"
          placeholder="Confirm Password"
        />
      </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign Up
        </button>
        { error && <p>{error.message}</p> }
      </form>
      </div>
    </div>
  </div>
  );
  }
}

export default SignUp;
