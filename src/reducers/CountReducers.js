const reducerFn = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + action.payload };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducerFn;
