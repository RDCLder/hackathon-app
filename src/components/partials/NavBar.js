import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  componentDidMount() {}

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
        <Col xs={1} className="my-auto" />
      </Row>
    );
  }
}

export default NavBar;
