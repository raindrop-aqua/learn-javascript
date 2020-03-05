import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

class MyComponent extends React.Component {
    render() {
        return React.createElement(
            "input",
            {
                type: "text",
                placeholder: "値を入力して Enter を押下",
                onKeyPress: (e) => {
                    if (e.key === "Enter" && e.target.value) {
                        alert(e.target.value);
                    }
                }
            }
        )
    }
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById("main")
);