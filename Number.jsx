import React, { Component } from "react";
import { createStore } from "redux";

class Number extends Component {
  render() {
    const number = (state = 7, action) => {
      switch (action.type) {
        case "Add":
          return state + 1;
        case "Subs":
          return state - 1;
        default:
          return state;
      }
    };

    let store = createStore(number);

    // store.subscribe(() => console.log(store.getState()));
    store.subscribe(() => console.log("Number is", store.getState()));

    store.dispatch({ type: "Add" });
    store.dispatch({ type: "Subs" });

    let increment = () => {
      //   store.getState() + 1;
      //   store.dispatch({ type: "Add" });
    };

    let decrement = () => {
      //   store.getState() - 1;
      //   store.dispatch({ type: "Subs" });
    };

    return (
      <>
        <p>Display Number using Redux</p>
        {/* <button onClick={decrement()}>-</button> */}
        {store.getState()}
        {/* <button onClick={increment()}>+</button> */}
      </>
    );
  }
}

export default Number;
