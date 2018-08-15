import React, { Component } from 'react';
import fire from './config/Fire';
import Login from './screen/Login';
import Home from './screen/Home'
import Admin from './screen/Admin';
import Account from './screen/Account';

import { 
    BrowserRouter as Router, 
    Route
  } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                // "email" : "xxx@gmail.com",
                // "password": "123456"
            },
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
             //   localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
              //  localStorage.removeItem('user');
            }
        });
    }
    render() {
        return(
            <Router>
            <div className="App">
              <Navbar user={this.state.user}/>   
              {this.state.user? (<AuthPage/>) : (<Login/>)}          
            </div>
          </Router>
        )
    }
}
const AuthPage = () => {
    return (
        <div>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Admin" component={Admin}/>
            <Route exact path="/Account" component={Account}/> 
        </div> 
    )
}

export default App;