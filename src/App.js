import React, {Component} from 'react';
import './App.css';

import {Router, Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import LoginForm from './Login';
import Layout from './layout/Main';
import Home from './page/Home';

class App extends Component {
    render() {
        return (
            <Router history={BrowserRouter}>
                <Route path="/app/login" component={LoginForm}/>
                <Route path="/app/home" component={Home}/>
                <Route path="/app/dashboard" component={Layout}/>
            </Router>
        );
    }
}

export default App;
