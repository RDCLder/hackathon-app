import React from 'react'
import { Container, Row, Modal, Button, Alert } from 'react-bootstrap'

class AddCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false,
      word: '',
      text: '',
      alertMessage: null,
      alertShow: false,
      pictures: [] 
    };

    this.onDrop = this.onDrop.bind(this);
  }

  changeWord (e) {
    this.setState({ word: e.target.value })
  }

  changeText (e) {
    this.setState({ text: e.target.value })
  }

  handleShow () {
    this.setState({ show: true })
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleSubmit () {
    const words = Object.keys(this.props.deck)

    // Error checks for empty word/text, long word/text, or existing word
    if (this.state.word === '') {
      this.setState({
        alertMessage: "The word can't be blank!",
        alertShow: true
      })
    } else if (this.state.text === '') {
      this.setState({
        alertMessage: "The text can't be blank!",
        alertShow: true
      })
    } else if (this.state.word.length > 40) {
      this.setState({
        alertMessage: 'The word cannot exceed 40 characters!',
        alertShow: true
      })
    } else if (this.state.word.length > 200) {
      this.setState({
        alertMessage: 'The text cannot exceed 200 characters!',
        alertShow: true
      })
    } else if (words.includes(this.state.word)) {
      this.setState({
        alertMessage: `${this.state.word} has already been used!`
      })
      this.setState({ alertShow: true })
    } else {
      this.props.update({
        word: this.state.word,
        text: this.state.text
      });
      this.setState({
        show: false,
        alertShow: false,
        word: "",
        text: ""
      });
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
  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
  }

  render () {
    return (
      <React.Fragment>
        <Button
          style={Object.assign({}, styles.floatingButton, styles.addButton)}
          
          onClick={() => this.handleShow()}
          // style={[styles.floatButton, styles.addButton]}
        >
          <i className='fas fa-plus' />
        </Button>

        <Modal
          show={this.state.show}
          onHide={()=>{this.handleClose()}}
          centered
          size='lg'
        >
          <Modal.Header>
            <Modal.Title>Add Card</Modal.Title>
            <i
              className='fas fa-times modalDismiss'
              onClick={() => this.handleClose()}
            />
          </Modal.Header>
          <Modal.Body>
            <Container id='AddCardModalContainer'>
              <Row>
                <h5>Word</h5>
              </Row>
              <Row className='mb-4'>
                <textarea
                  style={styles.width100}
                  type="text"
                  placeholder="Word goes here"
                  rows="1"
                  onChange={e => this.changeWord(e)}
                />
              </Row>
              <Row>
                <h5>Text</h5>
              </Row>
              <Row>
                <textarea
                  style={styles.width100}
                  type="text"
                  placeholder="Text goes here"
                  rows="5"
                  onChange={e => this.changeText(e)}
                />
              </Row>

            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button style={styles.whiteButton} onClick={() => this.handleSubmit()}>
              Submit
            </Button>
            <Button style={styles.blackButton} onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

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
      </React.Fragment>
    )
  }
}

const styles = {
  floatingButton: {
    position: 'fixed',
    background: 'black',
    color: 'white',
    right: '30px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    textAlign: 'center',
    boxShadow: '2px 2px 4px #999',
    fontSize: '30px',
    zIndex: '2',
    border: 'none',
  },
  addButton: {
    bottom: "30px",
  },
  blackButton: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid black'
  },
  whiteButton: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black'
  },
  width100: {
    width: "100%"
  },
  hover: {
    color: 'grey',
  }
};

export default AddCard;
