import React from 'react';
import PropTypes from 'prop-types';
import TabsforDeck from '../partials/TabsForDeck';

class DeckPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <div>
                <TabsforDeck />
            </div>
        );
    }
}


DeckPage.propTypes = {
    
};

export default DeckPage
