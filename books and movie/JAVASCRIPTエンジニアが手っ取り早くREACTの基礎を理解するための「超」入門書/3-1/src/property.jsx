import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    render() {
        return React.createElement("h1", null, this.props.val)
    }
}

ReactDOM.render(
    React.createElement(MyComponent, {val: "hoge"}),
    document.getElementById("property")
);