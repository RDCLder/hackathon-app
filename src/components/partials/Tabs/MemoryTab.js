import React from "react";
import FlippableCard from "../FlippableCard";
import { Container, Row, Col, Button } from "react-bootstrap";

class DeckTabHome extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
				selected: null,
				matched: []
      };
    }

	handleClick(card) {
		if (this.state.selected === null) {
			this.setState({selected: card});
		}
		else if (this.state.selected !== null) {
			if (card.id === this.state.selected.id) {
				let newMatched = this.state.matched.slice();
				newMatched.push(card, this.state.selected);
				this.setState({ matched: newMatched });
				this.state.selected
			}
			else {

			}
		}
		let newSelected = this.state.selected.slice();
		// newSelected.append(i);
		this.setState({ selected: newSelected}, () => {

		});
	}

  render() {

		const wordList = Object.values(this.props.deck).map(card => ({id: card.word, back: card.word}));
		const textList = Object.values(this.props.deck).map(card => ({id: card.word, back: card.text}));
		const cardList = wordList.concat(textList);
		const cards = cardList.map((card, i) => (
			<FlippableCard key={i}
				id={card.id}
				flipOnClick={true}
				deck={this.props.deck}
				front="Cramstack"
				back={card.back}
				onClick={() => this.handleClick(card)}
			/>
		));

    return (
      <Container>

			{/* {cards} */}

      </Container>
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

export default DeckTabHome;
