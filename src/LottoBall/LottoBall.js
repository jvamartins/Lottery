import React, { Component } from "react";
import "./LottoBall.css";

class LottoBall extends Component {
  render() {
    return <div className="LottoBall">{this.props.value}</div>;
  }
}

export default LottoBall;
