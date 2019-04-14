import React from 'react';
import FIBQuestion from '../FIBQuestion'
import PropTypes from 'prop-types';

class FIBTab extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const cardList = Object.values(this.props.deck).map(card => {
            return <FIBQuestion key={card.word} word={card.word} text={card.text} />;
        });
        const wordList = Object.values(this.props.deck).map(card => (card.word));
        const textList = Object.values(this.props.deck).map(card => (card.text));

        return (
            <div>
                {cardList}
            </div>
        );
    }
}


FIBTab.propTypes = {
    
};

export default FIBTab
