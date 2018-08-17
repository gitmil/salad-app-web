import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        // const accountName = this.props.user.email;
        return(
            <div>
                { this.props.user
                ? <NavigationAuth/>
                : <NavigationNonAuth/>
                }
            </div>
        )
    }
}

const NavigationAuth = props => {
    // const { accountName } = props;
    // const name = accountName && accountName.split('@')[0];
    return (
        <div className='nav'>
            <Link className='nav-link' to='/Home'>Home</Link>
            <Link className='nav-link' to='/Account'>Account</Link>
            <Link className='nav-link' to='/Admin'>Welcome xxx!</Link>
        </div>
    )
}

const NavigationNonAuth = () => {
    return (
        <div>
            <Link to='/'></Link>
            <Link to='/SignUp'></Link>
            <Link to='/ForgetPassword'></Link>
        </div>
    )
}


export default Navbar;
