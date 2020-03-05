import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

class MyComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = { count: 0 };
    }

    render() {
        return [
            React.createElement(
                "input",
                {
                    type: "text",
                    onChange: (e) => this.setState({count: e.target.value.length})
                }
            ),
            React.createElement("div", null, this.state.count)
        ];
    }
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById("main")
);