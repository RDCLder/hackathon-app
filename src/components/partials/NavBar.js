import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const blockstack = require('blockstack')

class NavBar extends React.Component {
  componentDidMount() {}

  handleSignOut(event) {
    event.preventDefault();
    blockstack.signUserOut(window.location.href)
  }

  render() {
    return (
      <Row>
        <Col xs={1} className="my-auto" />
        <Col className="my-auto">
          <Link to="/">
            <h2>App Name</h2>
          </Link>
        </Col>
        <Col xs={1} className="my-auto">
          <Link to="/">
            <h4>CreateDeck</h4>
          </Link>
        </Col>
        <Col xs={1} className="my-auto">
          <Link to="/all">
            <h4>AllDecks</h4>
          </Link>
        </Col>
        <Col xs={1} className="my-auto">
          <Link to="/" onClick = {this.handleSignOut.bind(this)}>
            <h4>SignOut</h4>
          </Link>
        </Col>
        <Col xs={1} className="my-auto" />
      </Row>
    );
  }
}

export default NavBar;
