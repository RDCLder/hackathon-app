import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route exact path="/allDeck" component={AllDeck} /> */}
            </Switch>
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
