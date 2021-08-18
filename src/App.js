//App.js File
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Shop from './Shop';
import './listing.css';

//all classNames beginning with w3-* are from w3.css framework available on w3.schools.com
export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                    <Navbar />
                    <Switch>
                        <Route path="/about" exact component={About}/>
                        <Route path="/shop" exact component={Shop}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}