import React from 'react'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'
import AddCard from '../partials/AddCard'

class CreateDeck extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      deckName: '',
      deck: [],
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
    this.setState({
      deck: this.state.deck.concat(card)
    })
  }

  deleteFromDeck (word) {
    let newDeck = this.state.deck.slice()
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
    // const deck = this.state.deck.map(card => (
    // 	<Card id={card.word}
    // 		word={card.word}
    // 		text={card.text}
    // 		delete={word => this.deleteFromDeck(word)}
    // 	/>

    const deck = this.state.deck.map(card => (
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
    const colorscheme = ['#cca0af',
      '#d9eeb6',
      '#c6c0f7',
      '#94dfff',
      '#ffdcf6']
    const cd = {

      title: {
        textAlign: 'left',
        color: colorscheme[1],
        fontWeight: '300'
      },
      plus: {
        backgroundColor: colorscheme[1]
      }
    }

    return (
      <Container fluid='true'>
        <Container>
          <Row>
            <Col xs={12} md={11}>
              <h2 style={cd.title}>Create a new deck:</h2>
            </Col>
            <Col xs={4} md={1} >
              <AddCard style={cd.plus}
                deck={this.state.deck}
                update={card => this.updateDeck(card)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>space holder for input</Col>
            <Col md={4}>whatever</Col>
          </Row>
          <Row>
            <Button variant={colorscheme[2]} onClick={() => this.addDeck()}>
              SAVE DECK
            </Button>
          </Row>
        </Container>

        <Row>{deck}</Row>

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

      </Container>
    )
  }
}

// <i className="fas fa-save" />
// <i className="fas fa-trash" />
// <i className="fas fa-times" />

export default CreateDeck
