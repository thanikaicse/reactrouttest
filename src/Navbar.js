//Navbar.js File
import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

export default class Navbar extends React.Component{
    render(){
    return(
        <div >
            <Link to="/about" >
                <span className="chip">About</span>
            </Link>
            <Link to="/shop">
                <span className="chip">Shop</span>
            </Link>
        </div>
    )
    }
}
