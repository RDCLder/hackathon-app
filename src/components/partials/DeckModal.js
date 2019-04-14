import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import CardforModal from './CardforModal'

class DeckModal extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var cards = this.props.deck.map(card=>{
            return <CardforModal key = {card} cardInfo = {card}/>
        })

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.deckName}
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cards}
                </Modal.Body>
                <Modal.Footer>
                    <Button style={styles.button} onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
const styles = {
    button:{
        backgroundColor: 'rgb(50,50,50)',
        color: 'white',
        border: 'none'
    }
}

DeckModal.propTypes = {

};

export default DeckModal
