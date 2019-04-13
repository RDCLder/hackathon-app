import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import CardforModal from './CardforModal'

class DeckModal extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var cards = this.props.deckinfo.cards.map(card=>{
            return <CardforModal cardinfo = {card}/>
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
                        {this.props.deckinfo.deckName}
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cards}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


DeckModal.propTypes = {

};

export default DeckModal
