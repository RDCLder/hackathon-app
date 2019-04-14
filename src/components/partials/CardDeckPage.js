import React from 'react';
import PropTypes from 'prop-types';

class CardDeckPage extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div style = {styles.card}>
                <div style = {styles.word}>
                    {this.props.word}
                </div>
                <div style = {styles.text}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}
const styles = {
    card: {
        display:'flex',
        margin:'2%',
        marginTop:'50px',
        minHeight: '15vh',
        border: '1px solid rgba(0,0,0,.3)',

    },
    word: {
        width:'30%',
        display:'flex',
        alignItems: 'center',
        borderRight: '3px solid rgba(0,0,0,.1)',
        paddingLeft: '5%',
        margin:'1%'
    },
    text: {
        display:'flex',
        alignItems: 'center',
        flex: '1',
        paddingLeft: '5%'
    }
}


CardDeckPage.propTypes = {
    
};

export default CardDeckPage
