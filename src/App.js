import React, {Component} from 'react';
import './App.css';

import {Router, Route} from 'react-router';
import LoginForm from './Login';

class App extends Component {
    render() {
        return (
            <Router history={}>
                <Route path="/app/login" component={LoginForm}/>
            </Router>
        );
    }
}

export default App;
