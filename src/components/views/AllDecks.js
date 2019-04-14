import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DeckList from '../partials/DeckList'
import { getFile } from 'blockstack';

class AllDecks extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            allDecks: {}
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
            this.setState({
                allDecks: 
                allDecks
            });
        })
    }
    
    render() {
        console.log(this.state.allDecks)
        return (
            <div>
                <DeckList allDecks={this.state.allDecks}/>
            </div>        
        );
    }
}

export default AllDecks;
