import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
class Header extends Component {
    render() { 
        return ( 
            <div> 
                <Link to="/">홈</Link> 
                <Link to="/dashboard">Dashboard</Link> 
                <Link to="/about_us">About us</Link> 
                </div> ); } } 
export default Header;

