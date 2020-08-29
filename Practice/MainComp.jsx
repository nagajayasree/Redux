import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

class MainComp extends Component {
  render() {
    return (
      <>
        <p>Main Component</p>
        <Provider store={store}>
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </Provider>
      </>
    );
  }
}

export default MainComp;
