import React, { Component } from "react";
import { createStore } from "redux";

class DiplayName extends Component {
  render() {
    const initialState = {
      name: "jayasree",
    };

    const reducer = (state = initialState, action) => {
      if (action.type === "Add_AtFront") {
        return action.payload + " " + state.name;
      } else if (action.type === "Add_AtLast") {
        return state.name + " " + action.payload;
      }
      return state;
    };

    const store = createStore(reducer);

    // store.dispatch({ type: "Add_AtLast", payload: "ramaka" });
    store.dispatch({ type: "Add_AtFront", payload: "naga" });

    return (
      <>
        <p>{store.getState()}</p>
      </>
    );
  }
}

export default DiplayName;
