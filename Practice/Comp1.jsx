import React, { Component } from "react";
import { connect } from "react-redux";

class Comp1 extends Component {
  // getName = () => {
  // this.props.dispatch({ type: "GET_NAME" });
  // };

  render() {
    return (
      <>
        <p>Comp1 gets Name</p>
        My name is {this.props.name}
        {/* <button onClick={this.getName}>Get Name</button> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps)(Comp1);
