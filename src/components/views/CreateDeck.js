import React from "react";
import { Container, Row, Col, Input, Button } from "react-bootstrap";
import AddCard from "../partials/AddCard";

class CreateDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deckName: "",
      deck: [],
      alertMessage: null,
      alertShow: false
    };
  }

  changeDeckName(e) {
    this.setState({
      deckName: e.target.value
    });
  }

  updateDeck(card) {
    this.setState({
      deck: this.state.deck.concat(card)
    });
  }

  deleteFromDeck(word) {
    let newDeck = this.state.deck.slice();
    delete newDeck[word];
    this.setState({ deck: newDeck });
  }

  addDeck() {
    const deckNames = Object.keys(allDecks);

    // Error checks for empty name, name over 40 characters, or existing name
    if (this.state.deckName === "") {
      this.setState({
        alertMessage: "The deck name can't be empty!",
        alertErrorShow: true
      });
    } else if (this.state.deckName.length > 40) {
      this.setState({
        alertMessage: "The deck name can't exceed 40 characters!",
        alertErrorShow: true
      });
    } else if (deckNames.includes(this.state.deckName)) {
      this.setState({
        alertMessage: "The deck name is already taken!",
        alertErrorShow: true
      });
    } else {
      // Update database
      this.setState({
        deckName: "",
        alertErrorShow: false
      });
    }

    // Closes error alert after 2 seconds
    if (this.state.alertShow === true) {
      setTimeout(() => {
        this.setState({
          alertErrorShow: false,
          alertMessage: ""
        });
      }, 2000);
    }
  }

  render() {
    const deck = this.state.deck.map(card => (
      <Card id={card.word} word={card.word} text={card.text} />
    ));

    return (
      <Container fluid="true">

        <Row>
          <h3>Create New Deck</h3>
        </Row>

        <Row>
          <Col>
            <Input />
          </Col>
          <Col xs={2}>
            <Button variant="primary" onClick={() => this.addDeck()}>
              SAVE DECK
            </Button>
          </Col>
        </Row>

        <Row>{deck}</Row>

        <AddCard
          deck={this.state.deck}
          update={card => this.updateDeck(card)}
          delete={word => this.deleteFromDeck(word)}
        />

        <Alert
          variant="danger"
          show={this.state.alertErrorShow}
          className="alert"
        >
          <Alert.Heading>
            Error
            <i
              className="fas fa-times alertDismiss"
              onClick={() => this.setState({ alertErrorShow: false })}
            />
          </Alert.Heading>
          <p>{this.state.alertMessage}</p>
        </Alert>

      </Container>
    );
  }
}

// <i className="fas fa-save" />
// <i className="fas fa-trash" />
// <i className="fas fa-times" />

export default CreateDeck;
