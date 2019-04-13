import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'


ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {App}/>
                <Route exact path = '/home' component = {Home}/>
            </Switch>
        </BrowserRouter>
    
    , document.getElementById('root'));

registerServiceWorker();
