import React from 'react'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'
import AddCard from '../partials/AddCard'

class CreateDeck extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      deckName: '',
      deck: {},
      alertMessage: null,
      alertShow: false
    }
  }

  changeDeckName (e) {
    this.setState({
      deckName: e.target.value
    })
  }

  updateDeck (card) {
    let newDeck = { ...this.state.deck }
    newDeck[card.word] = card
    this.setState({ deck: newDeck })
  }

  deleteFromDeck (word) {
    let newDeck = { ...this.state.deck }
    delete newDeck[word]
    this.setState({ deck: newDeck })
  }

  addDeck () {
    // const deckNames = Object.keys(allDecks);
    const deckNames = []

    // Error checks for empty name, name over 40 characters, or existing name
    if (this.state.deckName === '') {
      this.setState({
        alertMessage: "The deck name can't be empty!",
        alertShow: true
      })
    } else if (this.state.deckName.length > 40) {
      this.setState({
        alertMessage: "The deck name can't exceed 40 characters!",
        alertShow: true
      })
    } else if (deckNames.includes(this.state.deckName)) {
      this.setState({
        alertMessage: 'The deck name is already taken!',
        alertShow: true
      })
    } else {
      // Update database
      this.setState({
        deckName: '',
        alertShow: false
      })
    }

    // Closes error alert after 2 seconds
    if (this.state.alertShow === true) {
      setTimeout(() => {
        this.setState({
          alertShow: false,
          alertMessage: ''
        })
      }, 2000)
    }
  }

  render () {
    const deck = Object.values(this.state.deck).map(card => (
      <Card key={card.word}>
        <Card.Body>
          <Card.Title>
            {card.word}
            <i className='fas fa-times cardButton'
              onClick={() => this.deleteFromDeck(card.word)}
            />
            <i className='fas fa-pencil-alt cardButton'
            />
          </Card.Title>
          <Card.Text className='cardText'>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
    ))

    // ======= this is css style object=============
    const colorscheme =
    ['#207b8d',
      '#00202e',
      '#527a9c',
      '#3f5d65',
      '#335a78']

    const cd = {

      title: {
        textAlign: 'left',
        color: '#94dfff',
        fontWeight: '300',
        fontSize: '2em'

      },
      plus: {
        color: colorscheme[1]
      },
      savedeck: {
        // width: '80%',
        alignSelf: 'center',
        padding: '1em'

      },
      text: {
        borderTop: '3px dashed grey',
        marginTop: '0.5em',
        fontSize: '1em',
        color: colorscheme[1]
      },
      input: {
        border: 'none'
      }

    }

    return (
      <Container fluid='true'>
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={cd.title}>Create a new deck:</h2>
            </Col>
            <Col md={5}>
              <Alert
                variant='danger'
                show={this.state.alertShow}
                className='alert'
              >
                <Alert.Heading>
            Error
                  <i
                    className='fas fa-times alertDismiss'
                    onClick={() => this.setState({ alertShow: false })}
                  />
                </Alert.Heading>
                <p>{this.state.alertMessage}</p>
              </Alert>
            </Col>

            <Col xs={4} md={1} >
              <AddCard style={cd.plus}
                deck={this.state.deck}
                update={card => this.updateDeck(card)}
              />
            </Col>

          </Row>
          <Row>
            <Col md={11} style={cd.input}><input style={cd.input} block /></Col>
          </Row>
          <Row>
            <Col md={11} style={cd.text}>Type in the deck name</Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button style={cd.savedeck}
                onClick={() => this.addDeck()} block>
              SAVE DECK
              </Button>
            </Col>
          </Row>
        </Container>

        <Row>{deck}</Row>

      </Container>
    )
  }
}

// <i className="fas fa-save" />
// <i className="fas fa-trash" />
// <i className="fas fa-times" />

export default CreateDeck
