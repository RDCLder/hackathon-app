import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import DeckPage from "./components/views/DeckPage"

// View Components
import CreateDeck from "./components/views/CreateDeck";
import AllDecks from "./components/views/AllDecks";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/create" component={CreateDeck} />
        <Route path="/all" component={AllDecks} />
        <Route path='/deck/:deckname' component={DeckPage}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);