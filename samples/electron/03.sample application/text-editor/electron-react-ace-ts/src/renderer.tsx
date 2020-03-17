import React, { Component } from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-github"

export default class App extends Component {
  onchange = (newValue: string) => {
    console.log("change", newValue);
  };

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={this.onchange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
