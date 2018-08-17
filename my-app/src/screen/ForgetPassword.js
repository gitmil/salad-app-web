import React, {Component} from 'react';
import fire from '../config/Fire';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  email: '',
  error: null
};

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne
    } = this.state;

    const {
      history
    } = this.props;

    fire.auth().sendPasswordResetEmail(email)
      .then(authUser => {
        history.push('/');
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({error: error});
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error
    } = this.state;

    const isInvalid = email === '';
    return (
      <div>
        <div  className="main-form">
            <div className="form-group">
                <label>Forget Password</label>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          value={email}
          onChange={event => this.setState({email: event.target.value})}
          type="text"
          placeholder="Email Address"
        />
      </div>
      <button className="btn btn-primary" disabled={isInvalid} type="submit">
        Submit
      </button>
      { error && <p>{error.message}</p> }
      </form>
      </div>
    </div>
  </div>
  );
  }
}

export default ForgetPassword;
