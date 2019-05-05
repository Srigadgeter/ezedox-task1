import React, { Component } from "react";

import "./Star.css";
import yellowStar from "./images/yellow.png";
import grayStar from "./images/gray.png";

const STAR_COUNT = 5;

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fillIndex: Array(STAR_COUNT).fill(0),
      isClicked: false
    };
  }

  componentDidMount() {
    localStorage.setItem(
      `card${this.props.cardId}`,
      JSON.stringify(this.state.fillIndex)
    );
  }

  handleMouseOver = index => {
    var fillIndex = [...this.state.fillIndex];
    fillIndex.fill(1, 0, index);

    this.setState({
      fillIndex,
      isClicked: false
    });
  };

  handleMouseOut = () => {
    if (!this.state.isClicked) {
      this.setState({
        fillIndex: JSON.parse(localStorage.getItem(`card${this.props.cardId}`))
      });
    }
  };

  handleClick = index => {
    var fillIndex = [...this.state.fillIndex];
    fillIndex.fill(1, 0, index);
    fillIndex.fill(0, index);

    this.setState({
      fillIndex,
      isClicked: true
    });

    // updating localStorage
    localStorage.setItem(`card${this.props.cardId}`, JSON.stringify(fillIndex));
  };

  render() {
    const drawStars = () => {
      var stars = [];
      for (let i = 1; i <= STAR_COUNT; i++) {
        stars.push(
          <img
            key={"star" + i}
            src={this.state.fillIndex[i - 1] ? yellowStar : grayStar}
            alt="emptyStar"
            onMouseOver={() => this.handleMouseOver(i)}
            onMouseOut={() => this.handleMouseOut()}
            onClick={() => this.handleClick(i)}
          />
        );
      }
      return stars;
    };

    return (
      <div className="stars" id={`star${this.props.key}`}>
        {drawStars()}
      </div>
    );
  }
}

export default Star;
