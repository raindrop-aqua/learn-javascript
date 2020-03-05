import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

ReactDOM.render(
    React.createElement("h1", null, 'Hello World!'),
    document.getElementById('main')
);

ReactDOM.render(
    <h1>Hello JSX!</h1>,
    document.getElementById("main-jsx")
);