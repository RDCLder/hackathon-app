import React from "react";
import CardDeckPage from "../CardDeckPage";
import FlippableCard from "../FlippableCard";
import { Button } from "react-bootstrap";

class HomeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starting: 0
    };
  }

  handleNext = () => {
    this.setState({
      starting: this.state.starting + 1
    });
  };

  handleBack = () => {
    this.setState({
      starting: this.state.starting - 1
    });
  };

  render() {

    const cardList = Object.values(this.props.deck).map(card => {
      return <CardDeckPage key={card.word} word={card.word} text={card.text} />;
    });
    const wordList = Object.values(this.props.deck).map(card => (card.word));
    const textList = Object.values(this.props.deck).map(card => (card.text));
    const starting = this.state.starting;
    const word = wordList[starting];
    const text = textList[starting];

    return (
      <div>
        <div style={styles.center}>
          <Button
            style={styles.button}
            disabled={this.state.starting === 0 ? true : false}
            onClick={this.handleBack}
          >
            Back
          </Button>
          <FlippableCard
            flipOnClick={true}
            front={word}
            back={text}
          />
          <Button
            onClick={this.handleNext}
            style={styles.button}
            disabled={
              textList.length - 1 <= starting ? true : false
            }
          >
            Next
          </Button>
        </div>
        <div>{cardList}</div>
      </div>
    );
  }
}

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: "5vw"
  }
};

export default HomeTab;
