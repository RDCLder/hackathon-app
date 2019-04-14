import React from 'react';
import Deck from './Deck';

class DeckList extends React.Component {

    render() {
        const deckNames = Object.keys(this.props.allDecks);
        const decklist = deckNames.map(deckName => (
            <Deck key={deckName}
                deckName={deckName}
                deck={Object.values(this.props.allDecks[deckName])}
                numberOfCards = {Object.values(this.props.allDecks[deckName]).length}
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

export default DeckList;
