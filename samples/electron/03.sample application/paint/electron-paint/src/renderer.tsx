import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Stage, Text } from "react-konva";

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Hello React and Konva" />
        </Layer>
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
