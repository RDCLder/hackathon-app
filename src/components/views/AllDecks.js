import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DeckList from '../partials/DeckList'
import { getFile } from 'blockstack';

class AllDecks extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            allDecks: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData(){
        const options = { decrypt: false }
        getFile('decks.json', options)
        .then((file)=> {
            var decks = JSON.parse(file || '{}')
            console.log(decks);
            this.setState({
                allDecks: this.state.allDecks.concat(decks)
            });
            console.log(this.state.allDecks)
        })
    }


    
    render() {
        console.log(this.state.allDecks)
        return (
            <div>
                <div>
                    {/* {this.state.allDecks} */}
                </div>
                <DeckList />
            </div>        
        );
    }
}

export default AllDecks;
