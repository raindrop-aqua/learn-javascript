import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import TodoScreen from "./src/TodoScreen";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
  }
}
