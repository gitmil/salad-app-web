import React, {Component} from 'react';
import fire from '../config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: 'xxx@gmail.com',
            password: '123456'
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {}).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div style={styles.login}>
                <div  className="main-form">
                    <div className="form-group">
                        <label>Salad Bar Login</label>
                        <input value={ this.state.email } onChange={ this.handleChange } type="email" name="email"
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <input value={ this.state.password } onChange={ this.handleChange } type="password"
                            name="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" />
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Forgot My Password</small>
                    <button type="submit" onClick={ this.login } className="btn btn-primary">Login to Account</button>
                </div>
            </div>
        );
    }
}

const styles = {
    login: {
        background: "#e2e4f6",
    }
}

export default Login;
