import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Text } from "react-konva";

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Hello React and Konva" />
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
            draggable
          />
        </Layer>
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
