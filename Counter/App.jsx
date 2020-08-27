import React from "react";
import "./App.css";
import Counter from "./Code/Redux/Counter/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0,
};

function changeCounter(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(changeCounter);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
