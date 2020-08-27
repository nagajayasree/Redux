import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <>
        <p>Counter</p>
        <button onClick={this.decrement} style={{ margin: "15px" }}>
          -
        </button>
        {this.props.count}
        <button onClick={this.increment} style={{ margin: "15px" }}>
          +
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
