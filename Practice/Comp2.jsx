import React, { Component } from "react";
import { connect } from "react-redux";

class Comp2 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>Comp2 gets Number</p>
        {`I'm ${this.props.number} years old.`}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.number,
});

export default connect(mapStateToProps)(Comp2);
