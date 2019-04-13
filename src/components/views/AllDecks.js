import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DeckList from '../partials/DeckList'
import { getFile } from 'blockstack';

class AllDecks extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    componentDidMount() {
        this.fetchData()
    }
    fetchData(){
        getFile('decks.js')
    }
    render() {
        return (
            <div>
                <DeckList />
            </div>        
        );
    }
}

export default AllDecks;
