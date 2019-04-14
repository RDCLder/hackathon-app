import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserInfo from '../../UserInfo';

const blockstack = require('blockstack');



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
    blockstack.signUserOut('/')
  }

  render() {
    return (
      <Row style={styles.navbarStyle}>
        <Col xs={1} className="my-auto" />
        <Col className="my-auto">
          <Link style={styles.navbarStyle} to="/">
            <h2>App Name</h2>
          </Link>
        </Col>
        <Col style={{display: !this.state.isSignedIn ? 'none' : 'block' }} className="my-auto">
          <Link style={styles.navbarStyle} to="/create">
            <h4>CreateDeck</h4>
          </Link>
        </Col>
        <Col style={{display: !this.state.isSignedIn ? 'none' : 'block' }} className="my-auto">
          <Link style={styles.navbarStyle} to="/all">
            <h4>AllDecks</h4>
          </Link>
        </Col>
        <Col className="my-auto">
          <div style={{display: this.state.isSignedIn ? 'none' : 'block' }}>
            <Button style={styles.button} className="mt-3" onClick={this.handleSignIn}>
              Sign-in with Blockstack
            </Button>
          </div>
          <div style={{display: !this.state.isSignedIn ? 'none' : 'block' }}>
          <Row>
            <Col className = "mt-1" >
              <UserInfo user={this.state.person} />
            </Col>
            <Col>
              <Button style={styles.button} onClick={this.handleSignOut}>
                Sign-out
              </Button>            
            </Col>
          </Row>
          </div>
        </Col>
        <Col xs={1} className="my-auto" />
      </Row>
    );
  }
}

export default NavBar;

const styles = {
  navbarStyle: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Verdana, Geneva, sans-serif",
    height: '60px',
    width: '100%',
    margin: '0',
  },
  button: {
    backgroundColor: 'black',
    border: 'none',
    height: '100%'
  },
}
