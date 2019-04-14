import React from 'react';
import PropTypes from 'prop-types';
import DeckTabHome from './DeckTabHome'

import {Tabs, Tab} from 'react-bootstrap';

class TabsForDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            onSelect={key => this.setState({ key })}
            style = {styles.tabs}
            >
            <Tab eventKey="home" title="Home"  style = {styles.tabs}>
                <DeckTabHome deck = {this.props.deck}/>
            </Tab>
            <Tab eventKey="tab2" title="Tab2">
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="tab3" title="Tab3">
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        );
    }
}

const styles = {
    tabs: {
        margin:'50px',
        marginBottom:'0'
        // border: 'solid rgba(0,0,0,.1) 1px',
        // padding:'50px'
    }
}

export default TabsForDeck
