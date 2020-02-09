import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {
  render() {
    const logoAttrs = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちはReact";
    const targets = ["World", "Apple", "iPhone"];

    return (
      <div className="App">
        <header className="App-header">
          {
            // コメントはこう書く
          }
          <img alt="logo" {...logoAttrs} />
          {title && <p>{title}</p>}
          {targets.map(target => (
            <p>Hello, {target}</p>
          ))}
        </header>
      </div>
    );
  }
}
