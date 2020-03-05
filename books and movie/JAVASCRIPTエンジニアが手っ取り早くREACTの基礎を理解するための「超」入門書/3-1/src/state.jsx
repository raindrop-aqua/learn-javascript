import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {status: "ready"};
    }
    
    render() {
        return React.createElement("h1", null, this.state.status);
    }
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById("state")
);