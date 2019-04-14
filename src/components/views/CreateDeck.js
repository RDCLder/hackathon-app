import React from "react";
import { Container, Row, Col, Card, Button, Alert, InputGroup, FormControl } from "react-bootstrap";
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
				<Card style={styles.deckCard} key={card.word}>
					<Card.Body style={styles.verticalScroll}>
							<Card.Title className="mb-1">
                <Row>
                  <Col xs={9} >
                    {card.word}									
                  </Col>
                  <Col xs={3}>
                    <Row>
                      <i style={styles.icon} className="fas fa-times cardButton"
                        onClick={() => this.deleteFromDeck(card.word)}
                      />
                      <i style={styles.icon} className="fas fa-pencil-alt cardButton"
                      />
                    </Row>
                  </Col>
                </Row>
									
							</Card.Title>
              <Card.Text style={styles.borderTop} className="cardText">
                  {card.text}
              </Card.Text>
					</Card.Body>
			</Card>
		));

    return (
      <Container fluid="true">

        <Row className="m-auto pt-4"> 
          <h3 style={styles.title}>Create New Deck</h3>
        </Row>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Deck Title </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={e => this.changeDeckName(e)}
                placeholder="Title goes here"
              />
            </InputGroup>
            {/* <input onChange={e => this.changeDeckName(e)}></input> */}
          </Col>
          <Col xs={2}>
            <Button style={styles.button} onClick={() => this.addDeck()}>
              SAVE DECK
            </Button>
          </Col>
        </Row>

        <Row style={styles.greyOverlay}>{deck}</Row>

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
const styles = {
  deckCard : {
    height: '300px',
    width: '300px',
    margin: '20px',
    boxShadow: '1px 1px 2px #999',
  },
  verticalScroll : {
    overflowY: 'scroll',
  },
  icon : {
    marginLeft: '3px',
    marginRight: '3px',
    float: 'right',
  },
  greyOverlay: {
    backgroundColor: 'rgb(200, 200, 200)',
  },
  title : {
    fontFamily: "Verdana, Geneva, sans-serif",
    fontSize: '1.5em',
  },
  button: {
    backgroundColor: 'black',
    border: 'none',
  },
  borderTop : {
    paddingTop: '5px',
    background:'linear-gradient(rgb(225, 225, 225),rgb(240, 240, 240)) top no-repeat',
    backgroundSize:'100% 3px',
  }
}
// <i className="fas fa-save" />
// <i className="fas fa-trash" />
// <i className="fas fa-times" />

export default CreateDeck;
