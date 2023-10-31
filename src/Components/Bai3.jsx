import React, { Component } from "react";

export default class Bai3 extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

//   
  componentDidMount() {
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div>
        <h3>Xin chao cac ban!</h3>
        <p>Bay gio la: {this.state.time}</p>
      </div>
    );
  }
}
