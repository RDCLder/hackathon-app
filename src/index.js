import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

// View Components
import CreateDeck from "./components/views/CreateDeck";
import AllDecks from "./components/views/AllDecks";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/create" component={CreateDeck.js} />
        <Route path="/all" component={AllDecks.js} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
