import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import AddCard from "../partials/AddCard";
import { putFile, getFile } from 'blockstack';
const decks = 'allDecks.json'

class CreateDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allDecks: {},
      deckName: "",
      deck: {},
      alertMessage: null,
      alertShow: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const options = { decrypt: false }
    getFile('allDecks.json', options)
    .then(file => {
      const allDecks = JSON.parse(file || '{}');
      this.setState({ allDecks: allDecks });
    })
  }

  changeDeckName(e) {
    this.setState({
      deckName: e.target.value
    });
  }

  updateDeck(card) {
    let newDeck = {...this.state.deck};
    newDeck[card.word] = card;
    this.setState({ deck: newDeck });
  }

  deleteFromDeck(word) {
    let newDeck = {...this.state.deck};
    delete newDeck[word];
    this.setState({ deck: newDeck });
  }

  addDeck() {
		const deckNames = Object.keys(this.state.allDecks);

    // Error checks for empty name, name over 40 characters, or existing name
    if (this.state.deckName === "") {
      this.setState({
        alertMessage: "The deck name can't be empty!",
        alertShow: true
      });
    } else if (this.state.deckName.length > 40) {
      this.setState({
        alertMessage: "The deck name can't exceed 40 characters!",
        alertShow: true
      });
    } else if (deckNames.includes(this.state.deckName)) {
      this.setState({
        alertMessage: "The deck name is already taken!",
        alertShow: true
      });
    } else {
      // Update database
      const options = { encrypt: false }
      const deckName = this.state.deckName;
      let newDecks = {...this.state.allDecks};
      newDecks[deckName] = this.state.deck;
      putFile('allDecks.json', JSON.stringify(newDecks), options);
      this.setState({
        deckName: "",
        alertShow: false
      });
    }


    // Closes error alert after 2 seconds
    if (this.state.alertShow === true) {
      setTimeout(() => {
        this.setState({
          alertShow: false,
          alertMessage: ""
        });
      }, 2000);
    }
  }

  render() {
    // const deck = this.state.deck.map(card => (
		// 	<Card id={card.word} 
		// 		word={card.word} 
		// 		text={card.text}
		// 		delete={word => this.deleteFromDeck(word)}
		// 	/>

			const deck = Object.values(this.state.deck).map(card => (
				<Card key={card.word}>
					<Card.Body>
							<Card.Title>
									{card.word}
									<i className="fas fa-times cardButton"
											onClick={() => this.deleteFromDeck(card.word)}
									/>
									<i className="fas fa-pencil-alt cardButton"
									/>
							</Card.Title>
							<Card.Text className="cardText">
									{card.text}
							</Card.Text>
					</Card.Body>
			</Card>
		));

    return (
      <Container fluid="true">

        <Row>
          <h3>Create New Deck</h3>
        </Row>

        <Row>
          <Col>
            <input onChange={e => this.changeDeckName(e)}></input>
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
        />

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

      </Container>
    );
  }
}

// <i className="fas fa-save" />
// <i className="fas fa-trash" />
// <i className="fas fa-times" />

export default CreateDeck;
