import React, { Component } from "react";
import { connect } from "react-redux";

class Comp3 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>Comp3 gets Word</p>
        <p>I'm coding in {this.props.word}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  word: state.word,
});

export default connect(mapStateToProps)(Comp3);
