import React, {Component} from 'react';
import fire from '../config/Fire';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        const {
          history
        } = this.props;
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
          history.push('/Home');
        })
        .catch(error => {
            console.log(error);
        });
    }

    googleSignIn(e) {
        e.preventDefault();
        var provider =  new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <div  className="main-form">
                    <div className="form-group">
                        <h3>Salad Bar Login</h3>
                        <input value={ this.state.email } onChange={ this.handleChange } type="email" name="email"
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <input value={ this.state.password } onChange={ this.handleChange } type="password"
                            name="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" />
                    </div>
                    <Link to='/forgetPassword'>Forget your password?</Link><br />
                    <Link to='/SignUp'>Not a Member? click here to sign up</Link>
                    <button type="submit" onClick={ this.login } className="btn btn-primary">Login</button>
                    <label>OR</label>
                    <button type="submit" onClick={ this.googleSignIn } className="btn btn-primary">Sign in using google account</button>
                </div>
            </div>
        );
    }
}

export default Login;
