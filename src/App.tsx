import React from "react";

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

App.defaultProps = {
  message: "hello, default props",
  // description: "this is app component",
};

export default App;
