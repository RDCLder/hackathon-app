import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class FlippableCard extends React.Component {

  render() {
    return (
      <Flippy
        flipOnClick={this.props.flipOnClick} // default false
        flipDirection="verticle" // horizontal or vertical
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={styles.card}
      >
        <FrontSide style={styles.centerFront}>
          {this.props.front}
        </FrontSide>
        <BackSide style={styles.centerBack}>
          {this.props.back}
        </BackSide>
      </Flippy>
    );
  }
}

const styles = {
  card: {
    height: "30vh",
    width: "60vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  centerFront: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
    fontWeight: "bold"
  },
  centerBack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1em"
  }
};

export default FlippableCard;
