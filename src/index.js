import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider as CounterProvider } from "./context/CounterContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
  rootElement
);
