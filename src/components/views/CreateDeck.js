import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import AddCard from "../partials/AddCard";
<<<<<<< HEAD
import { putFile } from "blockstack";

const decks = "decks.json";
=======
import { putFile, getFile } from "blockstack";
const decks = "allDecks.json";
>>>>>>> master

class CreateDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allDecks: {},
      deckName: "",
      deck: {},
      alertMessage: null,
      alertErrorShow: false,
      alertSuccessShow: false
    };
  }

<<<<<<< HEAD
=======
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const options = { decrypt: false };
    getFile("allDecks.json", options).then(file => {
      const allDecks = JSON.parse(file || "{}");
      this.setState({ allDecks: allDecks });
    });
  }

>>>>>>> master
  changeDeckName(e) {
    this.setState({
      deckName: e.target.value
    });
  }

  updateDeck(card) {
    let newDeck = { ...this.state.deck };
    newDeck[card.word] = card;
    this.setState({ deck: newDeck });
  }

  deleteFromDeck(word) {
    let newDeck = { ...this.state.deck };
    delete newDeck[word];
    this.setState({ deck: newDeck });
  }

  addDeck() {
<<<<<<< HEAD
    // const deckNames = Object.keys(allDecks);
    const deckNames = [];
=======
    const deckNames = Object.keys(this.state.allDecks);
>>>>>>> master

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
      const options = { encrypt: false };
<<<<<<< HEAD

      let deckName = this.state.deckName;
      let deck = this.state.deck;
      let newDeck = { deckName, deck };
      putFile("decks.json", JSON.stringify(newDeck), options);
=======
      const deckName = this.state.deckName;
      let newDecks = { ...this.state.allDecks };
      newDecks[deckName] = this.state.deck;
      putFile("allDecks.json", JSON.stringify(newDecks), options);
>>>>>>> master
      this.setState({
        alertSuccessShow: true,
        alertMessage: "Deck saved!",
        deckName: "",
<<<<<<< HEAD
        alertShow: false
=======
        deck: {}
>>>>>>> master
      });
    }

    // Closes error alert after 2 seconds
    setTimeout(() => {
      this.setState({
        alertErrorShow: false,
        alertSuccessShow: false,
        alertMessage: ""
      });
    }, 2000);
  }

  render() {
    const deck = Object.values(this.state.deck).map(card => (
      <Card key={card.word}>
        <Card.Body>
          <Card.Title>
            {card.word}
            <i
              className="fas fa-times cardButton"
              onClick={() => this.deleteFromDeck(card.word)}
            />
            <i className="fas fa-pencil-alt cardButton" />
          </Card.Title>
          <Card.Text className="cardText">{card.text}</Card.Text>
        </Card.Body>
      </Card>
    ));

    return (
      <Container fluid="true">
<<<<<<< HEAD
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={cd.title}>Create a new deck:</h2>
            </Col>
            <Col md={5}>
              <Alert
                variant="danger"
                show={this.state.alertShow}
                className="alert"
              >
                <Alert.Heading>
                  Error
                  <i
                    className="fas fa-times alertDismiss"
                    onClick={() => this.setState({ alertShow: false })}
                  />
                </Alert.Heading>
                <p>{this.state.alertMessage}</p>
              </Alert>
            </Col>

            <Col xs={4} md={1}>
              <AddCard
                style={cd.plus}
                deck={this.state.deck}
                update={card => this.updateDeck(card)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={11} style={cd.input}>
              <input style={cd.input} block />
            </Col>
          </Row>
          <Row>
            <Col md={11} style={cd.text}>
              Type in the deck name
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button style={cd.savedeck} onClick={() => this.addDeck()} block>
                SAVE DECK
              </Button>
            </Col>
          </Row>
        </Container>

        <Row>{deck}</Row>
=======
        <Row>
          <h2 style={styles.title}>Create New Deck</h2>
        </Row>

        <Row>
          <Col>
            <input 
              onChange={e => this.changeDeckName(e)} 
              style={styles.input}
              block
            />
          </Col>
          <Col xs={2}>
            <Button variant="primary"
              onClick={() => this.addDeck()}
            >
              SAVE DECK
            </Button>
          </Col>
        </Row>

        <Row>{deck}</Row>

        <AddCard
          deck={this.state.deck}
          update={card => this.updateDeck(card)}
          style={styles.plus}
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

        <Alert
          variant="success"
          show={this.state.alertSuccessShow}
          className="alert"
        >
          <Alert.Heading>
            Success
            <i
              className="fas fa-times alertDismiss"
              onClick={() => this.setState({ alertSuccessShow: false })}
            />
          </Alert.Heading>
          <p>{this.state.alertMessage}</p>
        </Alert>
>>>>>>> master
      </Container>
    );
  }
}

<<<<<<< HEAD
// CSS Object
const colorscheme = ["#207b8d", "#00202e", "#527a9c", "#3f5d65", "#335a78"];

const cd = {
=======
const colorscheme = ["#207b8d", "#00202e", "#527a9c", "#3f5d65", "#335a78"];

const styles = {
>>>>>>> master
  title: {
    textAlign: "left",
    color: "#94dfff",
    fontWeight: "300",
    fontSize: "2em"
  },
  plus: {
    color: colorscheme[1]
  },
<<<<<<< HEAD
  savedeck: {
    alignSelf: "center",
    padding: "1em"
  },
=======
>>>>>>> master
  text: {
    borderTop: "3px dashed grey",
    marginTop: "0.5em",
    fontSize: "1em",
    color: colorscheme[1]
  },
  input: {
    border: "none"
  }
};
<<<<<<< HEAD
=======

// <i className="fas fa-save" />
// <i className="fas fa-trash" />
// <i className="fas fa-times" />
>>>>>>> master

export default CreateDeck;
