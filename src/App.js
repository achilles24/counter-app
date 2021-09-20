import CounterContext from "./context/CounterContext";
import React from "react";
import Parent from "./component/Parent";
import "./styles.css";

export default function App() {
  const { state, onIncrement, onDecrement } = React.useContext(CounterContext);

  return (
    <div className="App">
      <h1>{state.title}</h1>
      <h1>{state.count}</h1>
      <Parent increment={onIncrement} decrement={onDecrement} />
    </div>
  );
}
