import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

class DeckList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allDecks: {
                movies: {
                    GOTG: {
                        word: 'GOTG',
                        text: 'comedy'
                    },
                    HPATSS:{
                        word: 'HPATSS',
                        text: 'magic'
                    }

                }
            }
        }
    }

    render() {
        const deckNames = Object.keys(this.state.allDecks);
        const decklist = deckNames.map(deckName => (
            <Deck key={deckName}
                deckName={deckName}
                deck={Object.values(this.state.allDecks[deckName])}
                numberOfCards = {Object.values(this.state.allDecks[deckName]).length}
            />
        ));


        return (
            <div style={styles.decklist}>
                {decklist}
            </div>
        );
    }
}

const styles = {
    decklist: {
        margin: '40px'
    }
}

DeckList.propTypes = {

};

export default DeckList
