import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap'

class Deck extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Card>
                <Card.Body>{this.props.deckinfo.cards.length} terms</Card.Body>
                <Card.Body>{this.props.deckinfo.deckName}</Card.Body>
            </Card>
        );
    }
}


Deck.propTypes = {
    
};

export default Deck
