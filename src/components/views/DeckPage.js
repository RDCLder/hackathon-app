import React from 'react';
import PropTypes from 'prop-types';
import TabsforDeck from '../partials/TabsForDeck';
import { getFile } from 'blockstack';


class DeckPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'home',
            deck:{}
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        const options = { decrypt: false }
        getFile('allDecks.json', options)
        .then((file)=> {
            const allDecks = JSON.parse(file || '{}');
            const deckName = window.location.pathname.slice(6);
            const deck = allDecks[deckName];
            this.setState({
                deck: deck
            });
        })
    }

    render() {
        return (
            <div>
                <TabsforDeck deck = {this.state.deck}/>
            </div>
        );
    }
}


DeckPage.propTypes = {
    
};

export default DeckPage
