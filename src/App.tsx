import React from "react";
// import { Counter } from "./Counter";
import CounterWithReducer from "./CounterWithReducer";

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: "hello, default props",
  // description: "this is app component",
};

export default App;
