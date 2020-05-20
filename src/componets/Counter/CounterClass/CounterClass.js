import React, { Component } from "react";
import './CounterClass.css';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  dec = () => this.setState(({ count }) => ({ count: count - 1 }));
  inc = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    const { count } = this.state;
    return (
      <div className="counterclass">
        <h2>CounterClass</h2>
        <button className="class_btn" onClick={this.dec}>
          -
        </button>
        <span className="class_span">{count}</span>
        <button className="class_btn" onClick={this.inc}>
          +
        </button>
      </div>
    );
  }
}

export default CounterClass;
