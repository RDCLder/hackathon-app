import React from 'react';
import PropTypes from 'prop-types';
import CardDeckPage from './CardDeckPage'
import FlippableCard from './FlippableCard'
import {Button} from 'react-bootstrap'

class DeckTabHome extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            starting: 0
        }
    }

    handleNext = () => {
        this.setState({
            starting: this.state.starting + 1
        })
    }

    handleBack = () => {
        this.setState({
            starting: this.state.starting - 1 
        })
    }

    render() {
        const cardList = Object.values(this.props.deck).map(card=>{
            return <CardDeckPage word = {card.word} text ={card.text}/>
        })

        const cardsWord = Object.values(this.props.deck).map(card=>{
            return card.word
        })

        const cardsText = Object.values(this.props.deck).map(card=>{
            return card.text
        })


        return (
        <div>
            <div style = {styles.center}>
                <Button style = {styles.button} disabled = {this.state.starting === 0  ? true : false} onClick = {this.handleBack}>Back</Button>
                <FlippableCard deck = {this.props.deck} cardsWord = {cardsWord} cardsText = {cardsText} starting = {this.state.starting}/>
                <Button onClick = {this.handleNext} style = {styles.button} disabled = {cardsText.length -1 <= this.state.starting ? true : false}>Next</Button>
            </div>
            <div>
                {cardList}
            </div>
        </div>

        );
    }
}

const styles = {
    center: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        margin: '5vw'
    }
}

DeckTabHome.propTypes = {
    
};

export default DeckTabHome
