import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    render() {
        return React.createElement("h1", null, "Hello Component!")
    }
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById("component")
);