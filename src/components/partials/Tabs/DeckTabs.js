import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import HomeTab from "./HomeTab";
import MemoryTab from "./MemoryTab";
import FIBTab from "./FIBTab"

class TabsForDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "home"
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
        style={styles.tabs}
      >
        <Tab eventKey="home" title="Home" style={styles.tabs}>
          <HomeTab deck={this.props.deck} />
        </Tab>

        <Tab eventKey="match" title="Matching" style={styles.tabs} disabled>
          {/* <MatchTab deck={this.props.deck} /> */}
        </Tab>

        <Tab eventKey="fill" title="Fill in the Blank" style={styles.tabs}>
          <FIBTab deck={this.props.deck} />
        </Tab>

        <Tab eventKey="memory" title="Memory Game" style={styles.tabs}>
          {/* <MemoryTab deck={this.props.deck} /> */}
        </Tab>

        <Tab eventKey="crossword" title="Crossword Puzzle" style={styles.tabs} disabled>
          {/* <CrosswordTab deck={this.props.deck} /> */}
        </Tab>
      </Tabs>
    );
  }
}

const styles = {
  tabs: {
    margin: "50px",
    marginBottom: "0"
    // border: 'solid rgba(0,0,0,.1) 1px',
    // padding:'50px'
  }
};

export default TabsForDeck;
