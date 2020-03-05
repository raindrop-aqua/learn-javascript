import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./src/store";
import TodoScreen from "./src/TodoScreen";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoScreen />
        </PersistGate>
      </Provider>
    );
  }
}
