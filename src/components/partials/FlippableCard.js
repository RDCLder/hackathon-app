import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import PropTypes from 'prop-types';

class FlippableCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Flippy
                flipOnClick={true} // default false
                flipDirection="verticle" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={styles.card} 
            >
                <FrontSide style = {styles.centerFront}>
                    {this.props.cardsWord[this.props.starting]}
            </FrontSide>
                <BackSide style = {styles.centerBack}>
                    {this.props.cardsText[this.props.starting]}
            </BackSide>
            </Flippy>

        );
    }
}

const styles = {
    card:{
        height: '30vh',
        width: '60vw',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerFront:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em',
        fontWeight: 'bold'
    },
    centerBack:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:'1em'
    },
}

FlippableCard.propTypes = {
    
};

export default FlippableCard
