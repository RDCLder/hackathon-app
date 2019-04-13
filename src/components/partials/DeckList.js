import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

class DeckList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            decks: [{deckName: 'food', 
                    cards:[
                        {question:'1', answer: '1'},
                        {question:'2', answer: '2'},
                        {question:'3', answer: '3'}        
                        ]
                    },{deckName: 'movies', 
                    cards:[
                        {question:'1', answer: '1'},
                        {question:'2', answer: '2'},
                        {question:'3', answer: '3'}        
                        ]
                    },{deckName: 'shows', 
                    cards:[
                        {question:'1', answer: '1'},
                        {question:'2', answer: '2'},
                        {question:'3', answer: '3'}        
                        ]
                    }

        ]
    }
    }

    render() {
        var decklist = this.state.decks.map((deck, i) => {
            return <Deck key = {i} deckinfo = {deck}/>
        })
        return (
            <div style = {styles.decklist}>
                {decklist}
            </div>
        );
    }
}

const styles = {
    decklist: {
        margin:'40px'
    }
}

DeckList.propTypes = {
    
};

export default DeckList
