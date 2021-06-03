import React, { Component } from "react";
import "../LottoBall/LottoBall";
import LottoBall from "../LottoBall/LottoBall";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Min",
    numBalls: 1,
    maxValue: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      balls: [],
    };
    this.generateClick = this.generateClick.bind(this);
  }

  generateClick() {
    this.generate();
  }

  generate() {
    let genBalls = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      let randomValue = Math.floor(Math.random() * this.props.maxValue) + 1;
      genBalls.push({ value: randomValue });
    }
    this.setState({
      balls: genBalls,
    });
  }

  render() {
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        <div>
          {this.state.balls.map((b) => (
            <LottoBall value={b.value} />
          ))}
        </div>
        <button onClick={this.generateClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
