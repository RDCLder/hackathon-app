import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeckModal from './DeckModal'

class Deck extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalShow: false };
    }

    render() {

        const link = `/deck/${this.props.deckName}`
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <Card style={styles.card}>
                <Card.Body>{this.props.numberOfCards} term(s)</Card.Body>
                <div style={styles.title}>
                    <Card.Body style = {styles.justifyBetween}>{this.props.deckName}
                        <div style = {styles.buttonContainer}>
                            <Link to={link}>
                                <Button style={Object.assign({}, styles.button, styles.whiteButton)}>Go to Deck</Button>
                            </Link>
                            <Button style={Object.assign({}, styles.button, styles.blackButton)} onClick={() => this.setState({ modalShow: true })}>View Cards</Button>
                        </div>
                    </Card.Body>
                </div>
                <DeckModal 
                deckName = {this.props.deckName}
                deck = {this.props.deck}
                show={this.state.modalShow}
                onHide={modalClose}
                />

            </Card>
        );
    }
}

const styles = {
    card: {
        marginTop: '15px',
        boxShadow: '1px 1px 3px 1px'
    },
    title: {
        fontFamily: "Verdana, Geneva, sans-serif",
        fontWeight: '500',
        fontSize: '1.8em',
        paddingTop: '5px',
        display:'flex',
    },
    button: {
        marginRight: '5px'
    },
    buttonContainer: {
        display: 'inline-block'
    },
    justifyBetween: {
        display:'flex',
        justifyContent:'space-between',
        paddingTop:'10px'
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
    }
}

Deck.propTypes = {

};

export default Deck
