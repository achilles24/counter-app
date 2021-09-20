import React, { useReducer } from "react";
import reducerFn from "../reducers/CountReducers";

const CounterContext = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    title: "Counter",
    count: 0
  });

  const onIncrement = () => {
    dispatch({ type: "Increment", payload: 5 });
  };

  const onDecrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <CounterContext.Provider value={{ state, onIncrement, onDecrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
