import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserInfo from '../../UserInfo';

const blockstack = require('blockstack');

const navbarStyle = {
  backgroundColor: "black",
  color: "white"
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    let isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: undefined
    }

    if(isSignedIn) {
      this.loadPerson();
    }

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }
  checkSignedInStatus() {
    if (blockstack.isUserSignedIn()) {
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin
      })
      return false;
    }
  }

  loadPerson() {
    let username = blockstack.loadUserData().username

    blockstack.lookupProfile(username).then((person) => {
      this.setState({ person })
    })
  }

  handleSignIn(event) {
    event.preventDefault();
    blockstack.redirectToSignIn()
  }

  handleSignOut(event) {
    event.preventDefault();
    blockstack.signUserOut(window.location.href)
  }

  handleSignOut(event) {
    event.preventDefault();
    blockstack.signUserOut('/')
  }

  render() {
    return (
      <Row style={navbarStyle}>
        <Col xs={1} className="my-auto" />
        <Col className="my-auto">
          <Link to="/">
            <h2>App Name</h2>
          </Link>
        </Col>
        <Col className="my-auto">
          <Link to="/create">
            <h4>CreateDeck</h4>
          </Link>
        </Col>
        <Col className="my-auto">
          <Link to="/all">
            <h4>AllDecks</h4>
          </Link>
        </Col>
        <Col className="my-auto">
          <p style={{display: this.state.isSignedIn ? 'none' : 'block' }}>
            <Button className="mt-3" onClick={this.handleSignIn}>
              Sign-in with Blockstack
            </Button>
          </p>
          <p style={{display: !this.state.isSignedIn ? 'none' : 'block' }}>
          <Row className="mt-3">
            <Col >
              <UserInfo user={this.state.person} />
            </Col>
            <Col>
              <Button onClick={this.handleSignOut}>
                Sign-out
              </Button>            
            </Col>
          </Row>
          </p>
        </Col>
        <Col xs={1} className="my-auto" />
      </Row>
    );
  }
}

export default NavBar;
