import { createStore } from "redux";

const initialState = {
  name: "Raghav",
  number: 26,
  word: "React-Redux",
};

function reducer(state = initialState, action) {
  // switch (action.type) {
  //   case "GET_NAME": {
  //     return {
  //       name: `${action.payload} ${state.name}`,
  //     };
  //   }
  //   case "GET_NUMBER": {
  //     return {
  //       number: `${action.phrases.p1} ${state.number} ${action.phrases.p2}`,
  //     };
  //   }
  //   case "GET_WORD": {
  //     return `${action.payload} ${state.word}`;
  //   }
  //   default:
  //     return state;
  // }
  if (action.type === "GET_NAME") {
    return {
      // name: state.name,
      Name: `${action.payload} ${state.Name}`,
    };
  } else if (action.type === "GET_NUMBER") {
    return {
      // number: state.number,
      number: `${action.phrases.p1} ${state.number} ${action.phrases.p2}`,
    };
  } else if (action.type === "GET_WORD") {
    return {
      word: `${action.payload} ${state.word}`,
    };
  }
  return state;
}

const store = createStore(reducer);

store.dispatch({ type: "GET_NAME", payload: "My Name is" });

store.dispatch({
  type: "GET_NUMBER",
  phrases: {
    p1: "I'm",
    p2: "years old",
  },
});

store.dispatch({
  type: "GET_WORD",
  payload: "I'm learning",
});

export default store;
