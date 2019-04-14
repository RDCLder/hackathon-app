import React from 'react';
import PropTypes from 'prop-types';

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
            <Tab eventKey="home" title="Home">
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="profile" title="Profile">
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        );
    }
}

const styles = {
    tabs: {
        margin:'50px',
        // border: 'solid rgba(0,0,0,.1) 1px',
        // padding:'50px'
    }
}

export default TabsForDeck
