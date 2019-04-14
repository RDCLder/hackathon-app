import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import NavBar from "./components/partials/NavBar";
import UserInfo from "./UserInfo";

const blockstack = require("blockstack");

class App extends Component {
  constructor(props) {
    super(props);

    let isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: undefined
    };

    if (isSignedIn) {
      this.loadPerson();
    }

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  checkSignedInStatus() {
    if (blockstack.isUserSignedIn()) {
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin;
      });
      return false;
    }
  }

  loadPerson() {
    let username = blockstack.loadUserData().username;
    blockstack.lookupProfile(username).then(person => {
      this.setState({ person });
    });
  }

  handleSignIn(event) {
    event.preventDefault();
    blockstack.redirectToSignIn();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div style={{ display: this.state.isSignedIn ? "none" : "block" }}>
          <button onClick={this.handleSignIn}>Sign-in with Blockstack</button>
        </div>

        <div style={{ display: !this.state.isSignedIn ? "none" : "block" }}>
          {/* <UserInfo user={this.state.person} /> */}
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  box: {
    border: "solid 1px black"
  }
};

export default App;

