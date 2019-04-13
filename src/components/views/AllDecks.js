import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DeckList from '../partials/DeckList'

class AllDecks extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    componentDidMount() {
        
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
